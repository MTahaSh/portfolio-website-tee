import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import {HiMailOpen} from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'

export default function Contact() {
  return (
    <div className='w-full pr-2 flex-col' id='contact'>
        <h1 className='text-4xl font-bold my-16'>CONTACT</h1>
        <div className='flex  md:justify-around md:flex-row flex-col md:space-y-0 space-y-16 my-16'
        >
            <div className='flex flex-col items-center text-xl leading-10'>
              <BsTelephone className='md:text-3xl text-4xl text-blue-700'/>
               <h1 className='font-bold'>Call Us</h1>
               <p className='text-sm text-gray-300'>+92 333-1023612</p>
              </div>
            
            <div className='flex flex-col items-center text-xl leading-10'>
              <HiMailOpen className='md:text-3xl text-4xl text-blue-700'/>
               <h1 className='font-bold'>Email Us</h1>
               <p className='text-sm text-gray-300'>hello@domain.website</p>
              </div>
            
            <div className='flex flex-col items-center text-xl leading-10'>
              <ImLocation className='md:text-3xl text-4xl text-blue-700'/>
               <h1 className='font-bold'>Visit Us</h1>
               <p className='text-sm text-gray-300'>Rawalpindi, Pakistan</p>
              </div>
              
            
        </div>

    <div className='flex md:flex-row flex-col md:justify-between mx-auto mb-10 md:space-x-5 space-x-0 md:space-y-0 space-y-8  '>
        <input className='bg-transparent border border-gray-300 md:px-5 px-6 py-2  placeholder:text-gray-400' type="text" placeholder='Your Name'/>
        <input className='bg-transparent border border-gray-300  md:px-5 px-6 py-2  placeholder:text-gray-400' type="text" placeholder='Email Address'/>
        <input  className='bg-transparent border border-gray-300 md:px-5 px-6 py-2  placeholder:text-gray-400' type="text" placeholder='Subject'/>
    </div>

    <div className="relative mb-8 xl:w-96 " data-te-input-wrapper-init>
  <textarea
    className="peer block min-h-[auto] w-full  rounded border border-gray-300 bg-transparent  pl-3 py-[0.32rem] 
    placeholder:text-gray-300 leading-[1.6] "
    id="exampleFormControlTextarea1"
    placeholder="Your message..."></textarea>
  
</div>

    <div className='flex flex-col items-center justify-center my-16 '>
      <button className=' bg-blue-700 md:px-72 px-20 grow-1 mx-auto md:py-4 py-4 font-bold before:content-[""] before:w-full before:h-full before:absolute before:top-full before:left-0 before:bg-black overflow-hidden before:translate-y-0 before:transition-transform  relative before:hover:bg-black before:hover:translate-y-[-100%] hover:text-blue-800 border-2 border-blue-700'>
       <span className='relative'> SUBMIT MESSAGE </span>
        </button>
      </div>


    </div>
  )
}
