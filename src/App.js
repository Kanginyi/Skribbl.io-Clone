import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomeRoom/>}/>
            <Route path="gameroom" element={<GameRoom/>}/>
            <Route path="privateroom" element={<PrivateRoom/>}/>
        </Routes>
    </Router>
  );
}

export default App;
