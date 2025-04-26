import { useState } from 'react'
import Dice from './Dice';
import Quiz from "./Quiz";
import Scores from "./Scores";
import Confetti from "./Confetti.jsx";
function App() {
  return (
    <>
      <div>
        <Confetti />
        <Dice />
        <Quiz />
        <Scores />
      </div>
    </>
  )
}

export default App
