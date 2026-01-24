import { useState, useEffect, useRef } from 'react'

function MyComponent() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
            //then pagka balik dri since nag true na, date now - start = seconds, every 10ms HAHAHA gets
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime; //stores current TIME in seconds (17,000,000,000)
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        // hours = String(hours).padStart(2, "0"); //mao ni gigamit niya this time, not the padZero written function

        return (
            `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}s`
        )
    }

    function padZero(nums) {
        return nums < 10 ? `0${nums}` : nums;
    }

    return (<div className='main-container'>
        <div><span>{formatTime()}</span></div>
        <div className='button-container'>
            <button onClick={start} className='start-button'>START</button>
            <button onClick={stop} className='stop-button'>STOP</button>
            <button onClick={reset} className='reset-button'>RESET</button>
        </div>
    </div>)
}

export default MyComponent