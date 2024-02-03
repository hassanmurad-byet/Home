import React from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar';
import Main from './Component/Main';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
       
        <div className='allmaincompo'>
        <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
