import React, { useState } from 'react';
import './Wishlist.css';
import EmptyItems from '../../CommonComponents/Empty/EmptyItems';
import { newArrivalsData } from '../Dashboard/Collections/NewArrivals/NewArrivals';
import Card from '../../CommonComponents/Card/Card';
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([...newArrivalsData]);
  const [layoutType, setLayoutType] = useState(1)

  const handleSelectLayout = (layoutNo) => {
    setLayoutType(layoutNo)
  }
  return (
    <div className="wishlist-main-container">
      <div className="wishlist-header-container">
        <p>Wishlist</p>
      </div>
      {
        wishlist.length === 0 ?
          <EmptyItems
            emptyItemName={'Wishlist'}
            emptyDescription={`You don't have any products in the wishlist yet.`}
          />
          :
          <div className="wishlist-cards-main-container">
            <div className="layout-setting-container">
              <div className="layout-setting-inner-container">
                <div className={`layout-btn ${layoutType === 1 && 'grid1'}`} onClick={() => handleSelectLayout(1)}>
                  <span></span><span></span>
                </div>
                <div className={`layout-btn ${layoutType === 2 && 'grid2'}`} onClick={() => handleSelectLayout(2)}>
                  <span></span><span></span>
                </div>
                <div className={`layout-btn ${layoutType === 3 && 'grid3'}`} onClick={() => handleSelectLayout(3)}>
                  <span></span><span></span><span></span>
                </div>
                <div className={`layout-btn ${layoutType === 4 && 'grid4'}`} onClick={() => handleSelectLayout(4)}>
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className={`layout-btn ${layoutType === 5 && 'grid5'}`} onClick={() => handleSelectLayout(5)}>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div className="wishlist-cards-container  centered">
              {
                wishlist.map((item) => {
                  return (
                    <Card item={{ ...item, layoutType: layoutType }} />
                  )
                })
              }
            </div>
          </div>
      }

    </div>
  )
}

export default Wishlist