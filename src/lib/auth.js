import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";


const login = async (credentials) => {

    console.log("cxredentials", credentials)

    try
    {
        connectToDb();
        const user = await User.findOne({username: credentials.username});
        if (!user)
            throw new Error("Invalid credentials");

        const match = await bcrypt.compare(credentials.password, user.password);
        if (!match)
            throw new Error("Invalid credentials");
        console.log("user", user);
        return (user);

    }catch (error){
        console.log("Error logging in", error);
        throw new Error("Error logging in");
    };
};


export const {
    handlers: {GET,POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers : [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialProvider({
            async authorize(credentials){
                try
                {
                    const user = await login(credentials);
                    return (user)
                } 
                catch (error)
                {
                    console.log("Error authorizing", error);
                    throw new Error("Error authorizing");
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile}){
           if (account.provider === "github"){
               try
               {
                    connectToDb();
                     const user = await User.findOne({email: profile.email});
                     if (!user)
                     {
                         const newUser = new User({
                             email: profile.email,
                             username: profile.login,
                             image: profile.avatar_url,
                         });
                         await newUser.save();
                     }
               }    
               catch (error)
               {
                   console.log("Error signing in", error);
                   throw new Error("Error signIn");
               }
            }
            return true;
        },
        ...authConfig.callbacks,
    }
})