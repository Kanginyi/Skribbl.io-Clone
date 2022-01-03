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
                        <option>2</option>
                    </select>
               </div>
           </div>
       </div>
    );
}

export default Settings;

