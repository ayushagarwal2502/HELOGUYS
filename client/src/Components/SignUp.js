import React, { useState } from 'react';
import './CSS/signup.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate();
const[name,setName]=useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState();

const submit=(e)=>{
  if(email!=="" && password!=="" && name!==""){
    sessionStorage.setItem('email',email)
    e.preventDefault();
      axios.post('https://heloguys-backend.onrender.com/signup',{name,email,password})
        .then((result)=>{
             console.log(result);
        navigate('/lobby')
        }).catch((err)=>{
             console.log("error"+err);
       })
      }
      }

  return (
    <div className='signUp'>
    <div className='signup-container'>
       <h3 style={{color:"lightgreen",marginLeft:"135x"}}>Create your account </h3>
    <p style={{marginLeft:"40px"}}><b>Don't have an account ? </b><a  href="/login" >SignIn</a> </p>
    <br></br>
    <p style={{ width: "100%",textAlign:"center",borderBottom:"1px solid #000",lineHeight:" 0.1em",margin:"" }}><span style={{background:"#fff",padding:"0 10px"}}> Name, email and password</span> </p>
    <p></p>
    <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <br></br>
    <br></br>
    <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <br></br>
    <br></br>
    <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <br></br>
    <br></br>
    <button type="submit"  style={{marginRight:"130px",border:" 2px solid black", backgroundColor:"lightGreen"}} onClick={submit}>SignUp</button>
    </div>
    </div>
  )
}

export default SignUp
