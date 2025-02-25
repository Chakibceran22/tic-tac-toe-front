
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GameMenu from './components/GameMenu'
import GameBody from './components/GameBody'
import GameBoard from './components/OnlineGameBody'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<GameMenu />}/>
        <Route path='/game' element={<GameBody />}/>
        <Route path='/game-player' element={<GameBoard />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
