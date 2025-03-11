// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Make sure this path is correct

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;