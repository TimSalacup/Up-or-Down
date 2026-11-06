import moviesImage from '../assets/movies.jpg'

export default function Speedrun () {
  return (
    <div className='game-card relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300'>
      {/* Right side: Diagonal image */}
      <img
        src={moviesImage}
        alt='Movie theme'
        className='
          absolute inset-0 w-full h-full object-cover
          [clip-path:polygon(67%_0,100%_0,100%_100%,46%_100%)] opacity-80'
      />

      {/* Left side: Content */}
      <div className='flex flex-col justify-between h-full'>
        <div>
          <h1 className='text-6xl font-bold mb-4'>Speedrun&nbsp;&nbsp;⏱</h1>

          <p className='text-2xl'>60 seconds, guess them all...</p>
        </div>
        <div>
          <h2 className='font-bold mt-4'>Today's Theme: Movies</h2>
          <button
            id='game-card--play'
            className='bg-black text-[rgb(230,230,230)] py-2 rounded-4xl font-bold cursor-pointer w-[128px] text-xl mt-4'
          >
            Play
          </button>
        </div>
      </div>
    </div>
  )
}
