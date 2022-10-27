import './stylesheets/App.css';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { default as Device } from './pages/Device';
import './stylesheets/device.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Device' element={<Device/>}/>
          <Route path='/Device/:id/:name/:Hospital/:DistribuidorHospital/:nombre_distribuidor' element={<Device/>}/>
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
