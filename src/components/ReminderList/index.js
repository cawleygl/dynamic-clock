import React  from "react";
import { ListGroup } from 'react-bootstrap';

import './style.css';

function ReminderList() {
    const retrieved = JSON.parse(localStorage.getItem('ReminderList'));
    
    if (retrieved === null) {
        return (
            <ListGroup variant="flush">No Saved Reminders</ListGroup>

        );
    } else {
        const listItems = retrieved.map((reminderMap) =>
        <ListGroup.Item>{reminderMap}</ListGroup.Item>
    );

        return (
            <ListGroup variant="flush">{listItems}</ListGroup>
        );
    
    }

}

export default ReminderList;
