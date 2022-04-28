import './App.css';
import Homepage from './components/Homepage'
import Leaderboard from './components/Leaderboard'
import Game from './components/Game'
import Login from './components/Login'
import {HashRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/play' element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
