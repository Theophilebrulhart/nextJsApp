import React from 'react'
import Links from './Links'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth';

async function Navbar() {

  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <Links session={session}/>
    </div>
  )
}

export default Navbar;