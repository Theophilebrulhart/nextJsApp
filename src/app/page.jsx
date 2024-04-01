import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aut nostrum harum, reiciendis eligendi recusandae doloribus nemo? 
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill className={styles.imgBrands}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.imgHero}/>
      </div>
    </div>
  )
};

export default Home;