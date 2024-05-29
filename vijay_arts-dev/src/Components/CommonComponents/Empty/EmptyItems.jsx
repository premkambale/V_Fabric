import React from 'react'
import './EmptyItems.css'
import noItem from '../../../assets/svg/no-item.svg'
import PropTypes from 'prop-types';
const EmptyItems = ({emptyItemName,emptyDescription}) => {
  return (
    <div className="no-items-main-container">
      <div className="no-item-container">
        <img src={noItem} alt='no-items' />
        <h2>{emptyItemName} is empty</h2>
        <div class="empty-wishlist-info">{emptyDescription}</div>
      </div>
    </div>
  )
}

EmptyItems.propTypes = {
  emptyItemName: PropTypes.string,
  emptyDescription: PropTypes.string
}
export default EmptyItems