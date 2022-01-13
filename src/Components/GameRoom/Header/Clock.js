import React, {useState, useEffect} from 'react';
import skribblio_timer from "./pictures/skribblio-clock.gif";

function Clock() {
   const [timer, setTimer] = useState(100);

   // useEffect(() => {
   //    setInterval(() => {
   //       setTimer(timer + 1)
   //    }, 1000);
   // }, [timer])

    return (
       <div>
           <img
               id="skribblio-timer"
               src={skribblio_timer}
               alt="Timer Gif"
            />
           <p id="timer-ticker">{timer}</p>
       </div>
    );
}

export default Clock;