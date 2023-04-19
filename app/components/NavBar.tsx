"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import Header from './Header'
import Link from 'next/link'
import page from '../page'
import Home from '../page'




 function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
     
  }
  return (
    <div className='w-full'>
      <div className={`${isOpen ? 'flex' : 'hidden'} bg-red-900  top-0 left-0 right-0  w-[23%] md:hidden sm:hidden`} >
          <Header isOpen = {isOpen}/>
          
              </div>
    
    <div className='lg:w-[77%] w-[77%] flex flex-row lg:hidden py-5 px-3  space-x-5  items-center'>

        <div className='text-2xl cursor-pointer ' >
        <button  onClick={handleToggleMenu}><FaBars/></button>
        </div>
        
        
        
        <div className='flex items-center space-x-2'>
        <Image className='rounded-full' src={"/profilepic.jpeg"} width={70} height={70} alt='logo'></Image>
        <h1 className='text-sm sm:text-lg font-bold '>Muhammad Taha Rizwan</h1>
        </div>

        

    </div>
    </div>
  )
}

export default NavBar;
