import React from 'react';
import skribblio_timer from "./pictures/skribblio-clock.gif";

function Clock() {
    return (
       <div>
           <img
               id="skribblio-timer"
               src={skribblio_timer}
               alt="Timer Gif"
            />
           <p>Clock</p>
       </div>
    );
}

export default Clock;