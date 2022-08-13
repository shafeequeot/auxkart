import React from 'react'
import Products from '../common/Products'
function PopularProducts() {
  return (
    <div className='grid grid-cols-6 gap-4'>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
    </div>
  )
}

export default PopularProducts