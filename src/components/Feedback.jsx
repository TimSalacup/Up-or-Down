export default function Feedback({ attemptNumber, answer, guessValue, index }) {

  function giveFeedback() {
        if (attemptNumber === 0) return null;
        if (guessValue > answer) {
            return (
                <>
                <p>Attempt {index + 1} out of 5</p>
                <span className="text-red-500 "><span className="font-bold text-black">{guessValue}</span>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angles-up transform -rotate-180"></i></span>
                </>
            )       
        }
        else if (guessValue < answer) {
            return (
                <>
                <p>Attempt {index + 1} out of 5</p>
                <span className="text-green-500"><span className="font-bold text-black">{guessValue}</span>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angles-up"></i></span>
                </>
            )
        }
        else return null;
    }
    return (
    <div id='feedback_card' className="flex justify-between mt-2 w-full rounded-xl bg-gray-100 p-4 border border-black">
        {giveFeedback()}
    </div>
  )
}