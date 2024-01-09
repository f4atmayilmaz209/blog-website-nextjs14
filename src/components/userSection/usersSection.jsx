"use client"
import React from 'react'
import styles from "./usersSection.module.css"
import Image from 'next/image'
import { useEffect } from 'react'
import { getUsers } from '../../services/user'
import { useState } from 'react'

const UsersSection = () => {
    const [users,setUsers]=useState([{}])
    useEffect(() => {
        const fetchDatas=async()=>{
          //apideki datanın başlangıçta Get metoduyla çekilmesi 
          const res=await getUsers()
          setUsers(res.data)
        };
        fetchDatas();
  
  
      }, [])


  return (

        <div className={styles.users}>
            
        {users?.data?.map((user,i)=>(
            <div key={i} className={styles.item}>
                <Image width={100} height={100} src={user.picture} alt="" className={styles.avatar} /> 
            </div>

        ))}
        </div>

  )
}

export default UsersSection
