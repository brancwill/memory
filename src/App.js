import React, { useState } from "react";
import Start from "./Start";
import Game from "./Game";
import MultiplayerGame from "./MultiplayerGame"
import { Route, Routes } from "react-router-dom";

function App() {
  const [gameStart, setGameStart] = useState(false)

  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Start />}/>
          <Route path="/numbers-1player-4x4" element={<Game numbers={true} gSize="FxF" numPieces={16} />}/>
          <Route path="/numbers-2player-4x4" element={<MultiplayerGame numbers={true} playerCount={2} gSize="FxF" numPieces={16} />}/>
          <Route path="/numbers-3player-4x4" element={<MultiplayerGame numbers={true} playerCount={3} gSize="FxF" numPieces={16} />}/>
          <Route path="/numbers-4player-4x4" element={<MultiplayerGame numbers={true} playerCount={4} gSize="FxF" numPieces={16} />}/>
          <Route path="/numbers-1player-6x6" element={<Game numbers={true} gSize="SxS" numPieces={36} />}/>
          <Route path="/numbers-2player-6x6" element={<MultiplayerGame numbers={true} playerCount={2} gSize="SxS" numPieces={36} />}/>
          <Route path="/numbers-3player-6x6" element={<MultiplayerGame numbers={true} playerCount={3} gSize="SxS" numPieces={36} />}/>
          <Route path="/numbers-4player-6x6" element={<MultiplayerGame numbers={true} playerCount={4} gSize="SxS" numPieces={36} />}/>
          <Route path="/icons-1player-4x4" element={<Game numbers={false} gSize="FxF" numPieces={16} />}/>
          <Route path="/icons-2player-4x4" element={<MultiplayerGame numbers={false} playerCount={2} gSize="FxF" numPieces={16} />}/>
          <Route path="/icons-3player-4x4" element={<MultiplayerGame numbers={false} playerCount={3} gSize="FxF" numPieces={16} />}/>
          <Route path="/icons-4player-4x4" element={<MultiplayerGame numbers={false} playerCount={4} gSize="FxF" numPieces={16} />}/>
          <Route path="/icons-1player-6x6" element={<Game numbers={false} gSize="SxS" numPieces={36} />}/>
          <Route path="/icons-2player-6x6" element={<MultiplayerGame numbers={false} playerCount={2} gSize="SxS" numPieces={36} />}/>
          <Route path="/icons-3player-6x6" element={<MultiplayerGame numbers={false} playerCount={3} gSize="SxS" numPieces={36} />}/>
          <Route path="/icons-4player-6x6" element={<MultiplayerGame numbers={false} playerCount={4} gSize="SxS" numPieces={36} />}/>
      </Routes>
    </div>
  );
}

export default App;
