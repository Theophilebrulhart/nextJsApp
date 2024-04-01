import Image from 'next/image'
import React from 'react'
import styles from "./Contact.module.css"

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input}/>
          <input type="text" placeholder="Email" className={styles.input}/>
          <input type="text" placeholder="Address" className={styles.input}/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" className={styles.textarea} className={styles.input}></textarea>
          <button>Send</button>

        </form>
      </div>

    </div>
  )
}
