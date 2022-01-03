import React, {useState} from 'react';

function InviteFriends() {
    const [showLink, setShowLink] = useState(false)
    return (
       <div id="friend-invite-container">
           <h2 id='private-room-invite'>Invite your friends!</h2>
           <p id="invite-link">Hover over me to see the invite link!</p>
       </div>
    );
}

export default InviteFriends;
