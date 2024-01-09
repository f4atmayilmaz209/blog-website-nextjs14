"use client"
import React from 'react'
import styles from "./profile.module.css"
import ProfileSection from "../../components/profileSection/profileSection"
import UsersSection from "../../components/userSection/usersSection"


const ProfilePage = () => {



  return (
    <div className={styles.profile}>
      <ProfileSection/>
      <UsersSection/>
    </div>
  )
}

export default ProfilePage
