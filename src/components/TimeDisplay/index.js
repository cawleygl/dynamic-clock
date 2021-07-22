import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Greeting from '../Greeting'

import './style.css';

function TimeDisplay() {

    const [time, setTime] = useState({
        hour: null,
        minute: null,
        second: null,
        tod: null,
    });

    const date = new Date()
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();
    let currentTOD = "AM"

    if (currentHour > 12) {
        currentHour = currentHour - 12
        currentTOD = "PM"
    }
    if (currentMinute < 10) {
        currentMinute = "0" + currentMinute.toString()
    }
    if (currentSecond < 10) {
        currentSecond = "0" + currentSecond.toString()
    }

    useEffect(() => {
        const interval = setInterval(() => {

            const newTime = {
                hour: currentHour,
                minute: currentMinute,
                second: currentSecond,
                tod: currentTOD
            }
            setTime(time => newTime);
        }, 1000);
        return () => clearInterval(interval);
    },
    );

    return (
            <Container>
                <Row>
                    <Container className="Clock">
                        <Greeting time={time.tod} />
                        <Col className="Hour">{time.hour}:{time.minute}<span className="Second">.{time.second}</span><span className="TOD"> {time.tod}</span></Col>
                    </Container>
                </Row>
            </Container>
    );
}


export default TimeDisplay;
