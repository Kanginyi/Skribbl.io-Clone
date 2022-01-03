import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomeRoom/>}/>
            <Route path="gameroom" element={<GameRoom/>}/>
        </Routes>
    </Router>
  );
}

export default App;
