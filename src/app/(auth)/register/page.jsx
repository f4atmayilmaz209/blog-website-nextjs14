"use client"
import { useState } from "react"
import styles from "./register.module.css"
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios"
import { helperForUploadingImageToFirebase } from "../../../lib/utils/fire"




export default function Register() {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [title,setTitle]=useState("");
    const [picture,setPicture]=useState('')
    const [email,setEmail]=useState("")
    const router=useRouter()

    
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


  return (
    <div className={styles.login}>
        
        <div className={styles.loginpage}>
            <h1 className={styles.signin}>Register</h1>
            {picture ? <Image width={100} height={100} src={picture} alt="" className={styles.avatar} /> :
                        <Image width={100} height={100} src={require("../../../../public/avatar1.png")} alt="" className={styles.avatar}/>
                    }
            <input onChange={handleImage} accept="image/" max="1000000" type="file" className={styles.image}/> 
            <form action="" className={styles.form}>
                
                <input className={styles.input} placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                <input className={styles.input} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input className={styles.input} placeholder="First name" onChange={(e)=>setFirstName(e.target.value)}/>
                <input className={styles.input}  placeholder="Last name" onChange={(e)=>setLastName(e.target.value)}/>
                <button className={styles.loginButton} onClick={handleSubmit}>Register</button>

            </form>


        </div>
      
    </div>
  )
}