import React from 'react';
import {FaPaintBrush} from "react-icons/fa";

import "../../Stylings/HomeRoom.css";

function HomeRoom() {
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
                <span>io</span>
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
                    >
                    </input>
                </label>

                <div id="homepage-buttons-container">
                    <button
                        id="play-button"
                        className="homepage-button"
                    >Play!</button>

                    <button
                        id="private-button"
                        className="homepage-button"
                    >Create Private Room</button>
                </div>
            </section>

            <section id="how-to-play" className="homepage-containers">
                <details>
                    <summary>About</summary>
                        <p>This is a website clone based on <a href="https://skribbl.io/" target="_blank">Skribbl.io</a>; a website where you can play a Pictionary-style game.</p>
                        <p>One game consists of any number of rounds, where one person is the artist and the others are the guessers. The artist will draw out their chosen word while the others will have to guess what it is in order go gain points.</p>
                        <p>The person with the most points when all the rounds are up will then be crowned as the winner WOOOOOO!</p>
                </details>
                    
                <details>
                    <summary>How to Play</summary>
                        <p><b>Artist:</b> When you're the artist, you will have to choose a word from three options and try to best draw that word out in the allotted time.</p>
                        <p><b>Guesser:</b> When you're a guesser, you'll have to try to figure out what the artist is drawing. Type your guess into the chat and if you're right, you'll get points!</p>
                        <p>Be fast though; the earlier you guess the drawn word, the more points you get!</p>
                </details>
            </section>
            
        </main>
        
    </div>
    );
}

export default HomeRoom;
