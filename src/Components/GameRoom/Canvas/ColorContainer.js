import React from 'react';
import ColorCard from './ColorCard'

function ColorContainer({handleUtensil, utensil}) {

    const colorList = ["white", "grey", "red", "blue", "green", "yellow", "pink", "black",  "brown", "purple", "orange"];
    
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
