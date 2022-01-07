import React from 'react';
import { BsBrush } from 'react-icons/bs';
import { BsPaintBucket } from 'react-icons/bs';
import { BsEraser } from 'react-icons/bs';


function Tools({handleUtensil}) {

    function handleClick(e){
        handleUtensil(e.target.getAttribute('name'), "tool")
    }
    return (
        <div>
            <button className="tool-button" onClick={handleClick}>
                <BsBrush name="brush" className='react-icon-tool'/>
            </button>
            <button className="tool-button" onClick={handleClick}>
                <BsPaintBucket name="bucket" className='react-icon-tool'/>
            </button>
            <button className="tool-button" onClick={handleClick}>
                <BsEraser name="eraser" className='react-icon-tool'/>
            </button>
        </div>
    );
}

export default Tools;
