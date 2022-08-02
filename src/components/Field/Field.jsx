import React, { useEffect, useState } from 'react';
import { useTimer } from 'use-timer';
import { setPlayerToStorage } from '../../js/localStorage';
import { useNavigate} from 'react-router-dom';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import './Field.scss'

export const fyShuffle = (arr) => {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

export const convert = (num) => {
    return num?.toString().padStart(2, "0");
}

const Field = ({array, setArray, player}) => {
    const [activeCards, setActiveCards] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()   
    const { time, start, pause, reset } = useTimer();
   
    const setDefaultValues = () => {
        setShowModal(false)
        setActiveCards([])
        setArray(fyShuffle(array))
        setFoundCards([]);
        setCount(0);
        reset()
        start()
    }

    const handlerCardClick = (index) => { 
        if (activeCards.length === 0) {
            setActiveCards([index]);
        }
        if (activeCards.length === 1) {
            const firstIndex = activeCards[0];
            const secondsIndex = index;
            if(firstIndex === secondsIndex) return 0
            if (array[firstIndex].name === array[secondsIndex].name) {
              if (foundCards.length + 2 === array.length) {
                setWin(true);
              }
              setFoundCards( [...foundCards, firstIndex, secondsIndex] );
            }
            setActiveCards([...activeCards, index]);
        }
        if (activeCards.length === 2) {
            setActiveCards([index]);
        }
        setCount(prev => prev + 1)
    }
    
    useEffect(() => {
        if(win){
            setTimeout(() => {
                setShowModal(true)
                pause()
                setPlayerToStorage(player, count, time)
            }, 500)
        } 
        setWin(false)   
    }, [win])

    useEffect(() => {
        start()
        if(array.length===0) navigate('/')
    }, [])

    return (
        <>
            <div className='field'>
                {array.map((item, index) => {
                    return (
                        <Card 
                            name={item.name} 
                            index={index}
                            handlerCardClick={handlerCardClick}
                            activeCards={activeCards}
                            foundCards={foundCards}
                            key={index} 
                        />
                    )})}
              
            </div>
            <div className="items">
                <div className="items__up">
                    <span>Player: {player}</span>
                    <span>Clicks: {count}</span>
                    <span>Time: {convert(Math.floor(time/60))}:{convert( time % 60)}</span> 

                </div>
                <div className="items__down">
                    <button className='button-22 items--width' onClick={setDefaultValues}>New start</button>
                    <button className='button-22 items--width' onClick={()=> navigate('/list')}>Top List</button>
                    <button className='button-22 items--width' onClick={()=> navigate('/')}>to Main</button>
                </div>
            </div>
            <Modal 
                active={showModal} 
                setActive={setShowModal} 
                setDefaultValues={setDefaultValues}
                count={count}
                time={time}
                player={player}
            />
        </>
    );
};

export default Field;