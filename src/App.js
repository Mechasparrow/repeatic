import React, { Component } from "react";
import "./App.css";

//GUI components
import Health from "./containers/HealthContainer";
import Experience from "./containers/ExperienceContainer";
import LevelDisplay from "./containers/LevelDisplayContainer";

//Page components
import Home from "./containers/HomeContainer";
import NewTask from "./containers/NewTaskContainer";
import FailedTasks from "./containers/FailedTasksContainer";
import CompletedTasks from "./containers/CompletedTasksContainer";

//constants
import { TEST } from "./constants";

//routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//redux libs + persistence
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

//react-redux
import { Provider } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    store.dispatch({ type: TEST });
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div>
              <header className="App-header">
                <h1 className="App-title">Repeatic</h1>
                <div className="container">
                  <Health />
                  <Experience />
                  <LevelDisplay />
                </div>
              </header>
              <div className="Page">
                <Router>
                  <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/new-task" component={NewTask} />
                    <Route path="/failed-tasks" component={FailedTasks} />
                    <Route path="/completed-tasks" component={CompletedTasks} />
                  </div>
                </Router>
              </div>
            </div>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
