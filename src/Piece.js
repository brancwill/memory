import React, {Component} from 'react'

class Piece extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            gSize: this.props.gSize,
            index: this.props.index,
            isFlipped: false,
            permaFlipped: false
        }
    }

    render() {
        return (
            this.state.permaFlipped ?
                <div className={`permaFlipped ${this.state.gSize}GNumber`}>
                    <h1>{this.state.value}</h1>
                </div>
            :
            this.state.isFlipped ?
                <div className={`flippedPiece ${this.state.gSize}GNumber`}>
                    <h1>{this.state.value}</h1>
                </div>
            :
                <div onClick={() => this.props.handleClick(this.state.index)} className="unflippedPiece">
                    <span> </span>
                </div>
        )
    }
}

export default Piece