import React, { useState, useEffect, useRef} from 'react';
import Card from '../Card';
import './Board.css';
import '../Card';
import uniqueCardsArray from '../../data'

function Board() {

    const Cards = [
        {
            id : 0,
            type : uniqueCardsArray[0].type,
            img: uniqueCardsArray[0].img
        },
        {
            id : 1,
            type : uniqueCardsArray[0].type,
            img: uniqueCardsArray[0].img
        },
        {
            id : 2,
            type : uniqueCardsArray[1].type,
            img: uniqueCardsArray[1].img
        },
        {
            id : 3,
            type : uniqueCardsArray[1].type,
            img: uniqueCardsArray[1].img
        },
    ]

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
            setOpenCards([])
        } else {
            disable();
            const timer = setTimeout(()=>{
                    setOpenCards([])
                }, 1500);
                return () => {clearTimeout(timer); enable()}
            } 
        }
    },[openCards])

    return (
        <div className="game-board" style={{"gridTemplateColumns" : "1fr 1fr"}}>

            {Cards.map((card) => {
                return <Card 
                        img={card.img} 
                        handleCardClick={handleCardClick} 
                        id={card.id} key={card.id} 
                        isFlipped={checkIsFlipped(card.id)}
                        isMatched={checkIsMatched(card.id)}
                        isClickable={isClickable}
                    />})}

        </div>
    )
}

export default Board;