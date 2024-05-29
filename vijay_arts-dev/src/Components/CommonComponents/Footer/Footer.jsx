import React from 'react';
import "./Footer.css";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { BiSupport, BiRecycle, BiLogoMastercard } from "react-icons/bi";
import { SiInstagram, SiMastercard, SiPayoneer, SiPaytm } from "react-icons/si";
import { FaStar, FaStarHalfAlt, FaBrush, FaFacebookF, FaPinterestP, FaYoutube, FaApplePay, FaGooglePay } from "react-icons/fa";
import { IoCallOutline, IoLogoTwitter, IoMailUnreadOutline } from "react-icons/io5";
import { RiVisaLine } from "react-icons/ri";
import hun_reviews from "../../../assets/svg/100_reviews.svg"
import gold_transparency from "../../../assets/svg/gold_transparency.svg"
import top_stories from "../../../assets/svg/top_stories.svg"
import top_trending from "../../../assets/svg/top_trending.svg"
import v_reviews from "../../../assets/svg/v_reviews.svg"

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
                {utility.map((item,index) => {
                    const Component = item.utilityLogo;
                    return (
                        <div className={`utility-container utility-item-${index+1}`}>
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
                            <FaStarHalfAlt /> 858 Reviews
                        </p>
                        <div className="verified-by">
                            <p className='verified-by-text'>
                                <span className='verified-by'>Verified by</span> <FaBrush />
                                <span className='verified-bold'>Judge.me</span>
                            </p>
                        </div>
                    </div>
                    <div className="verified-certificates">
                        <img src={hun_reviews} alt="hun_reviews" />
                        <img src={gold_transparency} alt="gold_transparency" />
                        <img src={v_reviews} alt="v_reviews" />
                        <img src={top_stories} alt="top_stories" />
                        <img src={top_trending} alt="top_trending" />

                    </div>
                </div>
            </div>
            <div className="bottom-footer-container">
                <div className="bottom-footer-inner-container centered">
                    <div className="bottom-footer b-footer-first">
                        <img src="/src/assets/logo.svg" alt="error" className='b-logo' />
                        <p>3-4, 3rd floor, Ashirwad Embro park 2, Near JJ Farm,Simada to Saniya head road, Saroli, Surat, Gujarat, India - 395010 </p>
                        <div className="b-footer-email">
                            <IoMailUnreadOutline /><span>contact@blfabric.com</span>
                        </div>
                        <div className="b-footer-email">
                            <IoCallOutline /><span>contact@blfabric.com</span>
                        </div>
                        <div className="b-footer-social-media">
                            <div className="b-footer-svg"><FaFacebookF /></div>
                            <div className="b-footer-svg"><IoLogoTwitter /></div>
                            <div className="b-footer-svg"><SiInstagram /></div>
                            <div className="b-footer-svg"><FaPinterestP /></div>
                            <div className="b-footer-svg"><FaYoutube /></div>
                        </div>
                    </div>
                    <div className="bottom-footer b-footer-second">
                        <h3 className='b-header'>Working Hours</h3>
                        <p>Monday-Saturday</p>
                        <p> 11:00AM to 06:00PM</p>

                    </div>
                    <div className="bottom-footer b-footer-third">
                        <h3 className='b-header'>My Account</h3>
                        <p>My Account</p>
                        <p>Return Request</p>
                        <p>Order History</p>
                        <p>Shipping Info</p>
                        <p>Track Order</p>
                    </div>
                    <div className="bottom-footer b-footer-fourth">
                        <h3 className='b-header'>Our Policy</h3>
                        <p>Return & Refund Policy</p>
                        <p>Shipping Policy</p>
                        <p>Stiching Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="bottom-footer b-footer-fifth">
                        <h3 className='b-header'>Newsletter Signup</h3>
                       <p>Subscribe to our newsletter and be the first one to get updated on Sales</p>
                        <div className="b-footer-email">
                            <IoCallOutline /><span>contact@blfabric.com</span>
                        </div>
                        <div className="b-footer-social-media b-footer-2">
                            <div className="b-footer-svg"><BiLogoMastercard/></div>
                            <div className="b-footer-svg"><FaApplePay/></div>
                            <div className="b-footer-svg"><RiVisaLine  /></div>
                            <div className="b-footer-svg"><FaGooglePay /></div>
                            <div className="b-footer-svg"> <SiPaytm /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer