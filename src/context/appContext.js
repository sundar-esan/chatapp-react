import {io} from 'socket.io-client';
import React from 'react';
const SOCKET_URL = 'https://chatapi-q2o1.onrender.com'; 

//app socket 
export const socket = io(SOCKET_URL);
export const AppContext = React.createContext();