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
            <section className="homepage-containers">
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

            <section className="homepage-containers">
                <details>
                    <summary>What the hail</summary>
                    <p>Check this shit out</p>
                </details>
            </section>
            
        </main>
        
    </div>
    );
}

export default HomeRoom;
