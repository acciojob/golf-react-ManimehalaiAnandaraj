import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameStarted: false,
      ballPosition: 0
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
    this.setState({ isGameStarted: true });
  }

  handleKeyPress(event) {
    if (this.state.isGameStarted && event.keyCode === 39) {
      this.setState(prevState => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  }

  render() {
    return (
      <div>
        {!this.state.isGameStarted && (
          <button className="start" onClick={this.handleStart}>
            Start
          </button>
        )}
        {this.state.isGameStarted && (
          <div
            className="ball"
            style={{ left: `${this.state.ballPosition}px` }}
          />
        )}
      </div>
    );
  }
}

export default App;