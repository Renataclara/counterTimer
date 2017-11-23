import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      started: null
    }
    this.counterInterval = this.counterInterval.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  // this.setState({ count: this.state.count + 1 }), 100)
  counterInterval () {
    if (this.state.started === null) {
      this.setState({ started: setInterval(() =>
        this.setState(prevState => {
           return {count: prevState.count + 1}
        }), 100)
      })
    }
  }

//   this.setState((prevState, props) => ({
//     counter: prevState.counter + 1
// }));

  handleStop () {
    clearInterval(this.state.started)
    this.setState({started: null})
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.count}</h1>
        <button className="button" onClick={this.counterInterval} >Start</button>
        <button className="button" onClick={this.handleStop}>Stop</button>
      </div>
    );
  }
}


export default App;
