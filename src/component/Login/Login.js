import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
	const [userNameLog,setUserNameLog] = useState("");
    const [userPassLog,setUserPassLog] = useState("");

	const loginUser = ()=>{
		axios.post('http://localhost:5000/login',{username:userNameLog,password:userPassLog}).then((response)=>{
		 
		}) 
	 };
  return (
    <div className='log-main-div'>
      
	  			<h1>Log-in</h1>	
				<div className='log-email'> 
					
					<input type="text" onChange={(e)=>{setUserNameLog(e.target.value)}} placeholder=' Enter Your UserName'/> 
				</div> 
				<div className='log-pass' > 
					
					<input type="text" onChange={(e)=>{setUserPassLog(e.target.value)}}  placeholder=' Enter Your Password'/> 
				</div>  
				<div className='log-btn'>
					<Link to='/User'><button className='log-btn1' onClick={loginUser} >Login</button></Link>	
				</div>
				<div>
				   <Link to='/Signin'>Sign</Link>
				</div>
				
				
    </div>
  )
}

export default Login
