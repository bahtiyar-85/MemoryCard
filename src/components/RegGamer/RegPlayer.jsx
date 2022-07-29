import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./RegPlayer.scss";

const RegPlayer = ({setArray}) => {
    const navigate = useNavigate();
    const [player, setPlayer] = useState('')

    const getImage = async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
            .then(responce => responce.json())
            .then(data => setArray(data.results.concat(data.results)))
            .catch(error => console.log(error))
    }

    const handlerPlayClick = () => {
        navigate('/field')
        getImage()
    }
    return (
        <div className='main'>
            <h1 className='main__title'>Memory Game</h1>
            <input 
                className='main__input' 
                type="text" 
                placeholder='Enter your name'
                value = {player}
                onChange = {e => setPlayer(e.target.value)}
            />
            <div className="main__btn">
                <button className='button-78 main__btn-play' onClick={handlerPlayClick}>Play</button>
            </div>
            
            <Link className='main__link' to="/">Top list</Link>
        </div>
    );
};

export default RegPlayer;