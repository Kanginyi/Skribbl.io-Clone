import React from 'react';
import Tools from './Tools';
import ColorContainer from './ColorContainer';
import Brush from './Brush';
import './ToolBox.css'

function ToolBox({handleUtensil, utensil}) {
    return (
        <>
            <div id="ToolBox">
                <Tools handleUtensil={handleUtensil}/>
                <Brush handleUtensil={handleUtensil}/>
                <ColorContainer handleUtensil={handleUtensil} utensil={utensil}/>
            </div>
        </>
    );
}

export default ToolBox;