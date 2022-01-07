import React from 'react';
import Tools from './Tools';
import ColorContainer from './ColorContainer';
import {BsTrash} from 'react-icons/bs'
import Brush from './Brush';

function ToolBox({handleUtensil, utensil}) {
    return (
        <>
            <div id="tool-box">
                <div>
                    <ColorContainer handleUtensil={handleUtensil} utensil={utensil}/>
                </div>
                <div>
                    <Tools handleUtensil={handleUtensil}/>
                </div>
                <div>
                    <Brush handleUtensil={handleUtensil}/>
                </div>
                <div>
                    <button style={{width:"50px", height:"50px"}}><BsTrash id='react-icon-tool-trash'/></button>
                </div>
            </div>
        </>
    );
}

export default ToolBox;