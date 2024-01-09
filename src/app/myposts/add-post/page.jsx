"use client"
import { GlobalContext } from "../../../authContext"
import { useContext, useState } from "react"
import { useRouter } from "next/navigation"
import { createPost } from "../../../services/post"
import styles from "./addpost.module.css"
import Image from "next/image"
import { helperForUploadingImageToFirebase } from "../../../lib/utils/fire"



export default function AdminAddNewProduct() {
    const {isAuthUser}=useContext(GlobalContext)
    const router=useRouter()
    const [image,setImage]=useState('')
    const [text,setText]=useState('')
    const [likes,setLikes]=useState(0)
    const [tags,setTags]=useState([])
    const [owner,setOwner]=useState(isAuthUser?.id || "sfsfsfs")


    async function handleImage(event) {
        const extractImageUrl = await helperForUploadingImageToFirebase(event.target.files[0])

        if(extractImageUrl !==''){
            setImage(extractImageUrl)
        }

    }

    async function handleAddProduct(){
        const publishDate=new Date().toJSON()
        const newpost=await createPost({image,likes,text,tags,publishDate,owner})


        if(newpost){

            setTimeout(()=>{
                router.push('/myposts')
            },500)

        }

    }

    return (
        <div className={styles.container}>

            {image ? <Image width={100} height={100} src={image} alt="" className={styles.avatar} /> :
                <Image width={100} height={100} src={require("../../../../public/avatar.png")} alt="" className={styles.avatar}/>
            }
            <input onChange={handleImage} accept="image/" max="1000000" type="file" className={styles.image}/> 
            <input onChange={(event)=>{setText(event.target.value)}} value={text} placeholder="What you think?" type="text" className={styles.text}/>

            <button onClick={handleAddProduct} className={styles.button}>
                Add Post
            </button>
              

            {/* <Notification/> */}
        </div>
    )
}