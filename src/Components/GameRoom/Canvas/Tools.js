import React from 'react';


function Tools({handleUtensil}) {

    return (
        <div>
            <button className="tool-button" name="brush" onClick={()=>handleUtensil("brush", "tool")}>
                <img src={brush} style={{width:"12px", margin:"0 2px"}} alt="brush"/>
            </button>
            <button className="tool-button" onClick={()=>handleUtensil("bucket", "tool")}>
                <img src={bucket} style={{width:"12px"}} alt="bucket"/>
            </button>
            <button className="tool-button" onClick={()=>handleUtensil("eraser", "tool")}>
                <img src={eraser} style={{width:"12px"}} alt="eraser"/>
            </button>
        </div>
    );
}

export default Tools;
