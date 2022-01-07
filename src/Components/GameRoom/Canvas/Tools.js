import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';


function Tools({handleUtensil}) {

    function handleClick(e){
        handleUtensil(e.target.name, "tool")
    }
    return (
        <div>
            <button className="tool-button" name="brush" onClick={handleClick}><FaPaintBrush/></button>
            <button className="tool-button" name="bucket" onClick={handleClick}></button>
            <button className="tool-button" name="eraser" onClick={handleClick}></button>
        </div>
    );
}

export default Tools;
