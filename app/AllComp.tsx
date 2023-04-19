import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Start from './components/Start'
import Services from './components/Services'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function AllComp(param:any) {
  
    const isOpen = param.isOpen;


    return (

    <div>
        
    <div className={`w-[100%] flex flex-row ${isOpen? "space-x-10":"space-x-0"}`}>
    <div className={`lg:w-[23%] w-[100%]  hidden sm:hidden lg:flex`}>
    <Header/>
    </div>
    <div className='lg:w-[77%] w-[100%] flex flex-col px-4'>
    <NavBar/>
    <Start/>
    <Services/>
    <Skills/>
    <Timeline/>
    <Gallery/>
    <Contact/>
    </div>
    </div>
    


    </div>
  )
}
