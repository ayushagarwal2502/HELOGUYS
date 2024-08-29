import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
    const[email,setEmail]=useState();

    const submit=()=>{
        axios.post('http://localhost:8000/forgetpassword',{email})
        .then((result)=>{
           console.log(result)
        }).catch((error)=>{
           console.log(error)
        })
    }
  return (
    <div>
      <div className='forget-password'>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <br>
      </br>

      <button type="submit"  style={{marginRight:"130px",border:" 2px solid black", backgroundColor:"lightGreen"}} onClick={submit}>Login</button>
      </div>
    </div>
  )
}

export default ForgetPassword
