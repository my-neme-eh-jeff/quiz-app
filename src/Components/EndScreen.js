import React from 'react'
import { quizContext } from '../Helpers/contexts';
import { useContext } from 'react';
import { questions } from '../Helpers/questionsBank'


export default function EndScreen() {
  const {score,setScore, setGameState} = useContext(quizContext)
  
  const restartQuiz =() =>{
    setScore(0)
    setGameState("menu")
  }

  return (
    <div className='EndScreen'>
      <h1>Quiz over!</h1>
      <h2>Your score is {score} / {questions.length}</h2>
      <button onClick={restartQuiz}>Restart quiz</button>
    </div>
  )
}
