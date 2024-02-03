// src/components/CardSlider.js
import React, { useState } from 'react';
import './Card.css';
import { BsSkipForwardBtn } from "react-icons/bs";
import { BsSkipBackwardBtn } from "react-icons/bs";


const CardSlider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="mycard">
            <div className="card-slider">
                <div className="Clcards" style={{ transform: `translateX(${-currentIndex * 103}%)` }}>
                    {cards.map((card, index) => (
                        <div key={index} className="mycardss">
                             <p className='content'>"{card.content}"</p>
                            <div className="occas">
                            <img src={card.image } alt='semi' className='cardimg' />
                            <h2 className='names'>{card.name}</h2>
                            <p className='occa'>{card.occa}</p>
                            </div>
                            
                           
                        </div>
                    ))}
                </div>
            </div>

            <div className="btns">
                <button onClick={prevCard} className="nav-button">
                <BsSkipBackwardBtn />

                </button>
                <button onClick={nextCard} className="nav-button">
                    <BsSkipForwardBtn />
                </button>
            </div>
        </div>
    );
};

export default CardSlider;
