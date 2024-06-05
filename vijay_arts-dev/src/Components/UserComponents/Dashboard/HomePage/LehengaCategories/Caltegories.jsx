import React from 'react'
import "./Categories.css"
import lehenga from "../../../../../assets/Images/lehenga.jpg"
const Caltegories = () => {
    return (
        <div className="gallery">
            <div className="gallery-item">
                <img src={lehenga} alt="Designer Lehenga" className="gallery-img" />
                <div className="label">Designer Lehenga</div>
            </div>
            <div className="gallery-item">
                <img src={lehenga} alt="Bridal Lehenga" className="gallery-img" />
                <div className="label">Bridal Lehenga</div>
            </div>
            <div className="gallery-item">
                <img src={lehenga} alt="Lehenga Choli" className="gallery-img" />
                <div className="label">Lehenga Choli</div>
            </div>
        </div>
    )
}

export default Caltegories
