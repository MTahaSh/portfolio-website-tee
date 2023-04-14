import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import {BsGear} from 'react-icons/bs'
import {RiFileList3Line} from 'react-icons/ri'
import {TbAugmentedReality2, TbBulb} from 'react-icons/tb'
import {SiBlender} from 'react-icons/si'


export default function Services() {
  return (
    <div className='flex flex-col  w-[100%] my-16 ' id='services'>
      <div className='flex text-left '>
      <h1 className='text-4xl text-left mb-16 font-bold'>SERVICES</h1>
      </div>

      <div className='grid grid-cols-3 gap-6 ' >
        
        <div className='flex flex-col mt-6 mb-12'>
          
        <div className=' mb-5  rounded-md text-blue-700 leading-10'>
        <FiMonitor className='text-4xl '/>
        </div>
        
        <h1 className='text-xl font-bold mb-3'>JamStack Development</h1>
        <p className='flex flex-wrap w-[250px] text-gray-400 '>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        
         <div className='flex flex-col mt-6 mb-12'>
          
        <div className=' mb-5   rounded-md text-blue-700 leading-10'>
        <TbBulb className='text-4xl '/>
        </div>
        
        <h1 className='text-xl font-bold mb-3'>UI/UX Design</h1>
        <p className='flex flex-wrap w-[250px] text-gray-400 '>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        
         <div className='flex flex-col mt-6 mb-12'>
          
        <div className=' mb-5   rounded-md text-blue-700 leading-10'>
        <BsGear className='text-4xl '/>
        </div>
        
        <h1 className='text-xl font-bold mb-3'>API Development</h1>
        <p className='flex flex-wrap w-[250px] text-gray-400 '>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        
         <div className='flex flex-col mt-6 mb-12'>
          
        <div className=' mb-5   rounded-md text-blue-700 leading-10'>
        <RiFileList3Line className='text-4xl '/>
        </div>
        
        <h1 className='flex text-xl font-bold mb-3 flex-wrap '>Smart Contract</h1>
        <p className='flex flex-wrap w-[250px] text-gray-400 '>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        
         <div className='flex flex-col mt-6 mb-12'>
          
        <div className='mb-5   rounded-md text-blue-700 leading-10'>
        <TbAugmentedReality2 className='text-4xl '/>
        </div>
        
        <h1 className='text-xl font-bold mb-3'>Metaverse Web Dev</h1>
        <p className='flex flex-wrap w-[250px] text-gray-400 '>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        
         <div className='flex flex-col mt-6 mb-12'>
          
        <div className=' mb-5   rounded-md text-blue-700 leading-10'>
        <SiBlender className='text-4xl '/>
        </div>
        
        <h1 className='text-xl font-bold mb-3'>Blender 3D Asset Creation</h1>
        <p className='flex flex-wrap w-[250px] text-gray-400 '>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        
        



      </div>

    </div>
  )
}
