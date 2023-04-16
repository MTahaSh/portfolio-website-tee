import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Start from './components/Start'
import Services from './components/Services'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import NavBar from './components/NavBar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='w-[100%] flex flex-row '>
    <div className=' lg:w-[23%] w-[100%] hidden sm:hidden lg:block'>
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
    </>

  )
}
