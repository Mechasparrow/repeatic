import React, { Component } from 'react';
import './App.css';

import Health from './components/Health';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Repeatic</h1>
          <div className = "container">
            <Health></Health>
            <Experience></Experience>
          </div>
        </header>
        <div className = "Page">
          
        </div>
      </div>
    );
  }
}

export default App;
