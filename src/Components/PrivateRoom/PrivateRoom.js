import React from 'react';
import Settings from './Settings';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import '../../Stylings/PrivateRoom.css'

function PrivateRoom() {
    return (
       <div id="private-room">
           <Settings/>
           <PrivateRoomPlayers/>
       </div>
    );
}

export default PrivateRoom;
