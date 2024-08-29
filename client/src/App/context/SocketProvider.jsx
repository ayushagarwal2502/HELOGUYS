import React,{createContext, useContext} from 'react';
import { io } from "socket.io-client";

const SocketContext=createContext(null);

export const useSocket=()=>{
  const socket=useContext(SocketContext);
  return socket;
}

const SocketProvider = (props) => {
    const socket=io('ws://heloguys-backend.onrender.com');
  return (
   <SocketContext.Provider value={socket}>  
    {props.children}
   </SocketContext.Provider>
  )
}

export default SocketProvider;
