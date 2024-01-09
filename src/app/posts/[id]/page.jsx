"use client"
import styles from "./singlePost.module.css"
import Image from "next/image"
import { useParams } from "next/navigation";
import {format} from "timeago.js"
import { usePostId } from "../../../services/post";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { deletePost } from "../../../services/post";
import { useRouter } from "next/navigation"

const SinglePostPage = () => {
  const params = useParams();
  const post = usePostId(params.id);
  const router=useRouter()


  const handleDeletePost=async()=>{
    const deletepost=await deletePost(params.id)

    if(deletepost){
      setTimeout(()=>{
        router.push('/myposts')
    },500)
    }
  }
  const handleEditPost=async()=>{
    router.push(`/posts/${post?.data?.id}/edit`)
  }
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image width={450} height={350} src={post?.data?.image} alt="" className={styles.img} />
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
          <div className={styles.EditText} onClick={handleEditPost}>
              <CiEdit/>
          </div>
          <div className={styles.DeleteText} onClick={handleDeletePost}>
              <MdDeleteOutline/>
          </div>
        </div>
        <div className={styles.content}>
          {post?.data?.text}
        </div>
      </div>
  </div>
  )
}

export default SinglePostPage
