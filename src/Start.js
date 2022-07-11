// The starting point of the game where users can select options with which they'd like to play

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    // State holds which options are chosen for different modes.
    const [theme, setTheme] = useState('numbers')
    const [players, setPlayers] = useState("1player")
    const [gSize, setGSize] = useState("4x4")

    let url = `/${theme}-${players}-${gSize}`

    const handleThemeChange = (e) => {
        setTheme(e.target.value)
    }
    const handlePlayersChange = (e) => {
        setPlayers(e.target.value)
    }
    const handleGSizeChange = (e) => {
        setGSize(e.target.value)
    }

    return (
        <div className="Start">
            <h2>memory</h2>
            <div className="menu">
                <p>Select Theme</p>
                <div className="radios theme">
                    <input onChange={handleThemeChange} type="radio" name="theme" id="Numbers" value="numbers" defaultChecked />
                    <label for="Numbers">Numbers</label>
                    <input onChange={handleThemeChange} type="radio" name="theme" id="Icons" value="icons" />
                    <label for="Icons">Icons</label>
                </div>
                <p>Number of Players</p>
                <div className="radios players">
                    <input onChange={handlePlayersChange} type="radio" name="players" id="1" value="1player" defaultChecked />
                    <label for="1">1</label>
                    <input onChange={handlePlayersChange} type="radio" name="players" id="2" value="2player" />
                    <label for="2">2</label>
                    <input onChange={handlePlayersChange} type="radio" name="players" id="3" value="3player" />
                    <label for="3">3</label>
                    <input onChange={handlePlayersChange} type="radio" name="players" id="4" value="4player" />
                    <label for="4">4</label>
                </div>
                <p>Grid Size</p>
                <div className="radios gSize">
                    <input onChange={handleGSizeChange} type="radio" name="gSize" id="4x4" value={"4x4"} defaultChecked />
                    <label for="4x4">4x4</label>
                    <input onChange={handleGSizeChange} type="radio" name="gSize" id="6x6" value={"6x6"} />
                    <label for="6x6">6x6</label>
                </div>
                <Link to={url}><button className="startButton" type="button">Start Game</button></Link>
            </div>
        </div>
    );
};

export default Start;