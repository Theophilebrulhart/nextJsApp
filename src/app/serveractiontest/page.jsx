import { addPost, deletePost } from "@/lib/actionServer";

const ServerActionTestPage = async () => {
  
    return (
        <div>
            <form action={addPost}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="desc" placeholder="desc" />
                <input type="text" name="slug" placeholder="slug" />
                <input type="text" name="userId" placeholder="User ID" />
                <button type="submit">Submit</button>
            </form>

            <form action={deletePost}>
                <input type="text" name="id" placeholder="ID" />
                <button type="submit">Delete</button>
            </form>
        </div>
    )
};

export default ServerActionTestPage;