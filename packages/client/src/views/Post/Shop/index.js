import React from 'react'

import shop from '../../../assets/img/shop.png';

const Shop = () => {
  return (
    <div className="shop-section">
      <h3 className="mb-4">Buy at</h3>
      <a href="#">
        <img
          src={shop}
          alt='shop'
          className='img-fluid'
        />
      </a>
    </div>
  )
}

export default Shop
