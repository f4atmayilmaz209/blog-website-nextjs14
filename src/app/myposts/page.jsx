"use client"
import PostCard from "../../components/postCard/postCard"
import styles from "./myposts.module.css"
import { usePostByUser } from "../../services/post";
import { useContext } from "react";
import { GlobalContext } from "../../authContext"


const MyPosts = async() => {
    const {isAuthUser,setIsAuthUser}=useContext(GlobalContext)
    console.log(isAuthUser.id)
    const { data } = usePostByUser(isAuthUser.id);

  return (

      <div className={styles.container}>

        {data?.data?.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
        
      </div>


  );
}

export default MyPosts
