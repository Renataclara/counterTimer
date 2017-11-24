import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.counterInterval = this.counterInterval.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  counterInterval () {
    if (this.interval == null) {
      this.interval = setInterval(() =>
        this.setState(prevState => {
           return {count: prevState.count + 1}
        }), 100)
    }
  }

  handleStop () {
    clearInterval(this.interval)
    this.interval = null
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.count}</h1>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById("startButton").addEventListener("click", this.counterInterval);
    document.getElementById("stopButton").addEventListener("click", this.handleStop);
  }

  componentWillUnmount() {
    document.getElementById("startButton").removeEventListener("click", this.counterInterval);
    document.getElementById("stopButton").removeEventListener("click", this.handleStop);
    clearInterval(this.interval);
  }
}


export default App;
