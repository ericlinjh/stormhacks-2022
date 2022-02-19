import './App.css';
import Homepage from './components/Homepage'
import Leaderboard from './components/Leaderboard'
import Game from './components/Game'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/play' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
