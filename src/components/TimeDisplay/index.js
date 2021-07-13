import React, { useState, useEffect } from "react";
// import Moment from 'react-moment';
import 'moment-timezone';

import './style.css';

function TimeDisplay() {

    const [time, setTime] = useState({
        hour: null,
        minute: null,
        second: null
    });

    const date = new Date()
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentSecond = date.getSeconds();

    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = {
            hour: currentHour,
            minute: currentMinute,
            second: currentSecond
        }
            setTime(time => newTime);
            console.log(newTime)
        }, 1000);
        return () => clearInterval(interval);
      },
      );

    return (
        <p className="Clock">{time.hour}:{time.minute}</p>
    );
}


export default TimeDisplay;
