import React, { useEffect, useState } from 'react';
import { getListFromStorage } from '../../js/localStorage';
import { useNavigate} from 'react-router-dom';
import { convert } from '../Field/Field';
import "./TopList.scss"

const TopList = () => {
    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
       setList(getListFromStorage())
    }, [])

    return (
        <div className="container">
            <div className='top-list'>
                <h5 className='top-list__title'>Top list</h5>
                <div className="top-list__titles">
                    <span className='top-list__value top-list__value--bold'>Players</span>
                    <span className='top-list__value top-list__value--bold'>clicks</span>
                    <span className='top-list__value top-list__value--bold'>time</span>
                    <span className='top-list__value top-list__value--bold'>score</span>
                </div>
                <ol className='top-list__list'>
                    {list.length > 0 ? (
                        list.map((item, index) => {
                            return(
                                <li className='top-list__list-item' key={index}>
                                    <span className='top-list__value'>{item.nickname}</span>
                                    <span className='top-list__value'>{item.clicks}</span>
                                    <span className='top-list__value'>{convert(Math.floor(item.time/60))}:{convert(item.time % 60)}</span>
                                    <span className='top-list__value'>{item.score}</span>
                                </li>
                            )
                        })
                    ) : (
                        <>
                            <img className='top-list__img' src="https://assets.materialup.com/uploads/8b0ec3cb-a32d-40bb-b17d-66b9fd744172/attachment.jpg" alt="empty" />
                            <p className='top-list__value top-list__value--empty'>List is empty</p>
                        </>
                    )}
                </ol>
            </div>
            <div className="top-list__btn">
                <button className='button-22' onClick={()=> navigate('/')}>to Main</button>
            </div>
        </div>
    );
};

export default TopList;