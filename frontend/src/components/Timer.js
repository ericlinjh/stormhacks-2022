import React, {useState} from 'react'

export default function Countdown() {
    const [time, setTime] = useState(60);
    const [interval, setInterval] = useState();
    const start = () => {
        run ();
        setInterval(setInterval(run, 1000));
    };
    const resetTimer = () => {
        clearInterval(interval);
        setTime(60)
    };

    var timer = time;
    const run = () => {
        timer--;
        return setTime(timer);
    };

    return (
        <div className="timer">
            <h1>{time}</h1>
        </div>
    )

}