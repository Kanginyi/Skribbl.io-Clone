import React from 'react';

function Brush({handleUtensil}) {   
    return (
        <div>
            <button  className="weight-button" value="2" onChange={(event)=>handleUtensil(event.target.value, "weight")}>Thin</button>
            <button className="weight-button" selected value="5" onChange={(event)=>handleUtensil(event.target.value, "weight")}>Normal</button>
            <button className="weight-button" value="9" onChange={(event)=>handleUtensil(event.target.value, "weight")}>Thick</button>
        </div>
    );
}

export default Brush;
