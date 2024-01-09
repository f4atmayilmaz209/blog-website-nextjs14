"use client"
import "./navbar.module.css"
import Links from './links/Links'
import styles from "./navbar.module.css"
import Link from "next/link" 
import Image from "next/image"


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image width={70} height={70} src={require("../../../public/9hj2_px47_220721.jpg")} alt="" className={styles.avatar}/>
      </Link>
      <div> 
        <Links/>
      </div>
    </div>
  )
}

export default Navbar
