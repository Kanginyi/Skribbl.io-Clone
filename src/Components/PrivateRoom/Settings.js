import React from 'react';

function Settings() {
    return (
       <div id="settings-container">
           <h2>Settings</h2>
           <div id="lobby-container">
               <h3>Lobby</h3>
               <div id="rounds-container">
               <p><strong>Rounds</strong></p>
                    <select id = "rounds"> 
                        <option className='round-entry'>2</option>
                        <option className='round-entry'>3</option>
                        <option className='round-entry'>4</option>
                        <option className='round-entry'>5</option>
                        <option className='round-entry'>6</option>
                        <option className='round-entry'>7</option>
                        <option className='round-entry'>8</option>
                        <option className='round-entry'>9</option>
                        <option className='round-entry'>10</option>
                    </select>
               </div>

               <div id="draw-time-container">
               <p><strong>Draw time in seconds</strong></p>
                    <select id = "rounds"> 
                        <option className='round-entry'>30</option>
                        <option className='round-entry'>40</option>
                        <option className='round-entry'>50</option>
                        <option className='round-entry'>60</option>
                        <option className='round-entry'>70</option>
                        <option className='round-entry'>80</option>
                        <option className='round-entry'>90</option>
                        <option className='round-entry'>100</option>
                    </select>
               </div>
           </div>
       </div>
    );
}

export default Settings;

