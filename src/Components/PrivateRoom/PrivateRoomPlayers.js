import React from 'react';

function PrivateRoomPlayers() {
    return (
       <div className="settings-container">
           <h2 className='private-room-title'>Players</h2>
           <div id="players-grid">
                <div className="one">One</div>
                <div className="two">Two</div>
                <div className="three">Three</div>
                <div className="four">Four</div>
                <div className="five">Five</div>
                <div className="six">Six</div>
           </div>
       </div>
    );
}

export default PrivateRoomPlayers;
