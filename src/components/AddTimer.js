import React , { Component } from 'react';
import TimerForm from './TimerForm'
import { Button, Icon } from 'semantic-ui-react'

class AddTimer extends Component {
	constructor() {
		super();

		this.state = {
			showForm: false
		};
	}

	handleAddTimerClick = () => {
		this.setState({
			showForm: true
		});
	}

	handleCancelClick = () => {
		this.setState({
 			showForm: false
 		});
 	}

	render(){
		return (
			<div className='addTimer-options'>
				{this.state.showForm?
					<TimerForm
						onCancelClick={this.handleCancelClick}
						onCreateClick={this.props.onCreateTimer}
					/>
					:
					<Button icon onClick={this.handleAddTimerClick}>
						<Icon  name='plus' />
					</Button>
				}
			</div>
		)
	}
}

export default AddTimer;
