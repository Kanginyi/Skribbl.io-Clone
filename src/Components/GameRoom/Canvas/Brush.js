import React from 'react';
import {BsCircleFill} from 'react-icons/bs'

function Brush({handleUtensil}) {   
    function handleBrushChange(event){
        handleUtensil(event.target.value, "weight")
    }

    return (
        <div id="weight-container">
            <button className="weight-button" value="4" onClick={(event)=>handleBrushChange(event)}>
                <BsCircleFill id="weight-1"/>
            </button>
            <button className="weight-button" selected value="9" onClick={(event)=>handleBrushChange(event)}>
                <BsCircleFill id="weight-2"/>
            </button>
            <button className="weight-button" value="18" onClick={(event)=>handleBrushChange(event)}>
                <BsCircleFill id="weight-3"/>
            </button>
            <button className="weight-button" value="30" onClick={(event)=>handleBrushChange(event)}>
                <BsCircleFill id="weight-4"/>
            </button>
        </div>
    );
}

export default Brush;
