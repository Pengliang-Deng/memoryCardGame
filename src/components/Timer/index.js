import React, {useState, useEffect} from 'react';
import './Timer.css';

function Timer(props) {

    const [initTime, setInitTime] = useState(props.time);
    // const [isStart, setIsStart] = useState(props.isStart);

    useEffect(()=>{
        if (props.isStart & (initTime > 0)) {
            console.log('run timer')
            setTimeout(()=>{
                setInitTime((prev)=>(prev - 1))
            }, 1000)
        }
    }, [initTime, props.isStart])

    return (
        <div className="game-timer">
            <div className="game-timer__bar" style={{width:`${100*initTime/60}%`}}>
                {`${initTime}s`}
            </div>
        </div>
    )
    
}

export default Timer;