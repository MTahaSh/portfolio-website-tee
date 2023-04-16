import Image from 'next/image'
import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className='flex flex-row lg:hidden py-5 px-3  space-x-5  items-center'>

        <div className='text-2xl'>
        <FaBars/>
        </div>
        
        <div className='flex items-center space-x-2'>
        <Image className='rounded-full' src={"/profilepic.jpeg"} width={70} height={70} alt='logo'></Image>
        <h1 className='text-sm sm:text-lg font-bold '>Muhammad Taha Rizwan</h1>
        </div>

    </div>
  )
}
