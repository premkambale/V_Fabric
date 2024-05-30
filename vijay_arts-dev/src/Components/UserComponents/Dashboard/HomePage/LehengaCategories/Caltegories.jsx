import React from 'react'
import "./Categories.css"
import lehenga from "../../../../../assets/Images/lehenga.jpg"
const Caltegories = () => {
    return (
        <div class='cat_mainDiv'>
        <div class="catSubDivs">
            <div class="catCard">
                <img class='catImage' src={lehenga} alt="" />
                <div class="catNavigateButton">
                    <button class='cat_button'>
                        Bridal Lehenga
                    </button>
                </div>
            </div>
        </div>
        <div class="catSubDivs">
            <div class="catCard">
                <img class='catImage' src={lehenga} alt="" />
                <div class="catNavigateButton">
                    <button class='cat_button'>
                        Bridal Lehenga
                    </button>
                </div>
            </div>
        </div>
        <div class="catSubDivs">
            <div class="catCard">
                <img class='catImage' src={lehenga} alt="" />
                <div class="catNavigateButton">
                    <button class='cat_button'>
                        Bridal Lehenga
                    </button>
                </div>
            </div>
        </div>
    </div>
    

    )
}

export default Caltegories
