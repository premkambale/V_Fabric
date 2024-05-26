import React from 'react'
import './Header.css'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import logo from '../../../assets/logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigation = useNavigate();
    const navigationHandler = (navigationPath) => {
        const navigationLocation = navigationPath == 'favourite' ? '/favorite' : navigationPath == 'account' ? '/account' : navigationPath == 'cart' ? 'user/cart' : '';
        return navigation(navigationLocation)
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
                        <li>New Arrivals</li>
                        <li className='collectionListInner'>
                            <span>Trendy</span>
                            Hot Selling
                        </li>
                        <li>Lehenga Choli</li>
                        <li>Bridal Lehenga</li>
                        <li className='collectionListInner'>
                            <span className='saleBackground'>Sale</span>
                            Sale
                        </li>
                    </ul>
                </div>
                <div className='rightSideNavigateIcons'>
                    <div className='searchIconDiv' >
                        <IoSearchOutline color='black' size={20} />
                    </div>
                    <div className='accountIconDiv' onClick={() => navigationHandler('account')}>
                        <LuUser color='black' size={20} />
                    </div>
                    <div className='heartIconDiv' onClick={() => navigationHandler('favourite')}>
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