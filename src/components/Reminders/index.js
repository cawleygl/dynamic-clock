import React, { useState, useEffect } from "react";
import { Button, Container, Form, ListGroup } from 'react-bootstrap';

import './style.css';

function Reminders() {
  const [currentReminder, setCurrentReminder] = useState(null);
  const [savedReminder, setSavedReminder] = useState([]);

  useEffect(() => {
    if (savedReminder == []) {
      setSavedReminder(JSON.parse(localStorage.getItem('ReminderList')));
    };
    
    console.log(`Current: ${currentReminder}`, `Saved: `, savedReminder);
  }, [currentReminder, savedReminder]);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentReminder !== "" & currentReminder !== null) {
      setSavedReminder(prevState => ([...prevState, { content: currentReminder.trim(), id: prevState.length }]));

      console.log("ADDING TO LOCAL STORAGE");
      localStorage.setItem('ReminderList', JSON.stringify([...savedReminder, { content: currentReminder.trim(), id: savedReminder.length }]));

    }

  }

  const onChange = (event) => {

    setCurrentReminder(event.target.value);

  }


  return (
    <Container fluid>
      <p className="Label">Reminders:</p>
      <ListGroup variant="flush">
        {savedReminder.map((reminderMap, index) => <ListGroup.Item key={reminderMap.id}>{reminderMap.content}: #{reminderMap.id}, Index: {index}</ListGroup.Item>)}
      </ListGroup>
      <Form.Control id="reminderInput" as="textarea" rows={1} onChange={onChange} />
      <Button id="reminderSubmit" variant="primary" size="lg" className="ReminderButton" onClick={handleSubmit}>Submit</Button>
    </Container>
  );
}

export default Reminders;
