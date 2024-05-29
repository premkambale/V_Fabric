import React, { useEffect } from 'react'
import './Header.css'
import { IoCallOutline, IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import logo from '../../../assets/logo.svg'
import { LuUser } from "react-icons/lu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useNavigate, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname;

    const navigationHandler = (navigationPath) => {
        navigate(`/main/${navigationPath}`)
    }

    return (
        <div className='header-container'>
            <div className='top-container'>
                <div className='left-side-headerDiv'>
                    <div className="innerLeftSideContainer">
                        <IoCallOutline color='grey' />
                        <span>+91 9730897105</span>
                    </div>
                    <div className="innerLeftSideContainer">
                        <CiMail color='grey' />
                        <span>shreyashbansode1@gmail.com</span>
                    </div>
                </div>
                <div className='right-side-headerDiv'>
                    <p>FREE SHIPPING & COD AVAILABLE IN INDIA <span className='shopNowLabel'>Shop Now</span></p>
                </div>
            </div>
            <div className="headerContaiener">
                <div className="logosection">
                    <img src={logo} alt="error" />
                </div>
                <div className="collection-list">
                    <ul>
                        <NavLink to='/main/newArrivals' style={{ textDecoration: 'none', color: "black" }}>
                            <li style={{ color: path.includes('/main/newArrivals') ? '#e91e63' : 'black' }} >New Arrivals</li>
                        </NavLink>
                        <NavLink to='/main/hotselling' style={{ textDecoration: 'none', color: "black" }} >
                            <li className='collectionListInner' style={{ color: path.includes('/main/hotselling') ? '#e91e63' : 'black' }}>
                                <span>Trendy</span>
                                Hot Selling
                            </li>
                        </NavLink>
                        <NavLink to='/main/lehengacholi' style={{ textDecoration: 'none', color: "black" }}  >
                            <li style={{ color: path.includes('/main/lehengacholi') ? '#e91e63' : 'black' }}>Lehenga Choli</li>
                        </NavLink>
                        <li>Bridal Lehenga</li>
                        <NavLink to='/main/sale' style={{ textDecoration: 'none', color: "black" }} >
                            <li className='collectionListInner' style={{ color: path.includes('/main/sale') ? '#e91e63' : 'black' }}>
                                <span className='saleBackground'>Sale</span>
                                Sale
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className='rightSideNavigateIcons'>
                    <div className='searchIconDiv' >
                        <IoSearchOutline color='black' size={20} />
                    </div>
                    <div className='accountIconDiv' onClick={() => navigationHandler('profile')}>
                        <LuUser color='black' size={20} />
                    </div>
                    <div className='heartIconDiv' onClick={() => navigationHandler('wishlist')}>
                        <span className='counterSpanContainer'>0</span>
                        <CiHeart color='black' size={20} />
                    </div>
                    <div className='cartIconDiv' onClick={() => navigationHandler('cart')}>
                        <span className='counterSpanContainer'>0</span>
                        <CiShoppingCart color='black' size={20} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header