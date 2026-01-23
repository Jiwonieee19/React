import { useState, useEffect } from 'react'

function MyComponent() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()) // every 1s, it will pass the current date
        }, 1000) //every 1s this function is run

        return () => {
            clearInterval(intervalId); //free up resources/data/space
        }
    }, []) //timer start after mount

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; //if 12 it will return 0 which is false, then return 12 as it is the || value
        // power of funda, this means that if its > 12, its 13, then modulus of 13 is 1 which refers to 1pm too

        // return `${hours}:${minutes}:${seconds}:${meridiem}` //returns pure number
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}` //returns strings since padZero return a string
    }

    //if single digit, add 0 on the front
    function padZero(number) {
        return (number < 10 ? "0" : "") + number; //add 0 if single digit
    }

    return (<div className='clock-container'>
        <div className='clock'>
            {/* <span>00:00:00s</span> */}
            <span>{formatTime()}</span>
        </div>
    </div>)
}

export default MyComponent