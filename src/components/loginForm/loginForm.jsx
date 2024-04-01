"use client";
import { handleGithubLogin, handleLogin } from "@/lib/actionServer";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

    const [state, formAction] = useFormState(handleLogin);
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/");
    }, [state?.success, router]);

    return (
        <div className={styles.container}>
        <form action={formAction} className={styles.signinForm}>
                <input type="text" placeholder="Username" name="username"/>
                <input type="password" placeholder="Password" name="password"/>
                <button>Login</button>
            </form>
            {state?.error}
            <form action={handleGithubLogin}>
                <button className={styles.githubBtn}>Login with Github</button>
            </form>
            </div>
    )
};
export default LoginForm;