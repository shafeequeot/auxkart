import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='z-0'>
        <Image width={1760} height={520} src={"https://auxkart.com/wp-content/uploads/2021/07/Samsung-Galaxy-Note20-and-Ultra-3.jpg"}/>
    </div>
  )
}

export default Banner