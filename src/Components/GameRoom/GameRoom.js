import React, {useState} from 'react';
import Container from './Canvas/Container'
import ChatBox from './Chatbox/ChatBox';
import PlayerContainer from './PlayerContainer/PlayerContainer';
import Header from './Header/Header';
import '../../Stylings/GameRoom.css'

function GameRoom() {
    const [utensil, SetUtensil] = useState({
        tool: "brush",
        weight: 5,
        color: "black"
    })

    function handleUtensil(updateItem, keyHolder){
        const newUtensil={...utensil}
            if(updateItem === "eraser"){
                newUtensil["color"] = "white";
                newUtensil["tool"] = "eraser";
                SetUtensil(()=>newUtensil)
            } else {
                newUtensil[keyHolder] = updateItem.toLowerCase()
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
                    <Container utensil={utensil} handleUtensil={handleUtensil}/>
                </div>
                <div>
                    <ChatBox />
                </div>
            </div>

        </div>
    );
}

export default GameRoom;
