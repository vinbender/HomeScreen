import React, { useState, useEffect } from 'react';
import './DigitalClock.css'


function DigitalClock() {

    //set time state
    const [time, setTime] = useState(new Date());

    //set interval to update time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(intervalId); }
    }, []);


    //format time for clock
    function formatTime(){
        // get time for clock
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        //return moduli for 12 hour clock
        hours = hours % 12 || 12;

        //return time in hours, minutes, seconds, and AM/PM + running it through addZero function
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${amOrPm}`;
    }

    //add zero to time if less than 10
    function addZero(number){
        return number < 10 ? '0' + number : number;
    }

    //return clock and date
    return (<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
        <div className="date">
            <span>{time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric'  })}</span>
        </div>
    </div>
    )
}
export default DigitalClock;