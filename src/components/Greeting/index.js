import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

function Greeting() {

    const [time, setTime] = useState();


    return (
        <Container className="Greeting">Good Morning!</Container>
    );

}


export default Greeting;
