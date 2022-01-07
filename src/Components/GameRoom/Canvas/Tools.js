import React, {useState} from 'react';
import brush from './pictures/brush.png'
import bucket from './pictures/bucket.png'
import eraser from './pictures/eraser.png'

function Tools({handleUtensil}) {

    const [toolSelected, setToolSelected] = useState("brush")

    return (
        <div>
            <button className="tool-button" name="brush" onClick={function(){handleUtensil("brush", "tool"); setToolSelected("brush")}}>
                <img src={brush} className={toolSelected === "brush" ? 'react-icon-tool' : 'not-selected-tool'} alt="brush"/>
            </button>
            <button className="tool-button" onClick={function(){handleUtensil("bucket", "tool"); setToolSelected("bucket")}}>
                <img src={bucket} className={toolSelected === "bucket" ? 'react-icon-tool' : 'not-selected-tool'} alt="bucket"/>
            </button>
            <button className="tool-button" onClick={function(){handleUtensil("eraser", "tool"); setToolSelected("eraser")}}>
                <img src={eraser} className={toolSelected === "eraser" ? 'react-icon-tool' : 'not-selected-tool'} alt="eraser"/>
            </button>
        </div>
    );
}

export default Tools;
