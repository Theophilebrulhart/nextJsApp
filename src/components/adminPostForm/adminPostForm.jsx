"use client";

import { addPost } from "@/lib/actionServer";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {

    const [state, formAction] = useFormState(addPost, undefined);

    return(
        <form className={styles.container} action={formAction}>
            <h1>Add new Post</h1>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="desc" placeholder="desc" />
            <input type="text" name="slug" placeholder="slug" />
            {/*  <input type="file" name="img" placeholder="img" accept="image/*" /> */}
            <input type="hidden" name="userId" value={userId} />

            <button>Add</button>
            {state && state.error}
            
        </form>
    )
};

export default AdminPostForm;

  {/* <form action={addPost}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="desc" placeholder="desc" />
                <input type="text" name="slug" placeholder="slug" />
                <input type="text" name="userId" placeholder="User ID" />
                <button type="submit">Submit</button>
            </form> */}