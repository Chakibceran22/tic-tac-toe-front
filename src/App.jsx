
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GameMenu from './components/GameMenu'
import GameBody from './components/GameBody'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<GameMenu />}/>
        <Route path='/game' element={<GameBody />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
