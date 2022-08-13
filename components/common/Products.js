import React from 'react'
import products from '../../api/woocommerceApi'

function Popular() {

    console.log(products)
  return (
    <div className='bg-gray-100 shadow-sm rounded-sm flex flex-col gap-2 p-3'>
        <div className='h-36  bg-white rounded-sm '>
            image
        </div>
        <h4 className='font-medium text-blue-700 overflow-hidden truncate'>
            productname 
        </h4>
        <div className='text-sm text-gray-600 h-10 overflow-hidden text-ellipsis'>
            Short description descriptionf sdf
             sf 
        </div>
        <div className='text-red-600 flex flex-row justify-between'>
            <div>

            11.00 <span className='text-xs'>AED</span>
            </div>
            <button className='bg-blue-700 text-white p-2 rounded-md'>Add to cart</button>
        </div>
    </div>
  )
}

export default Popular