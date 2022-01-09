import React from 'react';
import ColorCard from './ColorCard'

function ColorContainer({handleUtensil, utensil}) {

    const colorList = ["white", "silver", "red", "darkorange", "yellow", "lime", "deepskyblue", "midnightblue", "darkviolet", "hotpink", "sienna",
    //Row 2
    "black", "dimgray", "maroon", "orangered", "goldenrod","darkgreen", "dodgerblue", "navy", "indigo", "indianred", "saddlebrown"];
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)

    return (
        <div>
            <div className="selected-color" style={{backgroundColor:`${utensil.color}`}}></div>
            <div id="color-grid">
                {colorGrid}
            </div>
        </div>
    );
}

export default ColorContainer;
