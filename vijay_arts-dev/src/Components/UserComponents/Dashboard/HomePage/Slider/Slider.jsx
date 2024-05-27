import React, { useState } from 'react';
import './Slider.css';
import lehenga from '../../../../../assets/Images/lehenga.jpg';
import lehenga2 from '../../../../../assets/Images/lehenga2.jpg';

const Slider = () => {
    const images = [lehenga, lehenga2]; 
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='slider_MainDiv'>
            <div className='slider_images'>
                <div className='image_container'>
                    <img className='slider_image' src={images[currentIndex]} alt='Slider' />
                </div>
            </div>
            <button className='slider_button prev' onClick={prevImage}>❮</button>
            <button className='slider_button next' onClick={nextImage}>❯</button>
        </div>
    );
};

export default Slider;
