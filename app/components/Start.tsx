import React from 'react'

export default function Home() {
  return (
    <div className='flex w-[100%]  flex-wrap justify-center items-center h-[100vh] text-center flex-col' id='start'>
      <div className='w-[50%] text-left '>
        <h1 className='text-8xl font-bold mb-9'>Hello,</h1>
        <p className='text-xl text-gray-400'>I am Muhammad Taha Rizwan, web developer from Rawalpindi, Pakistan. I have rich experience in web site design and building and customization.</p>
      </div>

      <div className='flex space-x-5 mt-12 items-left w-[50%]'>
        <button className=' py-3 px-7  border-2 hover:colors hover:bg-transparent border-blue-700 hover:text-blue-800 bg-blue-800 font-bold'>
        <span> PORTFOLIO </span>
          </button>
        <button className='py-3 px-6 border'>HIRE ME</button>
      </div>

     

    </div>
  )
}
