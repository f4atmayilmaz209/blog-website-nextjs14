import React from 'react'
import styles from "./tags.module.css"
import Link from 'next/link'

const Tags = ({setWord}) => {


  return (
    <div className={styles.tags}>
      <h1 className={styles.tags}>Tags:<Link href={"/posts/tag/human"}><span className={styles.tag}>Human</span></Link>,<Link href={"/posts/tag/animal"}><span className={styles.tag}>Animal</span></Link>,<Link href={"/posts/tag/dog"}><span className={styles.tag}>Dog</span></Link></h1>
    </div>
  )
}

export default Tags
