import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import './Signin.css';
const Signin = () => {
    const [userNameSign,setUserNameSign] = useState("");
    const [userPassSign,setUserPassSign] = useState("");
    const ragistration = ()=>{
       axios.post('http://localhost:5000/signin',{username:userNameSign,password:userPassSign}).then((response)=>{
        console.log(response);
       }) 

	   setUserNameSign(' ');
	   setUserPassSign(' ');
    };
  return (
    <div className='sign-main-div'>
	  			<h1>ragistration</h1>	
				<div className='sign-email'> 
					
					<input type="text" onChange={(e)=>{setUserNameSign(e.target.value)}}  placeholder=' Enter Your UserName'/> 
				</div> 
				<div className='sign-pass' > 
					
					<input type="password" onChange={(e)=>{setUserPassSign(e.target.value)}}  placeholder=' Enter Your Password'/> 
				</div>  
				<div className='sign-btn'>
					<button className='sign-btn1' onClick={ragistration}>Sign-In</button>	
				</div>
				<div>
				   <Link to='/'>Login</Link>
				</div>
				
    </div>
  )
}

export default Signin
