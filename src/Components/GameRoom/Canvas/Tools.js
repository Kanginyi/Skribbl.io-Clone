import React from 'react';
import { BsBrush } from 'react-icons/bs';
import { BsPaintBucket } from 'react-icons/bs';
import { BsEraser } from 'react-icons/bs';


function Tools({handleUtensil}) {

    function handleClick(e){
        handleUtensil(e.target.name, "tool")
    }
    return (
        <div>
            <button className="tool-button" name="brush" onClick={handleClick}>
                <BsBrush/>
            </button>
            <button className="tool-button" name="bucket" onClick={handleClick}>
                <BsPaintBucket/>
            </button>
            <button className="tool-button" name="eraser" onClick={handleClick}>
                <BsEraser/>
            </button>
        </div>
    );
}

export default Tools;
