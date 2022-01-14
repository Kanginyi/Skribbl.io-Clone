import React from 'react';
import Clock from './Clock';
import Rounds from './Rounds';
import ShowWord from './ShowWord';

function Header({drawTime}) {
    return (
       <div id="gameroom-header">
           <div id="clock-div">
                <Clock drawTime={drawTime}/>
           </div>
           <div id="rounds-div">
                <Rounds/>
           </div>
           <div id="showword-div">
                <ShowWord/>
           </div>
       </div>
    );
}

export default Header;
