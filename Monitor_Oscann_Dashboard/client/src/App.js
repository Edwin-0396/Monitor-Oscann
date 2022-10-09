import './stylesheets/App.css';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { default as Oscann } from './pages/Oscann';
import './images/aura.png';
import './stylesheets/oscan.css';
import './images/aura.png'

function App() {
  return (
    <div className="App">
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Oscann' element={<Oscann />}/>
          <Route path='/Oscann/:id/:name/:Hospital/:DistribuidorHospital/:nombre_distribuidor' element={<Oscann />}/>
        </Routes>
    </div>
  );
}

function Home() {
  return (
      <div className='HomeBox'>
      </div>
  )
}

export default App;
