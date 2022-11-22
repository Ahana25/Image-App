import React from 'react';
import axios from 'axios'


let url1='http://127.0.0.1:3003/users'
let url2="http://127.0.0.1:3003/image"
let getUserData=async()=>
{
   return await axios.get(url1)
}

let postData=async(users)=>
{
  return await axios.post(url1,users)
}

let getImage=async()=>
{
  return await axios.get(url2)
}

let postImage=async(img)=>
{
  return await axios.post(url2,img)
}

let getEditImage=async(id)=>
{
  return await axios.get(`${url2}/${id}`)
}
let putEditImage=async(id,img)=>
{
    return await axios.put(`${url2}/${id}`,img)
}

let deleteImage=async(id)=>
{
   return await axios.delete(`${url2}/${id}`)
}
export {getUserData,postData,getImage,postImage,getEditImage,putEditImage,deleteImage}