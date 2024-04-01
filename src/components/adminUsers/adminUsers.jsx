import { getUses } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actionServer";

const AdminUsers = async () => {

    const users = await getUses();

    return(
        <div className={styles.container}>
            <h1>Users</h1>
            {users?.map((user)=>(
                <div key={user.id} className={styles.user}>
                    <Image src={user?.img || "/noAvatar.png"} alt={user.username} width={50} height={50} />
                    <span className={styles.userTitle}>{user.username}</span>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id}/>
                        <button className={styles.deleteBtn} type="submit">Delete</button>
                    </form>
                </div>
            ))}

        </div>
    )
};

export default AdminUsers;