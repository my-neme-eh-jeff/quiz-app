import React, { useState } from 'react'
import { questions } from '../Helpers/questionsBank'
import { quizContext } from '../Helpers/contexts';
import { useContext } from 'react';

export default function Quiz() {
  const {score,setScore,setGameState} = useContext(quizContext)
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [optionChosen,setOptionChosen] = useState("")

  const nextQuestion =() =>{
    if(questions[currentQuestion].answer==optionChosen){
        setScore(score+1)
    }
    setCurrentQuestion(currentQuestion+1)
  }

  const finishQuiz = () =>{
    if(questions[currentQuestion].answer==optionChosen){
      setScore(score+1)
    }
    setGameState("endScreen")
  }

  const prevQuestion = () =>{
    setCurrentQuestion(currentQuestion-1)

  }
  
  var btnGroupClasses = '' 
  const dealingWithOptions = (op) =>{
    setOptionChosen(op);
    var btnGroupClasses= ('selected')
  }
  // why cant we directly call dealingWithOptions("A") on click of button???
  return (
    <div className='Quiz'>
      <h1>{questions[currentQuestion].Q}</h1>
       <div>
        <button className={btnGroupClasses} onClick={() => dealingWithOptions("A")}>{questions[currentQuestion].optionA}</button>
        <button className={btnGroupClasses} onClick={() => dealingWithOptions("B")}>{questions[currentQuestion].optionB}</button>
        <button className={btnGroupClasses} onClick={() => dealingWithOptions("C")}>{questions[currentQuestion].optionC}</button>
        <button className={btnGroupClasses} onClick={() => dealingWithOptions("D")}>{questions[currentQuestion].optionD}</button>
      </div>
      {currentQuestion== questions.length-1 ? <button className='FinishButton' onClick={finishQuiz}> Finish Quiz</button> 
      :currentQuestion== 0?<button className='NextQButton' onClick={nextQuestion}> Next question</button>
      :<div>
        <button className='NextQButton' onClick={nextQuestion}> Next question</button>
        <button className='PrevQButton' onClick={prevQuestion}> Previous question</button> 
      </div> }  
    </div>
  )
}
