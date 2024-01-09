"use client"
import React from 'react'
import styles from "./profileSection.module.css"
import { useRouter } from "next/navigation";
import { useState } from "react"
import axios from "axios"
import Image from 'next/image'
import { useContext} from "react"
import { GlobalContext } from "../../authContext"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { deleteUser } from '../../services/user'
import { helperForUploadingImageToFirebase } from '../../lib/utils/fire'

const ProfileSection = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [title,setTitle]=useState("");
    const [picture,setPicture]=useState('')
    const [email,setEmail]=useState("")
    const router=useRouter()
    const {isAuthUser,setIsAuthUser}=useContext(GlobalContext)

    async function handleImage(event) {
        const extractImageUrl = await helperForUploadingImageToFirebase(event.target.files[0])
        setPicture(extractImageUrl)
  
  
      }
      const handleSubmit = async (e) => {
          e.preventDefault();
          const formData={ firstName,lastName,title,picture,email}
          try {
            const response = await axios.post('https://dummyapi.io/data/v1/user/create', formData, {
              headers: {
                'Content-Type': 'application/json',
                'app-id':'6597f3003d2aa20dea4fd7af'
              },
            });
      
            if (response.status === 200) {
              console.log('Message sent successfully');
              router.push("/myposts")
            } else {
              console.error('Failed to send message');
            }
  
          } catch (error) {
            console.error('Error sending message:', error);
          }
        };
    
    const handleDeletePost=async()=>{
      const deleteuser=await deleteUser(isAuthUser.id)
      setIsAuthUser(null)

      if(deleteuser){
        setTimeout(()=>{
          router.push('/profile')
      },500)
      }
    }
    const handleEditPost=async()=>{
      router.push(`/profile/edit`)
    }
    return (
        <div className={styles.profilesec}>
            
            <div className={styles.loginpage}>
                <span className={styles.signin}>Profile</span>
                {isAuthUser ? <Image width={100} height={100} src={isAuthUser.picture} alt="" className={styles.avatar} /> :
                            <Image width={100} height={100} src={require("../../../public/avatar1.png")} alt="" className={styles.avatar}/>
                }
                <div className={styles.item}>
                    <label>Title:</label> 
                    <span>{isAuthUser.title}</span>
                </div>
                <div className={styles.item}>
                    <label>Email:</label> 
                    <span>{isAuthUser.email}</span>
                </div>
                <div className={styles.item}>
                    <label>Firstname:</label> 
                    <span>{isAuthUser.firstName}</span>
                </div>
                <div className={styles.item}>
                    <label>Lastname:</label> 
                    <span>{isAuthUser.lastName}</span>
                </div>    
                <div className={styles.EditText} onClick={handleEditPost}>
                <CiEdit/>
                 </div>
                <div className={styles.DeleteText} onClick={handleDeletePost}>
                <MdDeleteOutline/>
                </div>

            </div>



          
        </div>
      )
}

export default ProfileSection
