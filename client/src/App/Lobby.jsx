import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from './context/SocketProvider';
import {useNavigate} from 'react-router-dom';
import './css/lobby.css';

const Lobby = () => {
    const socket=useSocket();
    const navigate=useNavigate();
    const[room,setRoom]=useState();
    const email=sessionStorage.getItem('email');

    const handleSubmit=()=>{
      socket.emit('room:join',{email,room})
      setRoom(" ");
}

const handlejoin=useCallback((data)=>{
   const {email,room}=data;
   console.log(email);
   navigate(`/chat/${room}`);
},[navigate])

useEffect(()=>{
  socket.on('room:join',handlejoin);
  return ()=>{
    socket.off('room:join',handlejoin);
  }
},[socket,handlejoin]);
  return (
    <div>
      <div className='lobbyPage'>
        <h3>HELOGUYS</h3>
      </div>
      <h4>Join Meeting</h4>
    <div className='lobbyPage1'>
      <h6>Meeting ID or Personal Link Name</h6>
      <input type="text" id="room" placeholder="Enter Meeting Id "  value={room} onChange={(e)=>{setRoom(e.target.value)}} />
      <br></br>
      <br></br>
      <p>By clicking "Join", 
        you agree to our Terms of 
        Services and Privacy Statement</p>
      <button onClick={handleSubmit}>Join</button>
    </div>
    </div>
  )
}

export default Lobby
