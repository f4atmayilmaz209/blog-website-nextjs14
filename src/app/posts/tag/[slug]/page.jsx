"use client"
import PostCard from "../../../../components/postCard/postCard"
import styles from "../../blog.module.css"
import { useState,useEffect } from "react";
import axios from "axios"
import Tags from "../../../../components/tags/Tags";
import { useParams } from "next/navigation";

const TagPage = () => {
    const params = useParams();
    const [posts,setPosts]=useState();


    useEffect(()=>{
      const handleWord = async () => {

        try {
          const response = await axios.get(`https://dummyapi.io/data/v1/tag/${params.slug}/post`,{
             headers:{
             'app-id':'6597f3003d2aa20dea4fd7af'
             },
          })
          const result=response.data
          setPosts(result?.data)
       
        } catch (e) {
          console.log('error',e)
          
        } 
      };
      handleWord()
    },[])





  return (
    <>

    <Tags/>
    <div className={styles.container}>
      {posts?.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
    </>
  );
};


export default TagPage