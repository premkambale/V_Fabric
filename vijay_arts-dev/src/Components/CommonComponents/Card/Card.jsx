import React from 'react';
import "./Card.css";
import PropTypes from 'prop-types';

const Card = ({ item }) => {
  const { itemImg, label, productName, price, discountPrice, productDesc ,layoutType} = item;
  return (
    <div className="inner-productContainer">
      <div className="product-img-container">
        <img src={item.img} alt="error" />
      </div>
      <div className="product-info-container">
        <div className='productLabelContainer'>
          <span className='productLabel'>{item?.label}</span>
          <p>{item?.productName}</p>
          <div className='priceBox'>
            <span className=''>MRP.{item.price}</span>
            <span className='discountPrice'>Rs. {item.discountPrice}</span>
          </div>
        </div>
        <div className='product-desc'>
          <p>{item?.productDesc}</p>
        </div>
      </div>
      <div className="product-actionbtns">
        <button className='quickview-btn'>Quick view</button>
        <button className='addtocart-btn'>Add to cart</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object
}
export default Card