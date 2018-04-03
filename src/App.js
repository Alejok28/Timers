import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'
import AddTimer from './components/AddTimer'

class App extends Component {
  //
  // newTimer = () => {
  //   const long = this.state.timers.length
  //   const newTimer = {id: long+1, title: 'Title', project: 'project',count:1, setVar: 0 }
  //   this.setState({
  //     timers: this.state.timers.concat(newTimer)
  //   })
  // }

  render() {
    return (
      <div className="App" id="cards" >
        <Timer />
        <AddTimer />
      </div>
    );
  }
}

export default App;
