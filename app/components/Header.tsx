import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'



export default function Header(param:any) {

    const isOpen = param.isOpen;
    
    

  return (
        

    <div className={`lg:flex flex-col lg:fixed justify-between  h-[100vh] min-h-[100vh] w-[240px] ${isOpen? "bg-black":""} `}>
        <div className='flex flex-col  my-7 items-center leading-10'>
            <Image className='rounded-full' src={"/profilepic.jpeg"} width={100} height={100} alt='logo'></Image>

            <h1 className='text-1xl font-bold text-center text-3xl hover:text-blue-800 cursor-pointer transition-colors duration-700'>Muhammad Taha Rizwan</h1>

        </div>

        <div>
            <ul className='flex flex-col leading-10 mx-9 text-lg  items-center'>
                <Link href={"/"} className='before:content-[""] before:bg-blue-700 before:w-full before:top-full before:left-0 before:h-1/6 before:absolute before:translate-y-0 relative hover:before:translate-y-[-100%] before:transition-transform overflow-hidden'>Home</Link>
                <Link href={"/#services"} className='before:content-[""] before:bg-blue-700 before:w-full before:top-full before:left-0 before:h-1/6 before:absolute before:translate-y-0 relative hover:before:translate-y-[-100%] before:transition-transform overflow-hidden' >Services</Link>
                <Link href={"/#skills"} className='before:content-[""] before:bg-blue-700 before:w-full before:top-full before:left-0 before:h-1/6 before:absolute before:translate-y-0 relative hover:before:translate-y-[-100%] before:transition-transform overflow-hidden' >Skills</Link>
                <Link href={"/#timeline"} className='before:content-[""] before:bg-blue-700 before:w-full before:top-full before:left-0 before:h-1/6 before:absolute before:translate-y-0 relative hover:before:translate-y-[-100%] before:transition-transform overflow-hidden' >Experience</Link>
                <Link href={"/#works"} className='before:content-[""] before:bg-blue-700 before:w-full before:top-full before:left-0 before:h-1/6 before:absolute before:translate-y-0 relative hover:before:translate-y-[-100%] before:transition-transform overflow-hidden' >Works</Link>
                <Link href={"/#contact"} className='before:content-[""] before:bg-blue-700 before:w-full before:top-full before:left-0 before:h-1/6 before:absolute before:translate-y-0 relative hover:before:translate-y-[-100%] before:transition-transform overflow-hidden' >Contact</Link>
            </ul>
        </div>

    <div className='flex my-10 space-x-4 justify-center '>
        <Link href={"https://www.facebook.com/taha.sheikh.96930013/"} target='_blank' ><button className='hover:text-blue-700 transition-colors duration-700'><FaFacebookF/></button></Link>
        <Link href={"https://twitter.com/TeeShayk"} target='_blank' ><button className='hover:text-blue-700 transition-colors duration-700'><FaTwitter/></button></Link>   
        <Link href={"https://www.instagram.com/teeshayk/"} target='_blank'><button className='hover:text-blue-700 transition-colors duration-700'><FaInstagram/></button></Link>
        <Link href={"https://www.linkedin.com/in/taha-sheikh-a86a90194/"} target='_blank'><button className='hover:text-blue-700 transition-colors duration-700'><FaLinkedin/></button></Link>
    </div>


    </div>
  )
}
