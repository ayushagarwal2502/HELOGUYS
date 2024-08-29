
import React,{useState,useEffect, useCallback} from 'react';
import {Stack} from 'react-bootstrap';
import './css/sidebar.css';
import Chat from './Chat';
import { useSocket } from './context/SocketProvider';

const Sidebar = () => {
  const socket=useSocket();
  const[name,setName]=useState();
  const[messages,setMessages]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    socket.emit('chat message',name);
    setName(' ');
  }
  const buttons=useCallback((data)=>{
    setMessages([...messages, data])
  },[messages])
 
    useEffect(() => {
      socket.on('messageResponse', buttons);
     
      return ()=>{
        socket.off('messageResponse',buttons);
       
      }
    }, [socket, buttons]);


  return (
    <div>
      <div>
        <Stack direction='horizontal' gap={0}>
            <div className='psA'>
            <Chat />
            </div>
            <div className='p'>
            
                <h3 >Chat</h3>

              <div>
            <ul>
              {
                messages.map((item)=>{
                  return (
                    <li >{item}</li>
                  )
                })
              }
            </ul>
          </div>
              <div id="text-contain">
             <div className='text'>
              <input  type="text" placeholder="Type your message here" size="48" value={name} onChange={(e)=>setName(e.target.value)}/>
              <button style={{backgroundColor:"#1E3F66", color:"#91BAD6"}}  onClick={handleSubmit}>Submit</button>
             </div>
             </div>
            </div>
        </Stack>
      </div>
    </div>
  )
}

export default Sidebar
