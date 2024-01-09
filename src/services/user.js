import useSWR from 'swr';
import { fetcher } from '../lib/utils/api';
import axios from "axios"

export const createUser=async (formData)=>{
    try {
        const response = await axios.post('https://dummyapi.io/data/v1/user/create', formData, {
          headers: {
            'Content-Type': 'application/json',
            'app-id':'6597f3003d2aa20dea4fd7af'
          },
        });
  
        if (response.status === 200) {
          console.log('Message sent successfully');
        } else {
          console.error('Failed to send message');
        }
        return response.data

      } catch (error) {
        console.error('Error sending message:', error);
      }
  }
export const updateUser=async (id,formData)=>{
    try {
         const response=await fetch(`https://dummyapi.io/data/v1/user/${id}`,{
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
export const deleteUser=async (id)=>{
    try {
         const response=await fetch(`https://dummyapi.io/data/v1/user/${id}`,{
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

export const getUsers = async() => {

    try {
      return await axios.get(`https://dummyapi.io/data/v1/user`,{
         headers:{
         'app-id':'6597f3003d2aa20dea4fd7af'
         },
      })

    } catch (e) {
      console.log('error',e)
      
    } 
};

export const getUserById=async (id)=>{
    try {
         return await axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
            'app-id':'6597f3003d2aa20dea4fd7af'
            },
         })

    } catch (e) {
     console.log('error',e)
     
    } 
  }