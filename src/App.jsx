import './App.css'
import Speedrun from './components/speedrun.jsx'
import Nav from './components/Nav.jsx'
import DailySet from './pages/DailySet.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

const DropDown = () => {
  document.getElementById('nav-dropdown').classList.remove('hide')
  document.getElementById('play-icon').classList.add('rotate-90')
}

const HideDropDown = () => {
  document.getElementById('nav-dropdown').classList.add('hide')
  document.getElementById('play-icon').classList.remove('rotate-90')
}

export default function App () {
  return (
    <>
      <div id='app-wrapper' className='xl:w-[1000px] mx-auto'>
      <Nav DropDown={DropDown} HideDropDown={HideDropDown} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily_set" element={<DailySet />} />
      </Routes>
        
      </div>
      <footer className='flex justify-center items-end mt-24 bg-black w-[100vw] h-[30vh] p-8'>
        <h2 className='text-[rgb(230,230,230)]'>© 2024 Higher or Lower</h2>
      </footer>
    </>
  )
}
