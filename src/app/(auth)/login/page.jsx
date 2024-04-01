
const { auth } = require("@/lib/auth");
import styles from "./login.module.css";
import Link from "next/link";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = async () => {

    // const session = await auth();
    // console.log(("session", session))

    return (
        <div className={styles.container}>
            <LoginForm/>
            <Link href="/register">Don't have an account ? <b>Register</b></Link>
        </div>
    )
} 
export default LoginPage; 