import Image from 'next/image'
import React from 'react'

function Icons(props) {
  return (
    <div className='bg-gray-200 flex flex-row gap-4 justify-center items-center p-2'>
        <Image width={120} height={80} src={"https://auxkart.com/wp-content/uploads/2021/07/Symbol-of-the-iPhone-logo-1024x489.jpg"}/>
        <Image width={120} height={80} src={"https://auxkart.com/wp-content/uploads/2021/07/Symbol-of-the-iPhone-logo-1024x489.jpg"}/>
        <Image width={120} height={80} src={"https://auxkart.com/wp-content/uploads/2021/07/Symbol-of-the-iPhone-logo-1024x489.jpg"}/>
        <Image width={120} height={80} src={"https://auxkart.com/wp-content/uploads/2021/07/Symbol-of-the-iPhone-logo-1024x489.jpg"}/>
        <Image width={120} height={80} src={"https://auxkart.com/wp-content/uploads/2021/07/Symbol-of-the-iPhone-logo-1024x489.jpg"}/>
    </div>
  )
}

export default Icons