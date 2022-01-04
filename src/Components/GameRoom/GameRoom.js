import React, {useState} from 'react';
import ToolBox from './ToolBox';
import Container from './Container'

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
            <ToolBox handleUtensil={handleUtensil} utensil={utensil}/>
            <Container utensil={utensil}/>
        </div>
    );
}

export default GameRoom;
