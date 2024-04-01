import React from 'react'
import styles from './PostCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard({post}) {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && 
        <div className={styles.imgContainer}>
            <Image src={post.img} alt="post" fill className={styles.img}/>
         </div>
        }
        <span className={styles.date}>01.01.24</span>
      </div>
      <div className={styles.bottom}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Read more</Link>
      </div>
    </div>
  )
}
