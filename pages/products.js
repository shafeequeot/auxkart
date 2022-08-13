import React from 'react'
import Header from '../components/header/index.js'
import { fetchwooCommerceProducts } from '../api/woocommerceApi'




import React from 'react'
fetchwooCommerceProducts()

function products() {
  return (
    <div>products</div>
  )
}

export default products