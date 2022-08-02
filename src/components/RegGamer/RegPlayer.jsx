import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { fyShuffle } from '../Field/Field';
import "./RegPlayer.scss";

const RegPlayer = ({setArray, setPlayer}) => {
    const navigate = useNavigate();
    const [value, setValue] = useState('')

    const getImage = async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=8")
            .then(responce => responce.json())
            .then(data => setArray(fyShuffle(data.results.concat(data.results))))
            .catch(error => console.log(error))
    }

    const handlerPlayClick = () => {
        if(value === '' || value.length < 2){
            alert("Enter correct player name")
        } else {
            navigate('/field')
            setPlayer(value)
        }
    }

    useEffect(() => {
        getImage()
    },[])

    return (
        <div className='main'>
            <h1 className='main__title'>Memory Game</h1>
            <input 
                className='main__input' 
                type="text" 
                placeholder='Enter your name'
                value = {value}
                onChange = {e => setValue(e.target.value)}
            />
            <div className="main__btn">
                <button className='button-78 main__btn-play' onClick={handlerPlayClick}>Play</button>
            </div>
            
            <Link className='main__link' to="/list">Top list</Link>
        </div>
    );
};

export default RegPlayer;