import useSWR from 'swr';
import { fetcher } from '../lib/utils/api';
import axios from "axios"


export const getPosts = async() => {

  try {
    return await axios.get(`https://dummyapi.io/data/v1/post`,{
       headers:{
       'app-id':'6597f3003d2aa20dea4fd7af'
       },
    })

  } catch (e) {
    console.log('error',e)
    
  } 
};
export const usePostId = (id) => {

  const pathKey = `https://dummyapi.io/data/v1/post/${id}`;
  const { data, error } = useSWR(pathKey, fetcher, {
    refreshInterval: 10000
  });

  return { data: data || [], loading: !error && !data };
};


export const createPost=async (formData)=>{
  try {

       const response=await fetch('https://dummyapi.io/data/v1/post/create',{
           method:"POST",
           headers:{
               'content-type':'application/json',
               'accept': 'application/json',
               'app-id':'6597f3003d2aa20dea4fd7af'
           },
           body:JSON.stringify(formData)
       })
       const finalData=await response.json()
       return finalData
  } catch (e) {
   console.log('error',e)
   
  } 
}
export const updatePost=async (id,formData)=>{
  try {
       const response=await fetch(`https://dummyapi.io/data/v1/post/${id}`,{
           method:"PUT",
           headers:{
               'content-type':'application/json',
               'accept': 'application/json',
               'app-id':'6597f3003d2aa20dea4fd7af'
           },
           body:JSON.stringify(formData)
       })
       const finalData=await response.json()
       return finalData
  } catch (e) {
   console.log('error',e)
   
  } 
}
export const deletePost=async (id)=>{
  try {
       const response=await fetch(`https://dummyapi.io/data/v1/post/${id}`,{
           method:"DELETE",
           headers:{
              'app-id':'6597f3003d2aa20dea4fd7af'
           },
       })
       const finalData=await response.json()
       return finalData
  } catch (e) {
   console.log('error',e)
   
  } 
}
export const usePostByUser = (id) => {

  const pathKey = `https://dummyapi.io/data/v1/user/${id}/post`;
  const { data, error } = useSWR(pathKey, fetcher, {
    refreshInterval: 10000
  });

  return { data: data || [], loading: !error && !data };
};
export const usePostByTag = (id) => {

  const pathKey = `https://dummyapi.io/data/v1/tag/${id}/post`;
  const { data, error } = useSWR(pathKey, fetcher, {
    refreshInterval: 10000
  });

  return { data: data || [], loading: !error && !data };
};
