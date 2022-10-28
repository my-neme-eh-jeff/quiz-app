import React, { useContext } from "react";
import { quizContext } from "../Helpers/contexts";
import "../App.css"

export default function MainMenu() {
  const { gameState, setGameState } = useContext(quizContext);

  return (
    <div className="Menu">
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
