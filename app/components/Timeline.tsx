import React from 'react'

export default function Timeline() {
  return (
    
    <div className='w-[100%] px-5' id='timeline'>
    
    <h1 className='font-bold text-4xl text-left mb-32 '>EXPERIENCE</h1>
    
    <ul className='flex justify-around md:flex-row flex-col mb-16  w-[100%] h-100 list-square  md:space-x-10 space-x-0'>
    
    <div className='border-l border-gray-200 dark:border-gray-700 '>

    <li className='ml-[15px] mb-20'>
    <div>
        <p className='mb-4 text-gray-400'>March 2023</p>
        <h1 className='font-bold text-lg mb-5'>Tailwind CSS & React JS</h1>
        <p className='w-[85%] text-gray-400'>These two frameworks are used and practiced by making websites.</p>
    </div>



    </li>


<li className='ml-[15px] mb-20'>
    <div>
        <p className='mb-4 text-gray-400'>January 2023</p>
        <h1 className='font-bold text-lg mb-5'>Next js based projects</h1>
        <p className='w-[85%] text-gray-400'>Next js was used to develop some websites including portfolio website.</p>
    </div>



    </li>

<li className='ml-[15px] mb-20'>
    <div>
        <p className='mb-4 text-gray-400'>November 2022</p>
        <h1 className='font-bold text-lg mb-5'>Typescript based projects</h1>
        <p className='w-[90%] text-gray-400'>I made some typescript based projects which can be found on my github profile.</p>
    </div>



    </li>

    </div>

<div className='border-l border-gray-200 dark:border-gray-700 mr-[120px]'>

<li className='ml-[15px] mb-20'>
    <div>
        <p className='mb-4 text-gray-400'>September 2022</p>
        <h1 className='font-bold text-lg mb-5'>Enrolled in WMD by Piaic</h1>
        <p className='w-[90%] text-gray-400'>The course is comprised of 5 quarters and it aims to provide us with latest technical knowledge and practice.</p>
    </div>



    </li>


<li className='ml-[15px] mb-20'>
    <div>
        <p className='mb-4 text-gray-400'>JULY 2022</p>
        <h1 className='font-bold text-lg mb-5'>Spotify Clone</h1>
        <p className='w-[85%] text-gray-400'>Utilized whole month in making a spotify clone and it was almost responsive.</p>
    </div>



    </li>


    <li className='ml-[15px] mb-20 flex-wrap'>
    <div>
        <p className='mb-4 text-gray-400'>JUNE 2022</p>
        <h1 className='font-bold text-lg mb-5'>Mini Projects using HTML CSS & Vanilla JS</h1>
        <p className='w-[85%] text-gray-400'>Replicated 25 mini projects to develop muscle memory</p>
    </div>



    </li>




    </div>




    </ul>

    </div>
  )
}
