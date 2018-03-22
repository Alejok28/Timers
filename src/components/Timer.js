import React  from 'react';
import { Button, Card, Icon } from 'semantic-ui-react'

 const Timer = ({info, onStartClick, onStopClick, millisecondsToHuman, onRemoveClick}) => {
	 return (
		 <Card>
 			<Card.Content>
 				<Card.Header>
 					{info.title}
 				</Card.Header>
 				<Card.Meta>
 					{info.project}
 				</Card.Meta>
 				<Card.Description>
 					{millisecondsToHuman}
 				</Card.Description>
 				<div className="icons">
 					<Icon link name='trash' onClick={onRemoveClick} />
 					<Icon link name='edit' />
 				</div>
 			</Card.Content>
 			<Card.Content extra>
 				<div className='ui two buttons'>
          {info.setVar === 0?
            <Button onClick={onStartClick} basic color='green'>Star</Button> :
            <Button onClick={onStopClick} basic color='red'>Stop</Button>
          }
 				</div>
 			</Card.Content>
 		</Card>
	 )
 }

export default Timer;
