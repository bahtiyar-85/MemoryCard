import React from 'react';
import "./Card.scss"

const Card = ({name, index, handlerCardClick, activeCards, foundCards}) => {
    return (
        <div className={'card ' + ((foundCards.indexOf(index) !== -1) ? 'hide' : '')} onClick={() => handlerCardClick(index)}>
            <div className={"card__inner " + ((activeCards.indexOf(index) !== -1) ? 'clicked' : '')}>
                <div className="card__front">
                </div>
                <div className="card__back">
                    <img className='card__back-img' src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt={name} />   
                </div>
            </div>
             
        </div>
    );
};

export default Card;