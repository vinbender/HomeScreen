import React, { useState, useEffect } from 'react';
import './DigitalClock.css'


function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(intervalId); }
    }, []);


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${amOrPm}`;
    }

    function addZero(number){
        return number < 10 ? '0' + number : number;
    }

    return (<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
    )
}
export default DigitalClock;