import './stylesheets/App.css';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { Oscan } from './pages/oscan';
import './images/aura.png';
import './stylesheets/oscan.css';
import './images/aura.png'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/oscan' element={<Oscan />}/>
        </Routes>
    </main >
    </div>
  );
}

function Home() {
  return (
      <div className='HomeBox'>
          <h1>Home!</h1>
      </div>
  )
}

export default App;
