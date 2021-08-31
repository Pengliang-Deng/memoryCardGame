import React, {useState, useEffect} from 'react';
import './Timer.css';

function Timer(props) {

    useEffect(()=>{
        if (props.isStart && (props.leftTime > 0)) {
            const timer = setTimeout(()=>{
                props.handleTimeChange()
            }, 1000)
            return () => clearTimeout(timer)
        } else if (props.leftTime === 0) {
            props.handleGameOver();
        }
        
    }, [props.leftTime, props.isStart])

    return (
        <div className="game-timer">
            <div className="game-timer__bar" style={{width:`${100*props.leftTime/60}%`}}>
                {`${props.leftTime}s`}
            </div>
        </div>
    )
}

export default Timer;