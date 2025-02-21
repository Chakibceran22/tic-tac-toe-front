import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GameMenu from './components/GameMenu'
import GameBody from './components/GameBody'

function App() {
  const [playerChoice, setPlayerChoice] = useState("x")
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<GameMenu playerChoice={playerChoice} setPlayerChoice={setPlayerChoice}/>}/>
        <Route path='/game' element={<GameBody playerChoice={playerChoice}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
