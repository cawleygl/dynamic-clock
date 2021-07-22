import React from "react";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'



import './style.css';

function Greeting(props) {

    let tod = props.tod
    let hour = props.hour
    let greetingIcon = null
    let greetingText = null

    if (tod === "AM") {
        greetingText = "Good Morning"
        greetingIcon = faSun

    } else if (hour === 12 || hour < 5) {
        greetingText = "Good Afternoon"
        greetingIcon = faCloudSun

    } else if (hour < 9) {
        greetingText = "Good Evening"
        greetingIcon = faCloudMoon

    } else {
        greetingText = "Good Night"
        greetingIcon = faMoon

    }
    
    return (
        <Container fluid className="Greeting">
                <p>{greetingText}!</p>
                <FontAwesomeIcon className="todIcon" icon={greetingIcon} />
        </Container>
    );

}


export default Greeting;
