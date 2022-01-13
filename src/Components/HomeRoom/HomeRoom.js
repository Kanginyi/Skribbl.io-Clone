import React from 'react';
import AvatarSelect from './AvatarSelect';
import { useNavigate } from 'react-router-dom'
import {FaPaintBrush} from "react-icons/fa";
import {BsFillSuitHeartFill, BsGithub} from "react-icons/bs";
import "../../Stylings/HomeRoom.css";

// Redux Elements
import {useSelector} from "react-redux";

function HomeRoom(setUsername) {
    const history = useNavigate();

    function handlePrivateButton(event) {
        history("/privateroom")
        setUsername(()=> event.target.parentElement.parentElement.parentElement.children[0].childNodes[0].firstChild.value)
    }

    function handlePlayButton(event) {
        setUsername(()=> event.target.parentElement.parentElement.parentElement.children[0].childNodes[0].firstChild.value)
    }

    // Redux Elements
    const avatar = useSelector(state => state.avatar.value);
    const avatarArray = [];

    for (const attr in avatar) {
        avatarArray.push(attr);
    }

    return (
        <div className="App">
            <header id="homepage-header">
                <h1 id="rainbow-title">
                    <span>S</span>
                    <span>a</span>
                    <span>m</span>
                    <span>r</span>
                    <span>i</span>
                    <span>c</span>
                    <span>.</span>
                    <span>i</span>
                    <span>o</span>
                    &nbsp;
                    <FaPaintBrush id="paintbrush"/>
                </h1>
            </header>

            <main id="homepage-main">
                <section id="character-creation" className="homepage-containers">
                    <label>
                        <input
                            type="text"
                            name="name-input"
                            placeholder="Enter your name :^)"
                            autoComplete="off"
                            minLength={1}
                            maxLength={32}
                            required
                        >
                        </input>
                    </label>
                    <div id="avatar-container">
                        <img id="avatar-image" src={avatar.imageURL} alt="avatar"/>
                    </div>
                    <div id="avatar-selection">
                        {/* 14 different selection options */}
                        <AvatarSelect avatar={avatar} name={avatarArray[0]} number={avatar.top} /> 
                        <AvatarSelect avatar={avatar} name={avatarArray[1]} number={avatar.hatColor}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[2]} number={avatar.hairColor}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[3]} number={avatar.accessories}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[4]} number={avatar.accessoriesColor}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[5]} number={avatar.facialHair}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[6]} number={avatar.facialHairColor}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[7]} number={avatar.clothes}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[8]} number={avatar.clothesColor}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[9]} number={avatar.eyes}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[10]} number={avatar.eyebrow}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[11]} number={avatar.mouth}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[12]} number={avatar.skin}/>
                        <AvatarSelect avatar={avatar} name={avatarArray[13]} number={avatar.clotheGraphics}/>
                    </div>

                    <div id="homepage-buttons-container">
                        <button
                            id="play-button"
                            className="homepage-button"
                            onClick={handlePlayButton}
                        >Play!</button>

                        <button
                            id="private-button"
                            className="homepage-button"
                            onClick={handlePrivateButton}
                        >Create Private Room</button>
                    </div>
                </section>

                <section id="details-section" className="homepage-containers">
                    <details open>
                        <summary>News</summary>
                            <div id="news-update">
                                Hello World!<br/><br/>
                                We just:<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢Implemented early phases of <strong>Redux</strong> into our application<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢<strong>HomeRoom:</strong> Animate our title
                                <br/><br/>
                                Please continue to check in as we work together to flesh out the rest of the application! :)<br/>
                                <br/>
                                <i>Thanks so much</i> <BsFillSuitHeartFill style={{color: "red"}}/>
                            </div>
                    </details>

                    <details>
                        <summary>About</summary>
                            <div>
                                This is a website clone based on <a className="skribblio" href="https://skribbl.io/" target="blank"><b>Skribbl.io</b></a>; a website where you can play a Pictionary-style game.<br/>
                                One game consists of any number of rounds, where one person is the artist and the others are the guessers. The artist will draw out their chosen word while the others will have to guess what it is in order to gain points.<br/>
                                The person with the most points when all the rounds are up will then be crowned the winner. WOOOOOO!
                            </div>
                    </details>
                        
                    <details>
                        <summary>How to Play</summary>
                            <div>
                                <b>Artist:</b> When you're the artist, you will have to choose a word from three options and try to best draw that word out in the allotted time.<br/>
                                <b>Guesser:</b> When you're a guesser, you'll have to try to figure out what the artist is drawing. Type your guess into the chat and if you're right, you'll get points!<br/>
                                Be fast though; the earlier you guess the drawn word, the more points you get.<br/>
                            </div>
                    </details>
                </section>
                
            </main>

            <footer id="homepage-footer">
                <div>
                    <BsGithub style={{color: "white", fontSize: "18px"}}/> made by <a href="https://github.com/samlee1097" target="blank">@samlee1097</a> & <a href="https://github.com/Kanginyi" target="blank">@Kanginyi</a>
                </div>

                <div>
                    <a href="#">Contact</a>&nbsp;
                    <a href="#">Terms of Service</a>&nbsp;
                    <a href="#">Credits</a>
                </div>

                <div>
                    We are not responsible for any user generated content<br/>
                    (drawings, messages, usernames)
                </div>
            </footer>
            
        </div>
    );
}

export default HomeRoom;
