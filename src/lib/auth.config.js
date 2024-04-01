export const authConfig = {
    pages:{
        signIn: '/login',
    },
    providers: [],
    callbacks:{
        async jwt({token, user}){
            if (user){
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}){
            if (token){
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({auth, request}){
            let user = auth?.user ;
           
            if (user){
                user = auth.user;
            }
              const  isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
               const  isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
                const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            console.log("user", user);
            // Only admin can see admin page

            if (isOnAdminPage && !user?.isAdmin){
                return false
            }

            // Only logged in users can see blog page
            if (isOnBlogPage && !user){
                return false
            }

            // Only logged out users can see login page

            if (isOnLoginPage && user){
                return Response.redirect(new URL("/", request.nextUrl));  
            }
            return true;
        },
    },
};