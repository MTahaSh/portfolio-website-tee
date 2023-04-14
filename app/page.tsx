import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Start from './components/Start'
import Services from './components/Services'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Contact from './components/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='w-[100%] flex flex-row overflow-hidden'>
    <div className=' w-[23%] overflow-hidden'>
    <Header/>
    </div>
    <div className='w-[77%] flex flex-col'>
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
