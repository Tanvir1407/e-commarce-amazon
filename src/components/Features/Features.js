import React from 'react';
import FeaturesPic from '../images/download.jpg';
import './Features.css';

const Features = () => {
    return (
        <div className='features__container'>
            <div className='features__text-box'>
                <p className='offer__text'>Sale up to 70% off</p>
                <h1>
                    New Collection For Fall
                </h1>
                <p className='offer__text__two'>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>SHOP NOW</button>
            </div>
            <div className='features__img-box'>
                <div className='features__img__div'>
                    <img src={FeaturesPic} alt="features pic" />
                </div>
            </div>
        </div>
    );
};

export default Features;