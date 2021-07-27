import React, { useState } from "react";
import { Button, Container, Form, ListGroup } from 'react-bootstrap';

import './style.css';

function List() {

    const [currentReminder, setCurrentReminder] = useState("");
    const newArr = []

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(currentReminder);
      const retrieved = JSON.parse(localStorage.getItem('ReminderList'));

      if (retrieved === null) {
        newArr.push(currentReminder);
        localStorage.setItem('ReminderList', JSON.stringify(newArr));
      } else {
        retrieved.push(currentReminder);
        localStorage.setItem('ReminderList', JSON.stringify(retrieved));
      }
      
    //   const retrieved = localStorage.getItem('ReminderList');
    //   retrievedArr.push(reminder)
    //   console.log(retrievedArr);

    //   localStorage.setItem('ReminderList', retrievedArr);

    }

    const onChange = (event) => {
        setCurrentReminder(event.target.value);
        console.log(currentReminder);

    }

    // const listItems = reminderArray.map((newReminder) =>
    //     <ListGroup.Item>{newReminder}</ListGroup.Item>
    // );

    return (
        <Container fluid>
            <p className="Label">Reminders:</p>
            {/* <ListGroup variant="flush">{listItems}</ListGroup> */}
            <Form.Control id="reminderInput" as="textarea" rows={1} onChange={onChange}/>
            <Button id="reminderSubmit" variant="primary" size="lg" className="ReminderButton" onClick={handleSubmit}>Submit</Button>
        </Container>
    );

}

export default List;
