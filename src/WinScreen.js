import React from 'react';
import { Link } from 'react-router-dom';

const WinScreen = (props) => {
    return (
        <div className='WinScreen'>
            <div className='winTitle'>
                <h1>You did it!</h1>
                <p>Game over! Here's how you got on...</p>
            </div>
            <div className="stats">
                <p>Time Elapsed</p>
                <h2>{props.time}</h2>
            </div>
            <div className="stats">
                <p>Moves Taken</p>
                <h2>{props.moves}</h2>
            </div>
            <div className="winButtons">
                <button onClick={() => window.location.reload()} className='restart'>Restart</button>
                <Link to="../"><button className="newGame">Setup New Game</button></Link>
            </div>
        </div>
    );
};

export default WinScreen;