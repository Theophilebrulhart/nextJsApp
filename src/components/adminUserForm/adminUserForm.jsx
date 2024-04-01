"use client"
import { addUser } from "@/lib/actionServer";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = async () => {

    const [state, formAction] = useFormState(addUser, undefined);

    return(
        <form className={styles.container} action={formAction}>
            <h1>Create new user</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" placeholder="Password" name="password"/>
            {/* <input type="file" name="img" placeholder="img" accept="image/*" /> */}
            <select name="isAdmin">
                <option value="true">Admin</option>
                <option value="false">User</option>
            </select>
            <button>Add</button>
            {state && state.error}
        </form>
    )
};

export default AdminUserForm;