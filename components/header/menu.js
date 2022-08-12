import React from 'react'
import Link from 'next/link'
function Menu(props) {
  return (
    <div className='text-red-700 capitalize font-medium hover:bg-gray-200 hover:text-blue-700 p-2 rounded-sm'>
       <a>
        <Link href={props.link}>
        {props.text}
        </Link>
        </a> 
        </div>
  )
}

export default Menu