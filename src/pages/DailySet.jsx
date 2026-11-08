import { useEffect, useState } from 'react'
import Feedback from '../components/Feedback.jsx'

export default function DailySet () {

const [QuestionBank, setQuestionBank] = useState([])
const [questionNumber, setQuestionNumber] = useState(1)
const [attempts, setAttempts] = useState(0)
const [currentQuestion, setCurrentQuestion] = useState(
  QuestionBank[questionNumber - 1]?.text
)
const [guessValues, setGuessValues] = useState([])

useEffect(() => {
  getRandomFacts()
}, [])

  async function getRandomFacts () {
    const requests = Array.from({ length: 5 }, () =>
      fetch('http://www.number-trivia.com/random/trivia?json', {
        cache: 'no-store'
      }).then(response => {
        if (!response.ok) {
          throw new Error('API request failed')
        }

        return response.json()
      })
    )
    const facts = await Promise.all(requests)
    setQuestionBank(facts);
  }


  useEffect(() => {
    setCurrentQuestion(QuestionBank[questionNumber - 1]?.text.slice(QuestionBank[questionNumber - 1]?.text.indexOf("the"))),
      [questionNumber]
  })

  function guess () {
    const guessInput = document.getElementById('guess')
    let guessValue = parseFloat(guessInput.value)
    const failureMessage = document.getElementById('failureMessage')

    if (guessValue === QuestionBank[questionNumber - 1].number) {
      setAttempts(0)
      setGuessValues([])
      guessInput.value = ''
      setQuestionNumber(prev => prev + 1)
    } else {
      if (
        attempts === 4 &&
        guessValue !== QuestionBank[questionNumber - 1].number
      ) {
        setGuessValues(prev => [...prev, guessValue])
        setAttempts(prev => prev + 1)
        failureMessage.textContent += `You have reached the maximum number of attempts. The correct answer was: ${
          QuestionBank[questionNumber - 1].number
        }`
        document.getElementById('failed-button').classList.remove('hidden')
      } else {
        setGuessValues(prev => [...prev, guessValue])
        setAttempts(prev => prev + 1)
        guessInput.value = ''
      }
    }
  }

  return (
    <main>
      <div
        id='app-wrapper'
        className='xl:w-[1000px] mx-auto flex flex-col items-center'
      >
        <div className='game-card mt-16'>
          <label
            htmlFor='guess'
            className='block text-center font-semibold mb-3'
          >
            Question {questionNumber} out of 5
          </label>
          <h1 className='text-3xl font-bold text-center mb-6'>
            {currentQuestion}
          </h1>
          <span id='failureMessage' className='text-center mb-3'></span>
          <div className='flex gap-3'>
            <input
              id='guess'
              type='text'
              inputMode='decimal'
              placeholder='Enter a number...'
              className='
                w-full min-w-0
                bg-white text-black
                border-2 border-gray-300
                rounded-xl px-5 py-3
                text-2xl text-center font-bold
                tabular-nums
                outline-none
                focus:border-blue-500
                transition-colors duration-200
                '
            />

            <button
              type='button'
              className='
                bg-black text-white
                px-6 rounded-xl font-bold
                cursor-pointer
                hover:bg-gray-800
                transition-colors
                '
              onClick={() => {
                guess()
              }}
            >
              Guess
            </button>
          </div>
        </div>
        <div id='Daily-Set__bottom' className='mt-4 border-black w-19/20'>
          {guessValues.map((value, index) => {
            return (
              <Feedback
                key={index}
                attemptNumber={attempts}
                answer={QuestionBank[questionNumber - 1]?.number}
                guessValue={value}
                index={index}
              />
            )
          })}
        </div>
        <button
          id='failed-button'
          className='hidden bg-black text-white px-6 rounded-xl font-bold cursor-pointer hover:bg-gray-800 transition-colors'
          onClick={() => {
            setAttempts(0)
            setQuestionNumber(prev => prev + 1)
            document.getElementById('failed-button').classList.add('hidden')
            document.getElementById('failureMessage').textContent = ''
            setCurrentQuestion(QuestionBank[questionNumber].text)
            document.getElementById('guess').value = ''
            document.getElementById('Daily-Set__bottom').innerHTML = ''
            guessInput.value = ''
          }}
        >
          Next Question
        </button>
      </div>
    </main>
  )
}
