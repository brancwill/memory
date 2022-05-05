import React from 'react';

const SoloData = (props) => {
    return (
        <div className="SoloData">
            <div className="tracker">
                <p>Time</p>
                <h3>{props.time}</h3>
            </div>
            <div className="tracker">
                <p>Moves</p>
                <h3>{props.moves}</h3>
            </div>
        </div>
    );
};

export default SoloData;