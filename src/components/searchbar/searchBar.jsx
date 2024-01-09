"use client"
import React from 'react';
import styles from "./searchBar.module.css"
import { IoSearchCircle } from "react-icons/io5";

const SearchBar = ({keyword,onChange}) => {

  return (
    <form className={styles.form} action="">
      <input className={styles.input} value={keyword} onChange={(e)=>onChange(e.target.value)}/>
      <IoSearchCircle className={styles.icon}/>
    </form>
  );
}

export default SearchBar;