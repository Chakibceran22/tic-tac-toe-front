import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GameMenu from './components/GameMenu'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<GameMenu/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
