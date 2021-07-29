import React, { useState } from "react";
import { Button, Container, Form, ListGroup } from 'react-bootstrap';

import './style.css';

function Reminders() {
  const [reminder, setReminder] = useState({
    current: null,
    saved: JSON.parse(localStorage.getItem('ReminderList')) || []
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const retrieved = JSON.parse(localStorage.getItem('ReminderList'));
    console.log("----");
    console.log(retrieved);
    console.log("----");

    if (reminder.current === "" || reminder.current === null) {
      console.log("BLANK");

    } else if (retrieved === null) {
      setReminder(prevState => ({
        current: prevState.current,
        saved: [{content: prevState.current, id: 0}]
      }));
      console.log("NOTHING IN LOCAL STORAGE");
      localStorage.setItem('ReminderList', JSON.stringify([{content: reminder.current, id: 0}]));


    } else {
      setReminder(prevState => ({
        current: prevState.current,
        saved: [...prevState.saved, {content: prevState.current, id: prevState.saved.length}]
      }));
      console.log("ADDING TO LOCAL STORAGE");
      localStorage.setItem('ReminderList', JSON.stringify([...reminder.saved, {content: reminder.current, id: reminder.saved.length}]));

    }

    console.log(reminder);


  }

  const onChange = (event) => {

    setReminder(prevState => ({
      current: event.target.value,
      saved: prevState.saved
    }));
    console.log(reminder);

  }


  return (
    <Container fluid>
      <p className="Label">Reminders:</p>
      <ListGroup variant="flush">
        {reminder.saved.map((reminderMap) => <ListGroup.Item key={reminderMap.id}>{reminderMap.content}</ListGroup.Item>)}
      </ListGroup>
      <Form.Control id="reminderInput" as="textarea" rows={1} onChange={onChange} />
      <Button id="reminderSubmit" variant="primary" size="lg" className="ReminderButton" onClick={handleSubmit}>Submit</Button>
    </Container>
  );
}

export default Reminders;
