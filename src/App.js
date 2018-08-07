import React, { Component } from 'react';
import './App.css';

//GUI components
import Health from './components/Health';
import Experience from './components/Experience';

//Page components
import Home from './components/Home';

//routing components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


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
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
