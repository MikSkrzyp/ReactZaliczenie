import React, { useState, useEffect } from 'react';
import '../CSS/Clock.css'
const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setTime(new Date());
    };

    return (
        <div className="clock-container">
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;