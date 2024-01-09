"use client"
import { createContext,useState } from "react"
import { getUserById } from "../services/user";
import { useEffect } from "react";
import { getPosts, usePosts } from "../services/post";


export const GlobalContext=createContext(null)

export default function GlobalState({children}){

    const [isAuthUser,setIsAuthUser]=useState();
    const getProducts = async() => {
        const userdata=await getUserById("60d0fe4f5311236168a109d1")
        setIsAuthUser(userdata?.data)
    }
    useEffect(()=>{
        getProducts()
    },[])


    return(
        <GlobalContext.Provider value={{isAuthUser,setIsAuthUser}}>{children}</GlobalContext.Provider>
    )
}