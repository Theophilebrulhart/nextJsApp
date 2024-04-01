"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {

    const { title, desc, slug, userId } = Object.fromEntries((formData));
    
    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        const savedPost = await newPost.save();
        revalidatePath("/blog");
        revalidatePath("/admin")
        console.log("savedPost", savedPost);

    }
    catch (error){
        console.log("Error adding post: ", error);
        return {error : "Error adding post"};
    }
};



export const deletePost = async (formData) => {


    const { id } = Object.fromEntries((formData));
    
    try{
        connectToDb();
        const deletePost = await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
        console.log("deletePost", deletePost);

    }
    catch (error){
        console.log("Error deleting post: ", error);
        throw new Error("Error deleting post");
    }
};

export const addUser = async (previousState, formData) => {

    const { username, email, password, img, isAdmin } = Object.fromEntries((formData));
    
    try{
        connectToDb();
        const newPost = new User({
            username,
            email,
            password,
            img, 
            isAdmin
        });
        const savedUser = await newPost.save();
        revalidatePath("/admin");
        console.log("savedPost", savedUser);

    }
    catch (error){
        console.log("Error adding post: ", error);
        return {error : "Error adding User"};
    }
};



export const deleteUser = async (formData) => {


    const { id } = Object.fromEntries((formData));
    
    try{
        connectToDb();

        await Post.deleteMany({userId: id});
        const deletePost = await User.findByIdAndDelete(id);
        revalidatePath("/admin");
        console.log("deleteUser", deleteUser);

    }
    catch (error){
        console.log("Error deleting post: ", error);
        throw new Error("Error deleting post");
    }
};


export const handleGithubLogin = async () => {
    await signIn("github");
}


export const handleGithubLogout = async () => {
    await signOut("github");
}

export const handleRegister = async (previousState ,formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries((formData));
  
    if(password !== passwordRepeat){
        return {error : "Passwords do not match"};
    }
    
    try{
        connectToDb();

        const user = await User.findOne({username});
        if(user){
            return {error : "User already exists"};
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
            const newUser = new User({
                username,
                email,
                password : hashedPassword
            });
            const savedUser = await newUser.save();
            console.log("savedUser", savedUser);
            return {success : true  };
        
    }
    catch (error){
        console.log("Error adding user: ", error, email);
        throw new Error("Error adding user");
    }
}

export const handleLogin = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err)
        if (err.message.includes("CredentialsSignin")) 
            return { error: "Invalid username or password" };
    }
    return { success: true };
  };