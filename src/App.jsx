import { useState } from 'react'

import Dice from './Dice';
import Quiz from "./Quiz";
import Scores from "./Scores";
import Confetti from "./Confetti";
import Notes from "./Notes";
import Export from "./Export"

import "./styles/App.css"
import "./styles/Export.css"

function App() {
  return (
    <>
      <div>
        <Export />
        <Confetti />
        <Dice />
        <Quiz />
        <Scores className="scoreboard"/>
        <Notes />
      </div>
    </>
  )
}

export default App
