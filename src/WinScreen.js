import React from 'react';

const WinScreen = (props) => {
    return (
        <div className='WinScreen'>
            <h1>You did it!</h1>
            <p>Game over! Here's how you got on...</p>
            <div className="stats">
                <p>Time Elapsed</p>
                <h3>{props.time}</h3>
            </div>
            <div className="stats">
                <p>Moves Taken</p>
                <h3>{props.moves}</h3>
            </div>
            <div className="winButtons">
                <button className='restart'>Restart</button>
                <button className='newGame'>Setup New Game</button>
            </div>
        </div>
    );
};

export default WinScreen;