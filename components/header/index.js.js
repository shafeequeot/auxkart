import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Menu from './menu'

function Header() {
  return (
    <div className=''>
        <div className=' bg-blue-700'>
        <div className='flex flex-row  text-white justify-between items-center h-8 text-sm container mx-auto'>
            <div className='flex flex-row gap-4'>
                <div className='flex gap-2'>
                    <Image width={12} height={12} src="https://s.w.org/images/core/emoji/14.0.0/svg/1f1e6-1f1ea.svg"/>
                    Ship to United Arab Emirates
                </div>

                <div className='flex gap-2'>
                    <Image width={12} height={12} src="https://s.w.org/images/core/emoji/14.0.0/svg/1f1f6-1f1e6.svg"/>
                    Ship to Qatar
                </div>
            </div>

            <div>
            Customer Support
            </div>
        </div>
        </div>
        
        <div className='container mx-auto'>

        <div className='flex flex-row bg-white items-center'>
            <div>
                <Link href='/'>
                <a>
                <Image src="https://auxkart.com/wp-content/uploads/2021/06/Artboard-1-copy.png" width={230} height={75}/>
                </a>
                </Link>
            </div>

            <div className='bg-gray-100 flex flex-row p-2 flex-1 h-12 rounded-md items-center gap-3'>
                <BsSearch/> <input placeholder='Search products brand and more' className='outline-0 bg-none placeholder-gray-400 w-full bg-transparent'></input>
            </div>
            <div>
                <AiOutlineUser className='text-lg w-8'/>
            </div>
            <div>
                <AiOutlineShoppingCart className='text-lg'/>
            </div>
        </div>

        </div>
        <div className='bg-white h-10 items-center shadow-lg w-screen flex flex-row gap-8 justify-center border border-gray-200'>
            <Menu text="home" links="/"/>
            <Menu text="Kart" links="/kart"/>
            <Menu text="Checkout" links="/checkout"/>
            <Menu text="My Account" links="/Account"/>
            <Menu text="Shop" links="/shop"/>
        </div>

    </div>
    
  )
}

export default Header