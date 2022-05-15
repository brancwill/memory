import React from 'react';
import { Link } from 'react-router-dom';

const MultiplayerWinScreen = (props) => {
    return (
        <div className='WinScreen'>
            <div className='winTitle'>
                {props.winners.length === 1 ?
                    <h1>Player {props.winners[0] + 1} Wins!</h1>
                :
                    <h1>It's a tie!</h1>
                }
                <p>Game over! Here are the results...</p>
            </div>
            {props.scores.map((player, index) => {
                return player.score === props.highestScore ? 
                    <div key={index} className="stats winner">
                        <p>Player {player.player} (Winner!)</p>
                        <h2>{player.score} Pairs</h2>
                    </div>
                :
                    <div key={index} className="stats">
                        <p>Player {player.player}</p>
                        <h2>{player.score} Pairs</h2>
                    </div>
            })}
            <div className="winButtons">
                <button onClick={() => window.location.reload()} className='restart'>Restart</button>
                <Link to="../"><button className="newGame">Setup New Game</button></Link>
            </div>
        </div>
    );
};

export default MultiplayerWinScreen;