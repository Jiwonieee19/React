import { useState, useEffect, useRef } from 'react'

function MyComponent() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    function formatTime() {
        const minutes = 0;
        const seconds = 0;
        const milliseconds = 0;

        return (
            `${padZero(minutes)} : ${padZero(seconds)} : ${padZero(milliseconds)}s`
        )
    }

    function padZero(nums) {
        return nums < 10 ? `0${nums}` : nums;
    }

    function startButton() {

    }

    return (<div className='main-container'>
        <span>{formatTime()}</span>
        <br></br>
        <button onClick={startButton()}>START</button>
        <button onClick={startButton()}>{startTime.getHours()}</button>
    </div>)
}

export default MyComponent