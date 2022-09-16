import React, { useState } from 'react'
import './User.css';
import axios from "axios";
const User = () => {
  const [image,setImage] = useState([]);
  const [getImage,setGetImage] = useState([]);
  const imageSend = ()=>{
    axios.post('http://localhost:5000/user',{image:image}).then((response)=>{
      
        setGetImage(response.data[0]);
       
    }) 
    document.getElementById("img").value = null;

 };
  return (
    <div>
      <div className='file_img'>
          <input type='file' id='img' onChange={(e)=>{setImage(e.target.value)}}></input>
          <button onClick={imageSend}>Submit Image</button>
      </div>
      <div>
        <img src={getImage}  alt="img"></img>
      </div>
    </div>

  )
}

export default User
