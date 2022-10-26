import './stylesheets/App.css';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { default as Device } from './pages/Device';
import { default as Vnc } from './pages/Vnc';
import './stylesheets/device.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Device' element={<Device/>}/>
          <Route path='/Device/:id/:name/:Hospital/:DistribuidorHospital/:nombre_distribuidor' element={<Device/>}/>
          <Route path='/Vnc' element={<Vnc />}/>
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
