import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

function TimeDisplay() {

    const [time, setTime] = useState({
        hour: null,
        minute: null,
        second: null
    });

    const date = new Date()
    const currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

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
                second: currentSecond
            }
            setTime(time => newTime);
        }, 1000);
        return () => clearInterval(interval);
    },
    );

    return (
        <div>
            <Container>
                <Row>
                    <Container className="Clock">
                        <Col className="Hour">{time.hour}:{time.minute}<span className="Second">.{time.second}</span></Col>
                    </Container>
                </Row>
            </Container>
        </div>
    );
}


export default TimeDisplay;
