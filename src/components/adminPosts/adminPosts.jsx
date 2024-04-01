import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actionServer";

const AdminPosts = async () => {

    const posts = await getPosts();


    return(
        <div className={styles.container} >
            <h1>Posts</h1>
            {posts?.map((post)=>(
                <div key={post.id} className={styles.post}>
                    <Image src={post?.image || "/noAvatar.png"} alt={post.title} width={50} height={50} />
                    <span className={styles.postTitle}>{post.title}</span>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id}/>
                        <button className={styles.deleteBtn} type="submit">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
};

export default AdminPosts;