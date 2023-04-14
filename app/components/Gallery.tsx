import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Gallery() {
  return (

    <div className='my-16' id='works'>
      <h1 className='text-4xl font-bold my-10'>WORKS</h1>  


<div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8">
    
    <div className='border pr-2 pb-64 pl-2 '>
        <h1 className='font-bold text-xl'>Panaverse DAO Website</h1>
        <hr />
        <p className='leading-7'>The panaverse dao website's front-end is developed using next js and tailwind CSS. <Link className='text-blue-400' target='_blank' href={"https://github.com/MTahaSh/panaverse-dao-tailwind-tee"}>Learn More</Link></p>
        
    </div>
    
<div className='border pr-2 pb-64 pl-2 '>
        <h1 className='font-bold text-xl'>Currency Exchange using Typescript</h1>
        <hr />
        <p className='leading-7'>This project has been developed using typescript. A typescript is a framework used to provide typesafety for the values in javascript. Moreover, node package manager is used for uploading and downloading of the project. <Link className='text-blue-400' target='_blank' href={"https://github.com/MTahaSh/currency-exchange-using-ts"}>Learn More</Link></p>
    </div>
    
<div className='border pr-2 pb-64 pl-2 '>
        <h1 className='font-bold text-xl'>To-Do List using Typescript</h1>
        <hr />
        <p className='leading-7'>This project is developed using typescript and there is a unique logic used for developing a to-do list. <Link className='text-blue-400' target='_blank' href={"https://github.com/MTahaSh/to-do-list-using-ts"}>Learn More</Link></p>
    </div>
    
<div className='border pr-2 pb-64 pl-2 '>
        <h1 className='font-bold text-xl'>Guessing Game using Typescript</h1>
        <hr />
        <p>The following game is developed using typescript with few dependencies such as inquirer, chalk and chalk-animation. <Link className='text-blue-400' target='_blank' href={"https://github.com/MTahaSh/Guessing-Game-using-Typescript"}>Learn More</Link> </p>
    </div>
    
<div className='border pr-2 pb-64 pl-2 '>
        <h1 className='font-bold text-xl'>Price tag UI</h1>
        <hr />
        <p>This following price tag ui is created using chakra Ui framework and next js. <Link className='text-blue-400' target='_blank' href={"https://github.com/MTahaSh/price-tag-ui-next-tee"}>Learn More</Link> </p>
    </div>
    
<div className='border pr-2 pb-64 pl-2 '>
        <h1 className='font-bold text-xl'>Spotify Clone</h1>
        <hr />
        <p>This following spotify clone is not completely but almost responsive. It was developed using html, css and javascript vanilla. <Link className='text-blue-400' target='_blank' href={"https://github.com/MTahaSh/Spotify-Clone-Almost-Responsive-"}>Learn More</Link></p>
    </div>
    



</div>

    </div>

    

    )
    
}