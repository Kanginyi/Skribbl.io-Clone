import React, {useState, useEffect} from 'react';
import skribblio_timer from "./pictures/skribblio-clock.gif";

function Clock() {
   const [timer, setTimer] = useState(3);

   useEffect(() => {
      let ticker = setInterval(() => {
         if (timer > 0) {
            setTimer(prev=>prev-1);
         }

         if (timer === 0){
            clearInterval(ticker);
         }
      }, 1000)
      
      return () => {
         clearInterval(ticker);
       }

   }, [timer]);


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