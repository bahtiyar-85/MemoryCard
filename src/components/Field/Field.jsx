import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Field.scss'
import Card from '../Card/Card';

export const fyShuffle = (arr) => {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

const Field = ({array, setArray, player}) => {
    const [activeCards, setActiveCards] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(0)
    const [time, setTime] = useState({})
    const location = useLocation()
    let timer = null
    let timeCount 

    const setDefaultValues = () => {
        setFoundCards([]);
        setActiveCards([])
        setCount(0);
    }

    const convert = (num) => {
        return num?.toString().padStart(2, "0");
    }

    const timerInit = () => {
        timeCount = 0
        timer = setInterval(function () {   
            setTime({
                minutes:Math.floor(timeCount/60), 
                seconds: timeCount % 60}
            )
            timeCount++
            if(timeCount === 3600) timeCount = 0 
        }, 1000)
    }

    const handlerCardClick = (index) => {
       
        if (activeCards.length === 0) {
            setActiveCards([index]);
        }
        if (activeCards.length === 1) {
            const firstIndex = activeCards[0];
            const secondsIndex = index;
          
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
                clearInterval(timer)
                timerInit()
                alert("You are win! Try again")
                setArray(fyShuffle(array))
                setDefaultValues()
            }, 500)
        } 
        setWin(false)   
    }, [win] )

    useEffect(() => {
        if(location.pathname === "/field") {
            if(!timer) timerInit()
        }
    }, [location])
   
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
            <div className="items">
                    <span>Player: {player}</span>
                    <span>Clicks: {count}</span>
                    <span>Time: {convert(time.minutes)}:{convert(time.seconds)}</span>
                </div>
            </div>
        </>
    );
};

export default Field;