"use client"
import PostCard from "../../components/postCard/postCard"
import styles from "./blog.module.css"
import SearchBar from "../../components/searchbar/searchBar"
import { useState,useEffect } from "react";
import axios from "axios"
import Tags from "../../components/tags/Tags";


const BlogPage = () => {
    const [posts,setPosts]=useState();
    const [keyword,setKeyword]=useState('')
    const [control,setControl]=useState(false)
    const [word,setWord]=useState("")

    const updateKeyword = (keyword) => {
      const filtered = posts?.filter(x => x.text.includes(keyword))
      setKeyword(keyword);
      setPosts(filtered);
      if(keyword===""){
        setControl(true)
      }
    } 

    useEffect(()=>{
      const handleSubmit = async () => {

        try {
          const response = await axios.get(`https://dummyapi.io/data/v1/post`,{
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
      handleSubmit()
    },[control])
    useEffect(()=>{
      const handleWord = async () => {

        try {
          const response = await axios.get(`https://dummyapi.io/data/v1/tag/${word}/post`,{
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
    },[word])
    console.log(word)




  return (
    <>
    <SearchBar keyword={keyword} onChange={updateKeyword}/>
    <Tags setWord={setWord}/>
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


export default BlogPage
