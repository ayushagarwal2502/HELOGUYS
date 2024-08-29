import React,{useState} from 'react';
import axios from 'axios';
import './CSS/login.css';
import { jwtDecode } from "jwt-decode";
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  const submit=(e)=>{
    if(email!=="" && password!==""){
      e.preventDefault();
    axios.post('http://localhost:8000/login',{email,password})
    .then((result)=>{
      localStorage.setItem('token', result.data);
      console.log(result);
       const token=localStorage.getItem('token');
         const user=jwtDecode(token);
         sessionStorage.setItem('email',user.email);
         console.log(email);
      console.log(user);
      if(user!=" "){
        navigate('/lobby');
      }
    }).catch((err)=>{
             console.log(err+"error");
    })
  }
  }

  return (
    <div className='login-container'>
    <div className='logins'>
    <h3 style={{color:"lightgreen",marginLeft:"135x"}}>Log in to your account </h3>
    <p style={{marginLeft:"40px"}}><b>Don't have an account ? </b><a  href="register" >SignUp</a> </p>
    <br></br>
    <p style={{ width: "100%",textAlign:"center",borderBottom:"1px solid #000",lineHeight:" 0.1em",margin:"" }}><span style={{background:"#fff",padding:"0 10px"}}> or email and password</span> </p>
    <p></p>
    <br></br>
    <input type="email" placeholder="Enter Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
    <br></br>
    <br></br>
    <input type="password" placeholder="Enter Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
    <br></br>
    <br></br>
    <a href="/login/forget-Password">Forget Password ?</a>
    <br></br>
    <br></br>
    <button type="submit"  style={{marginRight:"130px",border:" 2px solid black", backgroundColor:"lightGreen"}} onClick={submit}>Login</button>
    </div>
    </div>
  )
}

export default Login
