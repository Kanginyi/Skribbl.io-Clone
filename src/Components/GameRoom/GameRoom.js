import React from 'react';

function GameRoom() {
    return (
       <div>
           <p>Timer in seconds</p>
           <p>Round X of Y</p>
           <p>Ternary for isDrawing</p>
           <p>Number of letters</p>
           <p>Player list</p>
           <p>Canvas in the middle</p>
            {/* Either has nothing on the bottom or has tools for you to click with on the bottom */}
           <p>Activity/Chat on the right side</p>
           <input type="text">Type your guess here...</input>
       </div>
    );
}

export default GameRoom;
