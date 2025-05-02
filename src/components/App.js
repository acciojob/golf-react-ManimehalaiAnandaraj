import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    buttonClickHandler() {
        this.setState({ renderBall: true });
        document.addEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            this.setState(prevState => {
                const newPos = prevState.posi + 10; // Move 10px to the right
                return {
                    posi: newPos,
                    ballPosition: { left: `${newPos}px` }
                };
            });
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>
        } else {
            return <button onClick={this.buttonClickHandler}>Start</button>
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}

export default App;