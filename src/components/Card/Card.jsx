import React from 'react';
import "./Card.scss"

const Card = ({props}) => {
    return (
        <div className='card'>
            <img className='card__img' src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`} alt={props.name} />   
             
        </div>
    );
};

export default Card;