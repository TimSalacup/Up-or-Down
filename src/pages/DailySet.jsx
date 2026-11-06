import Nav from '../components/Nav';

export default function DailySet() {
  return (
    <main>
        <div id="app-wrapper" className="xl:w-[1000px] mx-auto">
        <Nav />
        <h1 className="text-3xl font-bold">
                Daily Set&nbsp;&nbsp;<i className='fa-solid fa-calendar'></i>
         </h1>
        <p>Guess today's number!</p>
        </div>
    </main>
  )
}