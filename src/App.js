import Navigation from "./Components/Navigation";
import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Chat from "./Pages/Chat";
import { useSelector } from "react-redux";
import { useState } from "react";
import {AppContext, socket } from './context/appContext';

function App() {
  //context
  const [rooms, setRooms]= useState([]);
  const [currentRoom, setCurrentRoom]= useState([]);
  const [members, setMembers]= useState([]);
  const [messages, setMessages]= useState([]);
  const [privateMemberMsg, setPrivateMemberMsg]= useState({});
  const [newMessages, setNewMessages]= useState({});
  const user = useSelector((state)=> state.user);
  return (
    <AppContext.Provider value={{socket,rooms,setRooms,currentRoom,setCurrentRoom,members,
    setMembers,messages,setMessages,privateMemberMsg,setPrivateMemberMsg,newMessages,setNewMessages}}>
    <BrowserRouter>
       <Navigation />
       <Routes>
         <Route  path="/" element={<Home />} />
         {!user && (
           <>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         </>
         )}
         <Route path="/chat" element={<Chat />} />
       </Routes>
    </BrowserRouter>
    </AppContext.Provider>
     
    
  );
}

export default App;
