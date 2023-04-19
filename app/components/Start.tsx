import React from 'react'

export default function Home() {
  return (
    <div className='flex w-[100%]  shrink-0 flex-wrap justify-center items-center h-[100vh] text-left lg:text-center flex-col' id='start'>
      <div className=' lg:w-1/2 sm:w-1/2 w-full  text-left '>
        <h1 className='md:text-8xl text-6xl  font-bold mb-9'>Hello,</h1>
        <p className='lg:text-xl text-md sm:w-full w-[80%] text-gray-400'>I am Muhammad Taha Rizwan, web developer from Rawalpindi, Pakistan. I have rich experience in web site design and building and customization.</p>
      </div>

      <div className='flex space-x-5 mt-12 items-left w-full sm:w-[50%]'>
        <button className=' py-3 px-7  border-2 hover:colors relative overflow-hidden border-blue-700 hover:text-blue-800 bg-blue-800 font-bold before:content-[""] before:w-full before:h-full before:absolute before:top-full before:left-0 before:bg-black before:translate-y-0 before:transition-transform hover:before:bg-black hover:before:translate-y-[-100%] hover:before:text-black'>
          <span className='before:hover:text-blue-700 relative'> PORTFOLIO </span>
          </button>
        <button className='py-3 px-6 border-2 before:content-[""] hover:text-blue-800 font-bold  before:w-full before:h-full before:bg-white before:absolute before:top-full before:left-0 before:translate-y-0 before:transition-transform hover:before:bg-white relative hover:before:translate-y-[-100%] hover:before:text-white overflow-hidden'>
          <span className='before:hover:text-blue-700 relative'> HIRE ME </span>
          </button>
      </div>

     

    </div>
  )
}
