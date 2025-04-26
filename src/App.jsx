import { useState } from 'react'

import Dice from './Dice';
import Quiz from "./Quiz";
import Scores from "./Scores";
import Confetti from "./Confetti.jsx";

import "./styles/App.css"

function App() {
  return (
    <>
      <div>
        <Confetti />
        <Dice />
        <Quiz />
        <Scores className="scoreboard"/>
      </div>
    </>
  )
}

export default App
