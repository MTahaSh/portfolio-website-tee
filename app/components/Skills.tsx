import React from 'react'

export default function Skills() {
  return (
    <div className='flex flex-col  justify-center items-left  md:mt-64 mt-16 mb-64 pl-5 pr-14' id='skills'>
        <div className='w-[100%] text-4xl mb-16 font-bold'><h1>SKILLS</h1></div>

        <div className='flex flex-row md:justify-between flex-wrap  leading-6'>

        <div className='flex md:flex-row flex-col max-w-[100%] min-w-[100%] mt-8 md:mb-24 mx-0 md:space-x-6 sace-x-0  '>

        <div className='md:min-w-[50%]  md:max-w-[50%] md:mb-0 mb-16 '>
            <div className='flex flex-row font-medium text-base min-w-[100%] max-w-[100%] justify-between h-7 '>
            <label htmlFor="Skills">Typescript</label>
            <label  className='text-right' htmlFor="skills">90%</label>
            </div>
            <div className='max-w-[100%] min-w-[100%] h-2.5 rounded-full bg-gray-300'>
                <div className='bg-blue-900 max-w-[90%] min-w-[40%] h-2.5 rounded-full'></div>
            </div>

        </div>

<div className='md:min-w-[50%] md:max-w-[50%] md:mb-0 mb-16'>
            <div className='flex flex-row  font-medium text-base w-[100%] justify-between h-7  '>
            <label htmlFor="Skills">Tailwind CSS</label>
            <label  className='text-right' htmlFor="skills">80%</label>
            </div>
            <div className='w-[100%] h-2.5 rounded-full bg-gray-300'>
                <div className='bg-blue-900 rounded-full w-[80%] h-2.5'></div>
            </div>

        </div>

        </div>


<div className='flex md:flex-row flex-col  min-w-[100%] max-h-[100%]  md:space-x-6 space-x-0'> 
<div className='md:min-w-[50%] md:max-w-[50%] md:mb-0 mb-16'>
            <div className='flex flex-row  font-medium text-base w-[100%] justify-between h-7   '>
            <label htmlFor="Skills">Next Js</label>
            <label  className='text-right' htmlFor="skills">70%</label>
            </div>
            <div className='w-[100%] h-2.5 bg-gray-300 rounded-full'>
                <div className='bg-blue-900 w-[70%] h-2.5 rounded-full'></div>
            </div>

        </div>

<div className='md:min-w-[50%] md:max-w-[50%] md:mb-0 mb-4'>
            <div className='flex flex-row  font-medium text-base w-[100%] justify-between h-7  '>
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
