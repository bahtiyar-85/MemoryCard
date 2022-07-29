import React, { useState } from 'react';
import './Field.scss'
import Card from '../Card/Card';

const Field = ({array, setArray}) => {
    return (
        <div className='field'>
           <div className="container">
            {array.map((item, index) => {
                return (
                    <Card props={item} key={index}/>
                )})}
           </div>
        </div>
    );
};

export default Field;