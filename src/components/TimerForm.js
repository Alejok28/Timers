import React, { Component } from 'react';
import { Button, Card, Form } from 'semantic-ui-react'

class TimerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      project: ''
    }
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleProjectChange = (e) => {
    this.setState({
      project: e.target.value
    })
  }

  handleSubmit = (e) => {
    const timer = {title: this.state.title, project: this.state.project}
    e.preventDefault();
    // store.dispatch({
    //   type: "ADD_TIMER",
    //   timer
    // })
  }

  render(){
    return (
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <label className='newTimer-form'>Title</label>
              <input value={this.state.title} onChange={this.handleTitleChange}/>
            </Form.Field>
            <Form.Field>
              <label className='newTimer-form'>Project</label>
              <input value={this.state.project} onChange={this.handleProjectChange}/>
            </Form.Field>
          </Form>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='blue' onClick={this.handleSubmit}>Create</Button>
            <Button basic color='red' onClick={this.props.onCancelClick}>Cancel</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}


export default TimerForm;
