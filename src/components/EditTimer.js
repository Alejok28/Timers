import React, { Component } from 'react';
import { Button, Card, Form } from 'semantic-ui-react'

class EditTimer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.timer.title,
      project: this.props.timer.project
    };
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleProjectChange = (e) => {
    this.setState({
      project: e.target.value
    });
  }

  handleSubmit = (e) => {
		const id = this.props.timer.id;
    const title = this.state.title ? this.state.title : "Timer";
    const project = this.state.project ? this.state.project : "Project";
    const timer = {id, title , project, edit: false};
    e.preventDefault();
    this.props.onCreateClick(timer);
    // this.props.onCancelClick();
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


export default EditTimer;
