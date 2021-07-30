import React, { useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import './style.css';

function Notes() {
    const [note, setNote] = useState(JSON.parse(localStorage.getItem('Notes')) || "");

    const handleSave = (event) => {
        event.preventDefault();
        localStorage.setItem('Notes', JSON.stringify(note));
        console.log(note);

    }
    const handleTrash = (event) => {
        event.preventDefault();
        setNote(note => "");
        localStorage.removeItem('Notes');
    }


    const onChange = (event) => {
        setNote(note => event.target.value);
        console.log(note);

    }

    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="Label">Notes:</Form.Label>
                    <Container>
                        <Form.Control className="ReminderBox" as="textarea" rows={5} onChange={onChange} value={note}/>
                    </Container>
                    <Button variant="primary" size="lg" className="ReminderButton" onClick={handleSave}><FontAwesomeIcon icon={faSave} /></Button>
                    <Button variant="danger" size="lg" className="ReminderButton" onClick={handleTrash}><FontAwesomeIcon icon={faTrash} /></Button>

                </Form.Group>
            </Form>
        </Container>
    );

}


export default Notes;
