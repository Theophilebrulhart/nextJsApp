import Image from 'next/image'
import React from 'react'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}> 
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi distinctio autem, dolorem nisi delectus odio. Dignissimos vel, necessitatibus natus aperiam nostrum fugit amet
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 className={styles.nbr}>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.nbr}>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.nbr}>10K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}/>
      </div>
    </div>
  )
}
