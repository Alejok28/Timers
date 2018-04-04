import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'

class App extends Component {
  render() {
    return (
      <div className="App" id="cards" >
        <h1>Timers</h1>
        <Timer />
      </div>
    );
  }
}

export default App;
