import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

import './style.css';

function Greeting(props) {

    let tod = props.time
    let icon = null
    let greetingText = null

    if (tod === "AM") {
        icon = faCoffee
        greetingText = "Good Morning"

    } else {
        icon = faSun
        greetingText = "Good Afternoon"


    }
    
    return (
        <Container fluid className="Greeting">
                <p>{greetingText}!</p>
                <FontAwesomeIcon className="todIcon" icon={icon} />
        </Container>
    );

}


export default Greeting;
