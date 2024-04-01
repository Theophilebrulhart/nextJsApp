import React from 'react'
import styles from './postUser.module.css'
import { get } from 'mongoose';
import { getUser } from '@/lib/data';
import Image from 'next/image';

// const getData = async (userId) => {
//     console.log("getdata user id", userId)
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
//     if (!response.ok) { throw new Error('Something went wrong'); }

//     const data = await response.json();
//     return data;
// }

const PostUser = async (userId) => {

    const id = userId.user;
    // const user = await getData(id); 
    const user = await getUser(id);
    console.log("user", user
    )
    console.log("userID", userId)

  return (
    <div className={styles.author}>
            <div className={styles.avatarContainer}>
              <Image src={user.img ? user.img : "/noavatar.png"} alt="post" fill className={styles.avatar}/>
            </div>
        <span className={styles.authorTitle}>Author</span>
        <span className={styles.authorName}>{user.username}</span>
    </div>
  )
}

export default PostUser;