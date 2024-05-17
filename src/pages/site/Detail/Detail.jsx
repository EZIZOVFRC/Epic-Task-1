import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
  // const {id}=useParams()
  const [data,setData]=useState()
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/blogs${_id}`).then((res)=>{
setData(res.data)
    })
  })
  return (
   <>
   <h1>Salam</h1>
   {console.log(data)}
   <div className="div">
    <img src={data.image} alt="" />
    <p>{data.desc}</p>
   </div>
   </>
  )
}

export default Detail
