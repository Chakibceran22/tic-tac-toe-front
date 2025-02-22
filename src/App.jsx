
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GameMenu from './components/GameMenu'
import GameBody from './components/GameBody'
import GameWin from './components/GameWin'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<GameMenu />}/>
        <Route path='/game' element={<GameBody />}/>
        <Route path='/win' element={<GameWin player={'x'} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
