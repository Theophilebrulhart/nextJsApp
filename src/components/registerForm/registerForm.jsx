"use client"; 
import { handleRegister } from '@/lib/actionServer';
import styles from './registerForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const RegisterForm = () => {

    const [state, formAction] = useFormState(handleRegister);

    const router = useRouter();

    useEffect(() => {
      state?.success && router.push("/login");
    }, [state?.success, router]);

    return(
        <form className={styles.form} action={formAction}>
        <input type="text" placeholder="Username" name="username"/>
        <input type="email" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
        <input type="password" placeholder="Password repeat" name="passwordRepeat"/>
        <button>Register</button>
        <Link href="/login">Already have an account ? <b>Login</b></Link>
        {state?.error}
      </form>
    )
};
export default RegisterForm;
