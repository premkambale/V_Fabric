import React from 'react'
import './tabBar.css'
import { AiOutlineAppstore } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const TabBar = () => {
    return (
        <>
            <div className="tabBar-container">
                <div className="tab1">
                    <AiOutlineAppstore size={20} />
                    <p>Shop</p>
                </div>
                <div className="tab1">
                    <div className="count-container">
                        <span>0</span>
                    </div>
                    <CiHeart size={20} />
                    <p>Wishlist</p>
                </div>
                <div className="tab1 ">
                    <div className="count-container">
                        <span>0</span>
                    </div>
                    <CiShoppingCart size={20} />
                    <p>Cart</p>
                </div>
                <div className="tab1">

                    <FiUser size={20} />
                    <p>profile</p>
                </div>
                <div className="tab1">
                    <CiSearch size={20} />
                    <p>Search</p>
                </div>
            </div>
        </>
    )
}

export default TabBar