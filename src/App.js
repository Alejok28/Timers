import React, { Component } from 'react';
import './App.css';
import { Button, Card, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {count: 1}
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({count: (this.state.count + 1000)})
  }

  startTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
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

  render() {
    return (
      <div className="App" id="cards" >
        <Card.Group >
          <Card>
            <Card.Content>
              <Card.Header>
                Steve Sanders
              </Card.Header>
              <Card.Meta>
                Friends of Elliot
              </Card.Meta>
              <Card.Description>
                {this.millisecondsToHuman(this.state.count)}
              </Card.Description>
              <div className="icons">
                <Icon link name='trash' />
                <Icon link name='edit' />
              </div>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button onClick={this.startTimer} basic color='green'>Star</Button>
                <Button onClick={this.stopTimer} basic color='red'>Stop</Button>
              </div>
            </Card.Content>
          </Card>

        </Card.Group>
      </div>
    );
  }
}

export default App;
