import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const {id}=useParams();
    const[passwords,setPassword]=useState();

    function loginItem(e){ 
        if(passwords!==""){
        const password=passwords
        e.preventDefault();
    
        //Update the password from id 
        axios.put('https://heloguys-backend.onrender.com/reset-password/'+id,{password})
        .then((result)=>{
    
            if(result.data!==""){
    
           // navigate('/login');
    
          }
        })
        .catch(()=>{
          console.log("No Valid Credentials")}
          )
        
        }
     
     }

  return (
    <div>
        <div>
            <label>Password</label>
            <input type="text" placeholder='password' value={passwords} onChange={(e)=>{setPassword(e.target.value)}} />
        <button style={{backgroundColor:"#21B6A8",width:"100%"}} onClick={loginItem}>Update</button>
        </div>
      
    </div>
  )
}

export default ResetPassword
