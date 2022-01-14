import React from 'react';
import Settings from './Settings';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import InviteFriends from './InviteFriends';
import '../../Stylings/PrivateRoom.css'

function PrivateRoom({setDrawTime}) {
    return (
        <>
            <div id="private-room-top">
            <Settings setDrawTime={setDrawTime}/>
            <PrivateRoomPlayers/>
            </div> 
            <div id="private-room-bottom">
                <InviteFriends/>
            </div>
       </>
       );
}

export default PrivateRoom;
