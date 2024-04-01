"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import NavLink from './NavLink'
import { handleGithubLogout } from '@/lib/actionServer';

const links = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: "About", path: "/about"}
]

export default function Links({session, admin}) {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div className={styles.linksContainer}>

      <div  className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
          ))}
        {session?.user ? (
          <>
          {session.user?.isAdmin && (<NavLink link={{ name: "Admin", path: "/admin" }} />)}
          <form action={handleGithubLogout}>
            <button className={styles.logout}>Logout</button>
          </form>
          </>
        ) : (
          <NavLink link={{ name: "Login", path: "/login" }} />
          )}
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)} className={styles.menuBtn}>MENU</button>
      {isOpen &&
        <div className={styles.mobileLinks}>
          {links.map((link, key) => (
            <NavLink key={link.title} link={link} />
          ))}
          {session ? (
            <>
              {admin && (<NavLink link={{ name: "Admin", path: "/admin" }} />)}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink link={{ name: "Login", path: "/login" }} />
          )}
        </div>
      }
    </div>
  )
}
