import React, { useEffect, useState } from 'react'
import './Header.css'
import { IoCallOutline, IoSearchOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import logo from '../../../assets/logo.svg'
import { LuUser } from "react-icons/lu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useNavigate, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname;

    const [expandSidebar, setExpandSidebar] = useState(false)
    const [isActiveSearch, setIsActiveSearch] = useState(false)

    const navigationHandler = (navigationPath) => {
        navigate(`/main/${navigationPath}`)
    }

    const expandMenuBar = () => {
        setExpandSidebar(true)
    }

    const searchContainerHandler = () => {
        setIsActiveSearch(true)
    }

    const handleLogo = () => {
        navigate("/")
    }

    return (
        <>

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
                    <div className='menuBar' onClick={expandMenuBar}>
                        <CgMenuLeft size={25} />
                    </div>
                    <div onClick={handleLogo} className="logosection">
                        <img src={logo} alt="error" />
                    </div>
                    <div className={expandSidebar ? 'Expandcollection-list' : "collection-list"} >
                        <div className="manu-top-bar">
                            <div className="left-side-menu">
                                <p>MENU</p>
                            </div>
                            <div className="right-side-menu">
                                <p>CATEGORIES</p>
                            </div>
                            <div className='ClosemenuBar' onClick={() => setExpandSidebar(false)}>
                                <RiCloseLine color='white' size={20} />
                            </div>
                        </div>

                        <ul>
                            <NavLink to='/main/newArrivals' style={{ textDecoration: 'none', color: "black", width: expandSidebar ? '100%' : '100%' }}>
                                <li style={{ color: path.includes('/main/newArrivals') ? '#e91e63' : 'black' }} className='list-label' onClick={() => setExpandSidebar(false)}>New Arrivals</li>
                            </NavLink>
                            <NavLink to='/main/hotselling' style={{ textDecoration: 'none', color: "black", width: '100%' }} >
                                <li className='collectionListInner' style={{ color: path.includes('/main/hotselling') ? '#e91e63' : 'black' }} onClick={() => setExpandSidebar(false)}>
                                    <span>Trendy</span>
                                    Hot Selling
                                </li>
                            </NavLink>
                            <NavLink to='/main/lehengacholi' style={{ textDecoration: 'none', color: "black", width: '100%' }} onClick={() => setExpandSidebar(false)} >
                                <li style={{ color: path.includes('/main/lehengacholi') ? '#e91e63' : 'black' }} >Lehenga Choli</li>
                            </NavLink>
                            <NavLink to='/main/lehengacholi' style={{ textDecoration: 'none', color: "black", width: '100%' }} onClick={() => setExpandSidebar(false)}> <li>Bridal Lehenga</li></NavLink>
                            <NavLink to='/main/sale' style={{ textDecoration: 'none', color: "black", width: expandSidebar ? '100%' : 'auto' }} >
                                <li className='collectionListInner' style={{ color: path.includes('/main/sale') ? '#e91e63' : 'black' }} onClick={() => setExpandSidebar(false)}>
                                    <span className='saleBackground'>Sale</span>
                                    Sale
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className='rightSideNavigateIcons'>
                        <div className='searchIconDiv' >
                            <IoSearchOutline color='black' size={20} onClick={searchContainerHandler} />
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
            </div>

            {isActiveSearch &&
                <div className="searchBar">
                    <div className="rightsearchbarDiv"></div>
                    <div className="innerSearchBar-Container">
                        <div className="search-header">
                            <span>SEARCH OUT SITE</span>
                            <div className='clsBtn'>
                                <RiCloseLine color='black' size={20} onClick={() => setIsActiveSearch(false)} />
                            </div>

                        </div>
                        <div className="category-container">
                            <div className="categoryDiv1">
                                <span>All Category</span>
                                <MdOutlineKeyboardArrowDown size={20} />
                            </div>
                            <div className="categoryDiv">
                                <input type="text" placeholder='search here' />
                                <IoSearchOutline color='grey' size={20} />
                            </div>
                        </div>
                        <div className="search-result">
                            <span>Search Result</span>
                        </div>


                    </div>

                </div>
            }


        </>
    )
}

export default Header