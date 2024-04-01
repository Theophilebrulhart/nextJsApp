import React from 'react'
import styles from "./BlogPage.module.css"
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from '@/lib/data'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}})

  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  
  return res.json();
}

const BlogPage = async () => {

    const posts = await getData();
    //const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts && posts.map((post, key)  => (
        <PostCard key={key} post={post}/>
      ))}
    </div>
  )
}

export default BlogPage;
