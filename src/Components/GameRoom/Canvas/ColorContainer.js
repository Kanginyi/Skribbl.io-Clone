import React, {useState} from 'react';
import ColorCard from './ColorCard'
import brush from './pictures/pencil.png'
import eraser from './pictures/eraser.png'
import bucket from './pictures/bucket.png'
import './ToolBox.css'

const colorList = ["white", "grey", "red", "blue", "green", "yellow", "pink", "black",  "brown", "purple", "orange"];

function ColorContainer({handleUtensil, utensil}) {
    
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)

    return (
        <>
        <div id="color-grid">
            {colorGrid}
        </div>
        <div className='selected-box'>
            <p className="selected-color">Color
                <div style={{backgroundColor:`${utensil.color}`}}>
                </div>
            </p>
            <p className="selected-tool">Tool
                <img src={utensil.tool === "brush" ? brush : utensil.tool === "eraser" ? eraser : bucket} style={{width:"20px", margin:"0 0 0 9px"}} alt="brush"/>
            </p>
        </div>
        </>
    );
}

export default ColorContainer;
