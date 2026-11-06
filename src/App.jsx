import './App.css'

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
        <nav>
          <div
            id='nav-wrapper'
            className='relative flex justify-between py-2 z-10'
          >
            <div id='nav-left' className='flex items-center gap-10'>
              <h1 className='group text-xl font-bold cursor-pointer text-white'>
                <i className='fa-solid fa-up-down text-xl text-[rgb(230,230,230)]'></i>&nbsp;&nbsp;
                {/* HIGHER — Green, bottom to top */}
                <span className='relative inline-block'>
                  <span>Higher</span>
                  <span
                    aria-hidden='true'
                    className='
        absolute inset-0 text-blue-300
        [clip-path:inset(100%_0_0_0)]
        group-hover:[clip-path:inset(0_0_0_0)]
        transition-[clip-path] duration-500 ease-in-out
      '
                  >
                    Higher
                  </span>
                </span>

                <span> or </span>

                {/* LOWER — Red, top to bottom, delayed */}
                <span className='relative inline-block'>
                  <span>Lower</span>
                  <span
                    aria-hidden='true'
                    className='
        absolute inset-0 text-indigo-400
        [clip-path:inset(0_0_100%_0)]
        group-hover:[clip-path:inset(0_0_0_0)]
        transition-[clip-path] duration-500 delay-150 ease-in-out
      '
                  >
                    Lower
                  </span>
                </span>
              </h1>
              <div
                className='relative'
                onMouseEnter={() => DropDown()}
                onMouseLeave={() => HideDropDown()}
              >
                <h2 className='cursor-pointer font-bold text-[rgb(230,230,230)] z-10 rounded-2xl px-[12px] py-[4px] hover:bg-[rgba(180,180,180,0.2)] transition-colors duration-500'>
                  Play
                  <i
                    id='play-icon'
                    className='fa-solid fa-circle-chevron-right ml-2 transition-all duration-300'
                  ></i>
                </h2>
                <div
                  id='nav-dropdown'
                  className='-z-10 absolute flex flex-col content-center items-center gap-4 bg-[rgb(230,230,230)] px-4 py-2 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transform -translate-x-1/2 left-1/2 top-[calc(100%+16px)] transition-all duration-300 hide'
                >
                  <a href='/' className='text-black'>
                    Puzzle
                  </a>
                  <a href='/' className='text-black'>
                    Daily
                  </a>
                  <a href='/' className='text-black'>
                    Speedrun
                  </a>
                </div>
              </div>
              <h2 className='font-extrabold text-[rgb(230,230,230)]'>|</h2>
              <h2 className='cursor-pointer font-bold text-[rgb(230,230,230)] rounded-2xl px-[12px] py-[4px] hover:bg-[rgba(180,180,180,0.2)] transition-colors duration-500'>
                How To Play
              </h2>
            </div>
            <div id='nav-right' className='flex items-center gap-6'>
              <h2>
                <i className='fa-solid fa-gear cursor-pointer text-2xl text-[rgb(230,230,230)] hover:rotate-180 transition-transform duration-300'></i>
              </h2>
              <h2 className='cursor-pointer px-[12px] py-[4px] bg-[rgb(230,230,230)] text-black rounded-2xl font-bold hover:bg-[rgba(230,230,230,0.8)] transition-colors duration-300'>
                Sign Up
              </h2>
            </div>
          </div>
        </nav>
        <main>
          <div
            id='main-wrapper'
            className='flex justify-between mt-24 flex-col items-center gap-8'
          >
            <div id='game-card' className='game-card'>
              <div id='game-card--top'>
                <h1 className='text-6xl font-bold mb-4'>
                  Daily Puzzle <i className='fa-solid fa-puzzle-piece'></i>
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
            <div id='game-card' className='game-card'>
              <div id='game-card--top'>
                <h1 className='text-6xl font-bold mb-4'>
                  Daily Set <i className='fa-solid fa-calendar'></i>
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
            <div id='game-card' className='game-card'>
              <div id='game-card--top'>
                <h1 className='text-6xl font-bold mb-4'>
                  Speedrun <i class='fa-solid fa-stopwatch'></i>
                </h1>
                <h2 className='text-2xl'>60 seconds, guess them all...</h2>
              </div>
              <button
                id='game-card--play'
                className='bg-black text-[rgb(230,230,230)] py-2 rounded-4xl font-bold cursor-pointer w-[128px] text-xl'
              >
                Play
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer className='flex justify-center items-end mt-24 bg-black w-[100vw] h-[30vh] p-8'>
        <h2 className='text-[rgb(230,230,230)]'>© 2024 Higher or Lower</h2>
      </footer>
    </>
  )
}
