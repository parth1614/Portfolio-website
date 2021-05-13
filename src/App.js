import React from 'react'
import './App.css';
import './layout.css';
import NavBar from "./NavBar";



function App() {
  return (
    <div className="App">

      <div className="sidebar">
          <NavBar />
      </div>
      <div className="main-content"></div>

    </div>
  );
}

export default App;
