import React from 'react';
import "./Footer.css";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { BiSupport, BiRecycle } from "react-icons/bi";
import { SiPayoneer } from "react-icons/si";
import { FaStar, FaStarHalfAlt, FaBrush } from "react-icons/fa";
const Footer = () => {
    const utility = [
        {
            utilityLogo: PiAirplaneTiltLight,
            utilityHeading: 'Free Shiping',
            utilitySubHeading: 'Free shipping on all order in India'
        },
        {
            utilityLogo: BiSupport,
            utilityHeading: 'Support',
            utilitySubHeading: 'Monday to Saturday 11am to 6pm'
        },
        {
            utilityLogo: BiRecycle,
            utilityHeading: '100% MONEY BACK',
            utilitySubHeading: 'Refund with in 5day after received Return product'
        },
        {
            utilityLogo: SiPayoneer,
            utilityHeading: '100% PAYMENT SECURE',
            utilitySubHeading: 'We ensure 128 bit SSL secure payment'
        }
    ]
    return (
        <div className="footer-main-container">
            <div className="footer-utility-container footer-regular-height">
                {utility.map((item) => {
                    const Component = item.utilityLogo;
                    return (
                        <div className="utility-container">
                            <div className="utility-logo">
                                <Component fontSize={28} fill='#e91e63' />
                            </div>
                            <div className="utility-info-container">
                                <p className="utility-heading">{item.utilityHeading}</p>
                                <div className="utility-sub-info-container">
                                    <p className='utility-sub-info'>{item.utilitySubHeading}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="about-info-container footer-mid-height">
                <p>About Us</p>
                <div className="about-sub-info-container" >
                    <p>We are Manufacturer of women clothing Since 2016. We sell only Premium Quality Product in our Store and we can not compromise in Quality. So don't Compare Our rate with any other Seller or Website.
                        THANK YOU</p>
                </div>
            </div>
            <div className="verified-by-container footer-mid-height">
                <div className="verified-sub-container">
                    <div className="verified-info">
                        <p className='verified-by-text'>
                            {[1, 2, 3, 4].map((item) => { return (<FaStar />) })}
                            &nbsp;<FaStarHalfAlt /> 858 Reviews
                        </p>
                        <div className="verified-by">
                            <p className='verified-by-text'>
                                <span className='verified-by'>Verified by</span> <FaBrush />
                                <span className='verified-bold'>Judge.me</span>
                            </p>
                        </div>
                    </div>
                    <div className="verified-certificates">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer