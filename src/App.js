import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'
import AddTimer from './components/AddTimer'
import { Card } from 'semantic-ui-react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timers: [
        {id:1, title:'Practice squat', project:'Gym Chores', count:1, setVar: 0}, {id:2,title:'Bake squash', project:'Kitchen Chores', count:1, setVar: 0}
      ]
    }
  }
  // componentWillUnmount () {
  //   clearInterval(this.timer)
  // }

  tick = (t) => {
    const timers = this.state.timers.map((timer) => {
      if (timer.id === t.id) {
        return Object.assign({}, timer, { count: timer.count+1000 })
      } else {
        return timer
      }
    })
    this.setState({ timers });
  }

  startTimer = (t) => {
    const timers = this.state.timers.map((timer) => {
      if (timer.id === t.id) {
        return Object.assign({}, timer, {
          setVar: setInterval(this.tick, 1000,t)
        })
      } else {
        return timer
      }
    })
    this.setState({timers})
  }

  stopTimer = (t) => {
    const timers = this.state.timers.map((timer) => {
      if (timer.id === t.id) {
        return Object.assign({}, timer, { setVar: 0 })
      } else {
        return timer
      }
    })
    this.setState({ timers })
    clearInterval( t.setVar )
  }

  millisecondsToHuman = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

  removeTimer = (t) => {
    this.stopTimer(t);
    const timers = this.state.timers;
    this.setState({
      timers: timers.filter((timer,i) => t.id !==timer.id)
    })
  }

  newTimer = () => {
    const long = this.state.timers.length
    const newTimer = {id: long+1, title: 'Title', project: 'project',count:1, setVar: 0 }
    this.setState({
      timers: this.state.timers.concat(newTimer)
    })
  }

  render() {
    return (
      <div className="App" id="cards" >
        <Card.Group >
          {this.state.timers.map((timer)=>(
            <Timer
              key={timer.id}
              info={timer}
              onStartClick={this.startTimer.bind(this,timer)} onStopClick={this.stopTimer.bind(this,timer)} millisecondsToHuman={this.millisecondsToHuman(timer.count)}            onRemoveClick={this.removeTimer.bind(this,timer)}
            />
          ))}
        </Card.Group>
        <AddTimer />
      </div>
    );
  }
}

export default App;
