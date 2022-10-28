import React, { useContext } from "react";
import { quizContext } from "../Helpers/contexts";
import "../App.css"



export default function MainMenu() {
  const { gameState, setGameState , username , setUsername} = useContext(quizContext);

  const usernameHandling = () =>{

  }

  return (
    <div className="Menu">
      <div>
        <input 
        type='text' 
        placeholder="Enter username" 
        className="username" 
        onChange={usernameHandling}
        value = {username}>
        </input>
      </div>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
