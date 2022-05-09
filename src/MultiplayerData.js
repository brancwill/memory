import React from 'react';

const MultiplayerData = (props) => {

    return (
        <div className='MultiplayerData'>
            {[...Array(props.playerCount)].map((e, index) => {
                return (
                    props.currentPlayer === index ?
                            <div key={index} id="currentPlayer" className='playerScore'>
                                <p>Player {index + 1}</p>
                                <h2>{props.playerScore[index]}</h2>
                                <p className="currentTurn">CURRENT TURN</p>
                            </div>
                    :
                        <div key={index} className='playerScore'>
                            <p>Player {index + 1}</p>
                            <h2>{props.playerScore[index]}</h2>
                        </div>
                )
            })}
        </div>
    );
};

export default MultiplayerData;