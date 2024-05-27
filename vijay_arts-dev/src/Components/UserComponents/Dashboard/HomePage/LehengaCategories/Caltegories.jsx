import React from 'react'
import "./Categories.css"
import lehenga from "../../../../../assets/Images/lehenga.jpg"
const Caltegories = () => {
    return (
        <div className='cat_mainDiv'>
            <div className="catSubDivs">
                <div className="catCard">
                    <img className='catImage' src={lehenga} alt="" />
                </div>
                <div className="catNavigateButton">
                    <button className='cat_button'>
                        Bridal Lehenga
                    </button>
                </div>
            </div>
            <div className="catSubDivs">
                <div className="catCard">
                    <img className='catImage' src={lehenga} alt="" />
                </div>
                <div className="catNavigateButton">
                    <button className='cat_button'>
                        Bridal Lehenga
                    </button>
                </div>
            </div>
            <div className="catSubDivs">
                <div className="catCard">
                    <img className='catImage' src={lehenga} alt="" />
                </div>
                <div className="catNavigateButton">
                    <button className='cat_button'>
                        Bridal Lehenga
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Caltegories
