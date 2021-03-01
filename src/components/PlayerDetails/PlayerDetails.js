import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';

const PlayerDetails = (props) => {
    const {name, img, salary} = props.player;
    return (
        <div>
            <Card style={{ width: '30%', float: 'left', margin: '5px', backgroundColor: 'white', borderRadius: '10px', padding: '5px'}}>
                <Card.Img variant="top" src={img} style={{float: 'left'}} />
                <Card.Body style={{alignItems: 'center'}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Salary : ${salary}</Card.Text>
                    <Button variant="warning" onClick={() => props.playerAddingTeam(props.player)}><FontAwesomeIcon icon={faPlusCircle}/>Add to team list</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlayerDetails;