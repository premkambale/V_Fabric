import React, { useState } from 'react';
import './Wishlist.css';
import EmptyItems from '../../CommonComponents/Empty/EmptyItems';
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
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
          <div className="layout-main-container">

          </div>

      }

    </div>
  )
}

export default Wishlist