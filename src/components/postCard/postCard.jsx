"use client"
import Link from "next/link"
import styles from "./postCard.module.css"
import Image from "next/image"
import {format} from "timeago.js"
import { FcLike } from "react-icons/fc";

const PostCard = ({post}) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post?.image && <div className={styles.imgContainer}>
            <Image src={post.image} alt="" className={styles.img} width={250} height={250}/>
            </div> 
        }
        <div className={styles.likedate}>
          <span className={styles.likes}>
              Likes <FcLike/>{post?.likes}
          </span>
          <span className={styles.date}>
              {format(post?.publishDate)}
          </span>
        </div>

      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1> 
        <p className={styles.desc}>{post.text}</p>
        <Link className={styles.link} href={`/posts/${post.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
