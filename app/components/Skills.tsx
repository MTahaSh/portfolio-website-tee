import React from 'react'

export default function Skills() {
  return (
    <div className='flex flex-col justify-center items-left  mt-64 mb-64 pr-28' id='skills'>
        <div className='w-[100%] text-4xl mb-16 font-bold'><h1>SKILLS</h1></div>

        <div className='flex flex-row justify-between flex-wrap '>

        <div className='flex max-w-[100%] min-w-[100%] mt-8 mb-24 mx-0 space-x-6'>

        <div className='min-w-[50%] max-w-[50%] '>
            <div className='flex flex-row font-medium text-base min-w-[100%] max-w-[100%] justify-between h-7 '>
            <label htmlFor="Skills">Typescript</label>
            <label  className='text-right' htmlFor="skills">90%</label>
            </div>
            <div className='max-w-[100%] min-w-[100%] h-2.5 rounded-full bg-gray-300'>
                <div className='bg-blue-900 max-w-[90%] min-w-[40%] h-2.5 rounded-full'></div>
            </div>

        </div>

<div className='min-w-[50%] max-w-[50%]'>
            <div className='flex flex-row  font-medium text-base w-[100%] justify-between h-7 '>
            <label htmlFor="Skills">Tailwind CSS</label>
            <label  className='text-right' htmlFor="skills">80%</label>
            </div>
            <div className='w-[100%] h-2.5 rounded-full bg-gray-300'>
                <div className='bg-blue-900 rounded-full w-[80%] h-2.5'></div>
            </div>

        </div>

        </div>


<div className='flex min-w-[100%] max-h-[100%] space-x-6'> 
<div className='min-w-[50%] max-w-[50%] '>
            <div className='flex flex-row font-medium text-base w-[100%] justify-between h-7 '>
            <label htmlFor="Skills">Next Js</label>
            <label  className='text-right' htmlFor="skills">70%</label>
            </div>
            <div className='w-[100%] h-2.5 bg-gray-300 rounded-full'>
                <div className='bg-blue-900 w-[70%] h-2.5 rounded-full'></div>
            </div>

        </div>

<div className='min-w-[50%] max-w-[50%]'>
            <div className='flex flex-row font-medium text-base w-[100%] justify-between h-7 '>
            <label htmlFor="Skills">UI/UX Design</label>
            <label  className='text-right' htmlFor="skills">85%</label>
            </div>
            <div className='w-[100%] h-2.5 bg-gray-300 rounded-full'>
                <div className='bg-blue-900 w-[85%] h-2.5 rounded-full'></div>
            </div>

        </div>

        </div>

        </div>

    </div>
  )
}
