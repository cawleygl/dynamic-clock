import React, { useState, useEffect } from "react";
// import Moment from 'react-moment';
import 'moment-timezone';

import './style.css';

function TimeDisplay() {

    const [time, setTime] = useState(null);

    const currentTime = new Date().toLocaleString()

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => currentTime);
        }, 1000);
        return () => clearInterval(interval);
      },
      );

    return (
        <p className="Clock">Date: {time}</p>
    );
}


export default TimeDisplay;
