import React, {useState, useEffect } from 'react';
import io from 'socket.io-client';

import ToolBox from './Canvas/ToolBox';
import DrawingCanvas from './Canvas/DrawingCanvas'
import ChatBox from './Chatbox/ChatBox';
import PlayerContainer from './PlayerContainer/PlayerContainer';
import Header from './Header/Header';
import '../../Stylings/GameRoom.css'

// Create a socket server
const socket = io("https://localhost:3000", {
    // Specify transports or else they can be buffered/wait
    transports: ["websocket", "polling"]
});

function GameRoom() {        
    const [utensil, SetUtensil] = useState({
        tool: "brush",
        weight: 5,
        color: "black"
    });

    const [lastColor, setLastColor] = useState(utensil["color"]);    

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [listMessage, setListMessage] = useState([]);
    const username = prompt("what is your username");

    useEffect(() => {
        socket.on("connect", () => {
          socket.emit("username", username);
        });
    
        socket.on("users", users => {
          setUsers(users);
        });
    
        socket.on("message", message => {
          setListMessage(messages => [...messages, message]);
        });
    
        socket.on("connected", user => {
          setUsers(users => [...users, user]);
        });
    
        socket.on("disconnected", id => {
          setUsers(users => {
            return users.filter(user => user.id !== id);
          });
        });
      }, []);

    function handleUtensil(updateItem, keyHolder){
        const newUtensil={...utensil};
            if(updateItem === "eraser"){
                setLastColor(()=>utensil["color"])
                newUtensil["color"] = "white";
                newUtensil["tool"] = "eraser";
                SetUtensil(()=>newUtensil)
            } else {
                if(utensil["tool"] === "eraser"){
                    newUtensil["color"] = lastColor;
                } 
                newUtensil[keyHolder] = updateItem.toLowerCase();
                SetUtensil(()=>newUtensil)
        
            }
    }

    return (
        <div className="container">
            <Header/>
            <div id = "middle-section-gameroom">
                <div>
                    <PlayerContainer/>
                </div>
                <div>
                    <DrawingCanvas utensil={utensil}/>
                </div>
                <div>
                    <ChatBox />
                </div>
            </div>
            <div>
                <ToolBox handleUtensil={handleUtensil} utensil={utensil}/>
            </div>
        </div>
    );
}

export default GameRoom;
