import React from 'react';
import './../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameStarted: false,
      ballPosition: 0,
      gameWidth: window.innerWidth // Get the width of the window for boundary checking
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleStart() {
    this.setState({ 
      isGameStarted: true,
      ballPosition: 0
    });
  }

  handleKeyPress(event) {
    if (this.state.isGameStarted && event.keyCode === 39) { // Right arrow key
      this.setState(prevState => {
        const newPosition = prevState.ballPosition + 5;
        // Check if the new position is within the game width
        if (newPosition <= prevState.gameWidth - 50) { // Assuming the ball width is 50px
          return { ballPosition: newPosition };
        }
        return prevState; // Don't update if the ball goes out of bounds
      });
    }
  }

  render() {
    return (
      <div className='golf-game'>
        {!this.state.isGameStarted && (
          <button className="start" onClick={this.handleStart}>
            Start Game
          </button>
        )}
        {this.state.isGameStarted && (
          <div
            className="ball"
            style={{ left: `${this.state.ballPosition}px`, position: 'absolute' }} // Ensure position is absolute
          />
        )}
      </div>
    );
  }
}

export default App;