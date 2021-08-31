import React, { useState, useEffect, useRef} from 'react';
import Card from '../Card';
import './Board.css';
import '../Card';

function Board(props) {

    const Cards = props.cards

    const [openCards, setOpenCards] = useState([]);
    const [matchCards, setMatchCards] = useState([]);
    const [isClickable, setIsClickable] = useState(true);


    function checkIsFlipped(id) {
        return openCards.includes(id)
    }

    function checkIsMatched(id) {
        return matchCards.includes(id)
    }

    function enable() {
        setIsClickable(true)
    }

    function disable() {
        setIsClickable(false)
    }
    
    const handleCardClick = (id) => {
        setOpenCards((prev) => ([...prev, id]))
    }

    useEffect(()=>{
        if(openCards.length > 1) {
            if (Cards[openCards[0]].type === Cards[openCards[1]].type) {
                setMatchCards((prev) => ([...prev, openCards[0], openCards[1]]))
                props.handleScoreChange();
                setOpenCards([]);
                if (matchCards.length+2 === Cards.length) {
                    props.handleGameComplete()
                    reset()
                }

            } else {
                disable();
                const timer = setTimeout(()=>{
                        setOpenCards([])
                    }, 1500);
                    return () => {clearTimeout(timer); enable()}
            } 
        }
    },[openCards])

    useEffect(() => {
        reset()
    }, [props.shouldBoardReset])

    const reset = () => {
        setOpenCards([]);
        setMatchCards([]);
        setIsClickable(true);
    }

    return (
        <div>
            <div className={`game-board ${props.isStart? '':'hidden'}`} style={{"gridTemplateColumns" : `${props.layout}`}}>
                
                {Cards.map((card) => {return <Card 
                            img={card.img} 
                            handleCardClick={handleCardClick} 
                            id={card.id} key={card.id} 
                            isFlipped={checkIsFlipped(card.id)}
                            isMatched={checkIsMatched(card.id)}
                            isClickable={isClickable}/>
                })}
            </div>
                
            <div className={`game-board ${props.isStart? 'hidden':''}`}>
                <div className="game-instruction">
                  <h3 className="game-instruction__header">Instruction</h3>
                  <p className="game-instruction__content">
                    - Click on the card to view the back face of the card. <br />
                    - Get two exact same card to score.<br />- Score are based on the time
                    and level. <br />- You only have 60s for each level. <br />- There are
                    three levels, '2x2', '4x4' and '6x6'. <br />- Press 'Start Game'
                    button when you are ready.
                  </p>
                </div>
              </div>
        </div>
    )
}

export default Board;