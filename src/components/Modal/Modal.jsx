import React from 'react';
import { Link } from "react-router-dom";
import "./Modal.scss";


const Modal = ({ active, setActive, setDefaultValues, count, time, player}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={ () => setActive(false)}>
            <div className={active ? "modal__contant active" : "modal__contant"} onClick={e => e.stopPropagation()}>
                <h5 className='modal__title'>You win!</h5>
                <span className='modal__player'>{player}</span>
                <span className='modal__score-title'>Your score:</span>
                <span className='modal__score'>{count*time}</span>
                <button className='button-22' onClick={setDefaultValues}> Start new game</button>
                <Link className='main__link' to="/list">Top list</Link>
            </div>
        </div>
    );
};

export default Modal;