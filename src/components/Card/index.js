import React, { useState, useEffect } from 'react';
import './Card.css';

function Card(props) {

    const handleClick = () => {
        if (!props.isMatched && props.isClickable) {
            props.handleCardClick(props.id)
        }
    }

    return (
        <div onClick={handleClick} className={`card ${(props.isFlipped || props.isMatched)? 'card--flipped': ''}` }>
            <div className="card__face card__face--front" />
            <div className="card__face card__face--back">
                <img src={props.img} alt='back face pic' className='img'></img>
            </div>
        </div>
    )
}

export default Card;