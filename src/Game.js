import React, {useState, useRef, useEffect} from 'react';
import boardCreation from './boardCreation';
import Piece from './Piece';
import { Link } from 'react-router-dom';
import SoloData from './SoloData';
import Modal from 'react-modal/lib/components/Modal';
import WinScreen from './WinScreen';

const Game = (props) => {
    const array = boardCreation(props.numPieces)
    const [clickCount, setClickCount] = useState(0)
    const [previousPiece, setPreviousPiece] = useState(0)
    const [moves, setMoves] = useState(0)
    const [time, setTime] = useState('Starting...')
    const [finalTime, setFinalTime] = useState('')
    const [pieceCount, setPieceCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
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

    let seconds = 0
    let minutes = 0

    const triggerWinScreen = () => {
        if (pieceCount === props.numPieces - 2) {
            setFinalTime(time)
            console.log('There!')
            setIsOpen(true)
        }
        else {
            console.log(`Not there yet. Piece Count: ${pieceCount}`)
            return
        }
    }

    const timer = () => {
        if (seconds <= 58) {
            seconds++
        } else if (seconds >= 59) {
            seconds = 0
            minutes++
        }
        setTime(`${minutes}:${seconds.toString().padStart(2, 0)}`)
    }
        useEffect(() => {
            setInterval(() => {
                timer()
            }, 1000)
        }, [])

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
                setMoves(moves + 1)
                setPieceCount(pieceCount + 2)
                revert(key)
                triggerWinScreen()
            } else {
                setMoves(moves + 1)
                setTimeout(() => {
                    revert(key)
                }, "1500")
            }
        } else {
            return
        }
    }

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
                <WinScreen moves={moves} time={finalTime} />
            </Modal>
            <div id="board" className={`board ${props.gSize}board`}>
                {array.map((number, index) => {
                    return <Piece index={index} ref={ref => pieceRef.current[index] = ref} handleClick={handleClick} key={index} gSize={props.gSize} value={number.value}/>
                })}
            </div>
            <SoloData moves={moves} time={time} />
        </div>
    );
};

export default Game;