import React from 'react'
import { BsTelephone } from 'react-icons/Bs'
import {HiMailOpen} from 'react-icons/Hi'
import { ImLocation } from 'react-icons/Im'

export default function () {
  return (
    <div className='w-full pr-2 flex-col' id='contact'>
        <h1 className='text-4xl font-bold my-16'>CONTACT</h1>
        <div className='flex justify-around my-16'
        >
            <div className='flex flex-col items-center text-xl leading-10'>
              <BsTelephone className='text-3xl text-blue-700'/>
               <h1 className='font-bold'>Call Us</h1>
               <p className='text-sm text-gray-300'>+92 333-1023612</p>
              </div>
            
            <div className='flex flex-col items-center text-xl leading-10'>
              <HiMailOpen className='text-3xl text-blue-700'/>
               <h1 className='font-bold'>Email Us</h1>
               <p className='text-sm text-gray-300'>hello@domain.website</p>
              </div>
            
            <div className='flex flex-col items-center text-xl leading-10'>
              <ImLocation className='text-3xl text-blue-700'/>
               <h1 className='font-bold'>Visit Us</h1>
               <p className='text-sm text-gray-300'>Rawalpindi, Pakistan</p>
              </div>
              
            
        </div>

    <div className='flex flex-row justify-between px-6 mb-10'>
        <input className='bg-transparent border border-gray-300 pl-8 pr-20 py-2  placeholder:text-gray-400' type="text" placeholder='Your Name'/>
        <input className='bg-transparent border border-gray-300 pl-8 pr-20 py-2  placeholder:text-gray-400' type="text" placeholder='Email Address'/>
        <input  className='bg-transparent border border-gray-300 pl-8 pr-20 py-2  placeholder:text-gray-400' type="text" placeholder='Subject'/>
    </div>

    <div className="relative mb-8 xl:w-96 px-6" data-te-input-wrapper-init>
  <textarea
    className="peer block min-h-[auto] w-full  rounded border border-gray-300 bg-transparent  pl-3 py-[0.32rem] 
    placeholder:text-gray-300 leading-[1.6] "
    id="exampleFormControlTextarea1"
    placeholder="Your message..."></textarea>
  
</div>

    <div className='flex flex-row items-center justify-center my-16 '><button className=' bg-blue-700 px-72 py-4 font-bold'>SUBMIT MESSAGE</button></div>


    </div>
  )
}
