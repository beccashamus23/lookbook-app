import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './NavBar'
import Nashville from './places/Nashville'
import Miami from './places/Miami'
import NYC from './places/NYC'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="nav_bar">
          <NavBar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Nashville" element={<Nashville/>} />
                <Route path="/Nyc" element={<NYC/>} />
                <Route path="/Miami" element={<Miami/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;


/*<div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>*/