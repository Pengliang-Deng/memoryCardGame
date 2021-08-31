import React, { useEffect, useState} from 'react';


function GameStatus(props) {

    const status = [
        {
            name:"game-stats__level",
            label: {name:"game-stats__level--label", description: "Current Level:"},
            value: {name:"game-stats__level--value", num: props.level}
        },
        {
            name:"game-stats__score",
            label: {name:"game-stats__score--label", description: "Score:"},
            value: {name:"game-stats__score--value", num: props.score}
        },
    ]


    return (
        <div className="game-stats">
            {/* <div className="game-stats__level">
                <div className="game-stats__level--label">Current Level:</div>
                <div className="game-stats__level--value">1</div>
            </div>
            <div className="game-stats__score">
                <div className="game-stats__score--label">Score:</div>
                <div className="game-stats__score--value">0</div>
            </div> */}
            {status.map((currentStatus)=>{
                return (
                    <div className={currentStatus.name}>
                        <div className={currentStatus.label.name}>{currentStatus.label.description}</div>
                        <div className={currentStatus.value.name}>{currentStatus.value.num}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default GameStatus;