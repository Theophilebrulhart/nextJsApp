import React, { Suspense } from 'react';
import styles from "./SinglePost.module.css";
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  
  return res.json();
}

const SinglePostPage = async ({params}) => {


  const {slug} = params;
  const post = await getData(slug);
  //const post = await getPost(slug);

  console.log("post", post)
  console.log("slug", slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="post" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.authorContainer}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser user={post.userId}/>
          </Suspense>
          <div className={styles.author}>
            <span className={styles.authorTitle}>Published</span>
            <span className={styles.publishedDate}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  )
}

export default SinglePostPage;
