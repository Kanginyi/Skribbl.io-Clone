import React, {useState, useEffect} from 'react';
import skribblio_timer from "./pictures/skribblio-clock.gif";

function Clock() {
   const [timer, setTimer] = useState(3);

   let ticker;

   useEffect(() => {
      ticker = setInterval(() => setTimer(prev => prev - 1), 1000);

      if (timer === 0) {
         setTimer(prev => prev === 0);
         clearInterval(ticker);
      }

      // return function cleanup() {
      //    clearInterval(ticker);
      // }
   }, []);


   
   console.log(timer);
   // useEffect(() => {
   //    let ticker;

   //    ticker = setInterval(() => {
   //       if (timer === 0) {
   //          clearInterval(ticker);
   //          alert("BING BONG");
   //       } else {
   //          setTimer(prev => prev - 1);
   //       }
   //    }, 1000)
   // }, [])

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