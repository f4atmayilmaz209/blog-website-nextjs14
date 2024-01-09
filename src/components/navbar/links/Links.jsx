"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/navLink'
import Image from 'next/image'
import { useContext } from "react";
import { GlobalContext } from "../../../authContext"
import { useRouter } from 'next/navigation'


const links=[
  {
      title:"Homepage",
      path:"/"
  },{
      title:"Posts",
      path:"/posts"
  },{
    title:"My Posts",
    path:"/myposts"
  },{
    title:"About",
    path:"/about"
  },
  {
    title:"Contact",
    path:"/contact"
  },
]



const Links = () => {

  const [open,setOpen]=useState(false)
  const {isAuthUser,setIsAuthUser}=useContext(GlobalContext)
  const router=useRouter()

  const handleLogout=()=>{
    setIsAuthUser(null)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link)=>(
          <NavLink item={link} key={link.title}/>
        ))}
        {
          isAuthUser ? (
            <>
            <Link href={"/profile"}>
             <Image width={50} height={50} src={isAuthUser?.picture} alt="" className={styles.avatar}/>
            </Link>
            <button className={styles.logout} onClick={handleLogout}>Logout</button> 
            </>

          ) : (
            <NavLink item={{title:"Login",path:"/login"}}/>
          )
        }
      </div>
      {/* <button className={`${styles.menuButton}`} onClick={()=>setOpen((prev)=>!prev)}>Menu</button> */}
      <Image className={`${styles.menuButton}`} src="/menu.png" alt="" width={30} height={30} onClick={()=>setOpen((prev)=>!prev)}/>
      {
        open && <div className={styles.mobileLinks}>
          {links.map((link)=>(
            <NavLink item={link} key={link.title}/>
          ))}

        </div>
      }
    </div>
  )
}

export default Links
