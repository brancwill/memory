import React, { useState } from "react";
import Start from "./Start";
import Game from "./Game";
import { Route, Routes } from "react-router-dom";

function App() {
  const [gameStart, setGameStart] = useState(false)

  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Start />}/>
          <Route exact path="/numbers-1player-4x4" element={<Game gSize="FxF" numPieces={16} />}/>
          <Route exact path="/numbers-1player-6x6" element={<Game gSize="SxS" numPieces={36} />}/>
      </Routes>
    </div>
  );
}

export default App;
