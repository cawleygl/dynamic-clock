import React from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import './style.css';

function Notes() {

    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="Label">Notes:</Form.Label>
                    <Container>
                        <Form.Control className="ReminderBox" as="textarea" rows={5} />
                    </Container>
                    <Button variant="primary" size="lg" className="ReminderButton"><FontAwesomeIcon icon={faSave} /></Button>
                    <Button variant="danger" size="lg" className="ReminderButton"><FontAwesomeIcon icon={faTrash} /></Button>

                </Form.Group>
            </Form>
        </Container>
    );

}


export default Notes;
