"use client"
import React from 'react'
import styles from "./profileEdit.module.css"
import { useRouter } from "next/navigation";
import { useState } from "react"
import Image from 'next/image'
import { useContext} from "react"
import { GlobalContext } from "../../../authContext"
import { updateUser } from '../../../services/user'
import { helperForUploadingImageToFirebase } from '../../../lib/utils/fire';



const EditSection = () => {
    const {isAuthUser,setIsAuthUser}=useContext(GlobalContext)
    const [firstName,setFirstName]=useState(isAuthUser?.firstName);
    const [lastName,setLastName]=useState(isAuthUser?.lastName);
    const [title,setTitle]=useState(isAuthUser?.title);
    const [picture,setPicture]=useState(isAuthUser?.picture)
    const [email,setEmail]=useState(isAuthUser?.email)
    const router=useRouter()


    async function handleImage(event) {

        const extractImageUrl = await helperForUploadingImageToFirebase(event.target.files[0])
        setPicture(extractImageUrl)
  
  
      }
    async function handleEditUser(e){
      e.preventDefault()
      const edituser=await updateUser(isAuthUser?.id,{firstName,lastName,title,picture,email})

      setIsAuthUser({
        "title":`${edituser.title}`,
        "firstName": `${edituser?.firstName}`,
        "lastName":  `${edituser?.lastName}`,
        "picture":  `${edituser?.picture}`,

      })
      
      if(edituser){
  
          setTimeout(()=>{
              router.push(`/profile`)
          },500)
  
      }
  
    }

    return (
        <div className={styles.profilesec}>
            
            <div className={styles.loginpage}>
                <h1 className={styles.signin}>Edit</h1>
                {picture ? <Image width={100} height={100} src={picture} alt="" className={styles.avatar} /> :
                            <Image width={100} height={100} src={require("../../../../public/avatar1.png")} alt="" className={styles.avatar}/>
                        }
                <input onChange={handleImage} accept="image/" max="1000000" type="file" className={styles.image}/> 
                <form action="" className={styles.form}>
                    
                    <input className={styles.input} value={title || ''} onChange={(e)=>setTitle(e.target.value)}/>
                    <input className={styles.input} value={firstName || ''} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input className={styles.input} value={lastName || ''} onChange={(e)=>setLastName(e.target.value)}/>
                    <button className={styles.loginButton} onClick={handleEditUser}>Update</button>
    
                </form>
    
    
            </div>
          
        </div>
      )
}

export default EditSection
