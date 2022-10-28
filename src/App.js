import React, { useContext, useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { quizContext } from "./Helpers/contexts";

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score,setScore] = useState(0)
  const [username,setUsername] = useState("")

  return (
    <div className="App">
      <h1 className="Heading">Quiz App</h1>

      <quizContext.Provider value = {{gameState,setGameState, score, setScore,username,setUsername}}>
      {gameState==='menu'&& <MainMenu/>}
      {gameState==='quiz'&& <Quiz/>}
      {gameState==='endScreen'&& <EndScreen/>}
      </quizContext.Provider>

    </div>
  )
}

export default App;
