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
    </div>
    );
}

export default HomeRoom;
