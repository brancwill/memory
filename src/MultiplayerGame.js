import React, {useState, useRef, useEffect} from 'react';
import boardCreation from './boardCreation';
import iconBoardCreation from './iconBoardCreation';
import Piece from './Piece';
import IconPiece from './IconPiece';
import { Link } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import MultiplayerWinScreen from './MultiplayerWinScreen';
import MultiplayerData from './MultiplayerData';

const MultiplayerGame = (props) => {
    const numArray = boardCreation(props.numPieces)
    const iconArray = iconBoardCreation(props.numPieces)
    const [clickCount, setClickCount] = useState(0)
    const [previousPiece, setPreviousPiece] = useState(0)
    const [pieceCount, setPieceCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState(0)
    const [playerScore, setPlayerScore] = useState([0, 0, 0, 0])
    const [winners, setWinners] = useState([])
    const [finalScores, setFinalScores] = useState([])
    const [highestScore, setHighestScore] = useState(0)
    const pieceRef = useRef([])

    Modal.setAppElement('#root');

    const customStyles = {
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            },
            content: {
                width: '50vw',
                height: '55vh',
                borderRadius: '20px',
                top: '20%',
                left: '23%',
                right: 'auto',
                bottom: 'auto'
            }
    }

    const updateScore = () => {
        let newScore = playerScore
        newScore[currentPlayer] += 1
        setPlayerScore(newScore)
    }

    const findWinners = () => {
        for (let i = 0; i < props.playerCount; i++) {
            if (playerScore[i] === highestScore) {
                setWinners(prevWinners => [...prevWinners, i])
            }
        }
    }

    const tallyScores = () => {
        const scores = []
        const winnersArr = []

        const compare = (a, b) => {
            if (a.score > b.score) return 1
            if (a.score < b.score) return -1
            return 0
        }

        for (let i = 0; i < props.playerCount; i++) {
            scores.push({
                score: playerScore[i],
                player: i + 1
            })
            if (playerScore[i] === highestScore) {
                winnersArr.push(i)
            }
        }
        scores.sort(compare)
        scores.reverse()
        setFinalScores(scores)
        setWinners(winnersArr)
    }

    const triggerWinScreen = () => {
        if (pieceCount === props.numPieces - 2) {
            setHighestScore(Math.max(...playerScore))
            setIsOpen(true)
        }
        else {
            return
        }
    }

    const revert = (key) => {
        pieceRef.current[previousPiece].setState({
            isFlipped: false
        })
        pieceRef.current[key].setState({
            isFlipped: false
        })
        setClickCount(0)
        setPreviousPiece(0)
    }

    const handleClick = (key) => {
        if (clickCount === 0) {
            setClickCount(1)
            setPreviousPiece(key)
            pieceRef.current[key].setState({
                isFlipped: true
            })
        } else if (clickCount === 1) {
            setClickCount(2)
            pieceRef.current[key].setState({
                isFlipped: true
            })
            if (pieceRef.current[key].state.value === pieceRef.current[previousPiece].state.value) {
                pieceRef.current[previousPiece].setState({
                    permaFlipped: true
                })
                pieceRef.current[key].setState({
                    permaFlipped: true
                })
                updateScore()
                setPieceCount(pieceCount + 2)
                revert(key)
                triggerWinScreen()
            } else {
                setTimeout(() => {
                    if ((currentPlayer + 1) < props.playerCount) {
                        setCurrentPlayer(currentPlayer + 1)
                    } else {
                        setCurrentPlayer(0)
                    }
                    revert(key)
                }, "1000")
            }
        } else {
            return
        }
    }

    useEffect(() => {
        tallyScores()
    }, [highestScore])

    return ( 
        <div className="Game">
            <div className="topArea">
                <h2>memory</h2>
                <div>
                    <button className="restart" onClick={() => window.location.reload()}>Restart</button>
                    <Link to="../"><button className="newGame">New Game</button></Link>
                </div>
            </div>
            <Modal isOpen={isOpen} style={customStyles}>
                <MultiplayerWinScreen highestScore={highestScore} winners={winners} scores={finalScores}/>
            </Modal>
            {props.numbers ? 
                <div id="board" className={`board ${props.gSize}board`}>
                    {numArray.map((number, index) => {
                        return <Piece index={index} ref={ref => pieceRef.current[index] = ref} handleClick={handleClick} key={index} gSize={props.gSize} value={number.value}/>
                    })}
                </div>
                :
                <div id="board" className={`board ${props.gSize}board`}>
                    {iconArray.map((icon, index) => {
                        return <IconPiece index={index} ref={ref => pieceRef.current[index] = ref} handleClick={handleClick} key={index} gSize={props.gSize} value={icon.value}/>
                    })}
                </div>
            }
            <MultiplayerData currentPlayer={currentPlayer} playerCount={props.playerCount} playerScore={playerScore} />
        </div>
    );
};

export default MultiplayerGame;