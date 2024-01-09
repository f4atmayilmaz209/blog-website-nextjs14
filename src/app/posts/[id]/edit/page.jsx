"use client"
import React from 'react'
import { useParams } from "next/navigation";
import styles from "./singlePostedit.module.css"
import { useRouter } from "next/navigation"
import { updatePost, usePostId } from "../../../../services/post";
import Image from "next/image"
import {format} from "timeago.js"
import {useState} from "react"
import { helperForUploadingImageToFirebase } from '../../../../lib/utils/fire';





const EditPage = () => {
  const params = useParams();
  const post = usePostId(params.id);
  const router=useRouter()
  const [image,setImage]=useState(post?.data?.image)
  const [text,setText]=useState(post?.data?.text)


  async function handleImage(event) {
    const extractImageUrl = await helperForUploadingImageToFirebase(event.target.files[0])
    setImage(extractImageUrl)


}
  
  async function handleEditPost(){
    const editpost=await updatePost(params?.id,{image,text})



    if(editpost){

        setTimeout(()=>{
            router.push(`/posts/${params?.id}`)
        },500)

    }

  }

  return (
 
      <div className={styles.container}>
  
        <div className={styles.imgContainer}>
          <Image width={450} height={350} src={image} alt="" className={styles.img} />
          <input onChange={handleImage} accept="image/" max="1000000" type="file" className={styles.image}/> 
        </div>
  
        <div className={styles.textContainer}>
  
          <div className={styles.detail}>
            <Image width={50} height={50} src={post?.data?.owner?.picture} alt="" className={styles.avatar} />

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Owner</span>
              <span className={styles.detailValue}>
                {post?.owner?.firstName} {post?.data?.owner?.lastName}
              </span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {format(post?.data?.publishDate)}
              </span>
            </div>

          </div>
          <textarea onChange={(event)=>{setText(event.target.value)}} value={text} type="text" className={styles.text}></textarea>
          <button onClick={handleEditPost} className={styles.button}>
            Edit Post
          </button>
        </div>
    </div>
    )

}

export default EditPage
