import React, { Component }  from 'react';
import { Button, Card, Icon } from 'semantic-ui-react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      timers: [
        {id:1, title:'Practice squat', project:'Gym Chores', count:1, setVar: 0}, {id:2,title:'Bake squash', project:'Kitchen Chores', count:1, setVar: 0}
      ]
    }
  }

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
  render() {
    return (
      <Card.Group >
        {this.state.timers.map((timer)=>(
          <Card>
            <Card.Content>
              <Card.Header>
                {timer.title}
              </Card.Header>
              <Card.Meta>
                {timer.project}
              </Card.Meta>
              <Card.Description>
                {this.millisecondsToHuman(timer.count)}
              </Card.Description>
              <div className="icons">
                <Icon link name='trash' onClick={this.removeTimer.bind(this,timer)} />
                <Icon link name='edit' />
              </div>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                {timer.setVar === 0?
                  <Button onClick={this.startTimer.bind(this,timer)} basic color='green'>Star</Button> :
                  <Button onClick={this.stopTimer.bind(this,timer)} basic color='red'>Stop</Button>
                }
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
 	  )
  }
}

export default Timer;
