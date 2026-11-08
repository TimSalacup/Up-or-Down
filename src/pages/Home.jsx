import { Link } from 'react-router-dom'
import Speedrun from '../components/Speedrun.jsx'

export default function Home() {
  return (
    <main>
        <div
        id='main-wrapper'
        className='flex justify-between mt-24 flex-col items-center gap-8'
        >
        <div id='game-card' className='cursor-not-allowed game-card hover:scale-[1.02] transition-transform duration-300'>
            <div id='game-card--top'>
            <h1 className='text-6xl font-bold mb-4'>
                Daily Puzzle&nbsp;&nbsp;<i className='fa-solid fa-puzzle-piece'></i>
            </h1>
            <h2 className='text-2xl'>
                Take your time, guess the right number...
            </h2>
            </div>
            <button
            id='game-card--play'
            className='bg-black text-[rgb(230,230,230)] py-2 rounded-4xl font-bold cursor-pointer w-[128px] text-xl'
            >
            Play
            </button>
        </div>
        <Link to='/daily_set' className='cursor-pointer w-19/20'>
        <div id='game-card' className='cursor-pointer game-card w-[100%] hover:scale-[1.02] transition-transform duration-300'>
            <div id='game-card--top'>
            <h1 className='text-6xl font-bold mb-4'>
                Daily Set&nbsp;&nbsp;<i className='fa-solid fa-calendar'></i>
            </h1>
            <h2 className='text-2xl'>5 Questions, 5 guesses each...</h2>
            </div>
            <button
            id='game-card--play'
            className='bg-black text-[rgb(230,230,230)] py-2 rounded-4xl font-bold cursor-pointer w-[128px] text-xl'
            >
            Play
            </button>
        </div>
        </Link>
    <Speedrun />
        </div>
    </main>
  )
}