"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './Navbar.module.css'

export default function NavLink({link}) {
    const pathName = usePathname();

  return (
    <Link href={link.path} className={`${styles.NavLinkContainer} ${pathName === link.path && styles.active}`}>
        {link.name}
    </Link>

  )
}
