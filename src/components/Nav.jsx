import { Link } from 'react-router-dom'

export default function Speedrun ({DropDown, HideDropDown}) {
  return (
    <nav>
          <div
            id='nav-wrapper'
            className='relative flex justify-between py-2 z-10'
          >
            <div id='nav-left' className='flex items-center gap-10'>
              <Link to='/' className='text-3xl font-bold text-white'>

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
              </Link>
              <div
                className='relative'
                onMouseEnter={() => {DropDown()}}
                onMouseLeave={() => {HideDropDown()}}
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
                  className='-z-10 absolute flex flex-col content-center items-center gap-4 bg-[rgb(230,230,230)] px-4 py-2 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transform -translate-x-1/2 left-1/2 top-[calc(100%+16px)] transition-all duration-300 hide w-[160px] text-center'
                >
                  <Link to ='/' className='text-black cursor-not-allowed'>
                   Daily Puzzle
                  </Link>
                  <Link to ='/daily_set' className='text-black'>
                    Daily Set
                  </Link>
                  <Link to ='/' className='text-black cursor-not-allowed'>
                    Speedrun
                  </Link>
                </div>
              </div>
              <h2 className='font-extrabold text-[rgb(230,230,230)]'>|</h2>
              <h2 className='cursor-not-allowed font-bold text-[rgb(230,230,230)] rounded-2xl px-[12px] py-[4px] hover:bg-[rgba(180,180,180,0.2)] transition-colors duration-500'>
                How To Play
              </h2>
            </div>
            <div id='nav-right' className='flex items-center gap-6'>
              <h2>
                <i className='fa-solid fa-gear cursor-not-allowed text-2xl text-[rgb(230,230,230)] hover:rotate-180 transition-transform duration-300'></i>
              </h2>
              <h2 className='cursor-not-allowed px-[12px] py-[4px] bg-[rgb(230,230,230)] text-black rounded-2xl font-bold hover:bg-[rgba(230,230,230,0.8)] transition-colors duration-300'>
                Sign Up
              </h2>
            </div>
          </div>
        </nav>
  )
}

