import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'



export default function () {
  return (
    <div className='flex flex-col fixed justify-between  h-[100vh] min-h-[100vh] w-[240px] overflow-hidden'>
        <div className='flex flex-col  my-7 items-center leading-10'>
            <Image className='rounded-full' src={"/profilepic.jpeg"} width={100} height={100} alt='logo'></Image>

            <h1 className='text-1xl font-bold text-center text-3xl'>Muhammad Taha Rizwan</h1>

        </div>

        <div>
            <ul className='flex flex-col leading-10 mx-9 text-lg  items-center'>
                <Link href={"/"}>Home</Link>
                <Link href={"/#services"}>Services</Link>
                <Link href={"/#skills"}>Skills</Link>
                <Link href={"/#timeline"}>Experience</Link>
                <Link href={"/#works"}>Works</Link>
                <Link href={"/#contact"}>Contact</Link>
            </ul>
        </div>

    <div className='flex my-10 space-x-4 justify-center '>
        <button><FaFacebookF/></button>
        <button><FaTwitter/></button>   
        <button><FaInstagram/></button>
        <button><FaLinkedin/></button>
    </div>


    </div>
  )
}
