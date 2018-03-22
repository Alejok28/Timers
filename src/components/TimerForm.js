import React  from 'react';
import { Button, Card, Form } from 'semantic-ui-react'

 const TimerForm = ({onCancelClick}) => {
	 return (
		<Card>
      <Card.Content>
				<Form>
			    <Form.Field>
			      <label className='newTimer-form'>Title</label>
			      <input  />
			    </Form.Field>
			    <Form.Field>
			      <label className='newTimer-form'>Project</label>
			      <input  />
			    </Form.Field>
			  </Form>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
					<Button basic color='blue'>Create</Button>
          <Button basic color='red' onClick={onCancelClick}>Cancel</Button>
        </div>
      </Card.Content>
    </Card>
	 )
 }

export default TimerForm;
