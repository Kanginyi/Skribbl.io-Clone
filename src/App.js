import {FaPaintBrush} from "react-icons/fa";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GameRoom from "./Components/GameRoom/GameRoom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
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
           }/>

            <Route path="gameroom" element={<GameRoom/>}/>
        </Routes>
    </Router>
  );
}

export default App;
