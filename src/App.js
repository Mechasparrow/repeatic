import React, { Component } from 'react';
import './App.css';

//GUI components
import Health from './containers/HealthContainer';
import Experience from './containers/ExperienceContainer';

//Page components
import Home from './components/Home';

//routing components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//redux libs
import {store} from './store';

//react-redux
import {Provider} from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    store.dispatch({type: "TEST"});
  }

  render() {
    return (
      <div className="App">
        <Provider store = {store}>
          <div>
            <header className="App-header">
              <h1 className="App-title">Repeatic</h1>
              <div className = "container">
                <Health>
                </Health>
                <Experience>
                </Experience>
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
        </Provider>
      </div>
    );
  }
}

export default App;
