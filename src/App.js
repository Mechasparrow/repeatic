import React, { Component } from "react";
import "./App.css";

//GUI components
import Health from "./containers/HealthContainer";
import Experience from "./containers/ExperienceContainer";
import LevelDisplay from "./containers/LevelDisplayContainer";
import Character from "./containers/CharacterContainer";

//Page components
import Home from "./containers/HomeContainer";
import NewTask from "./containers/NewTaskContainer";
import FailedTasks from "./containers/FailedTasksContainer";
import CompletedTasks from "./containers/CompletedTasksContainer";
import EditCharacter from "./containers/EditCharacterContainer";
import AddPresetTask from "./containers/AddPresetTaskContainer";

//constants
import { TEST } from "./constants";

//actions
import { checkRecurringTasks } from "./actions";

//routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//redux libs + persistence
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

//react-redux
import { Provider } from "react-redux";

//timing
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.finalCheck = this.finalCheck.bind(this);
  }

  finalCheck() {
    console.log("hello");
    store.dispatch({ type: TEST });
    store.dispatch(checkRecurringTasks(moment()));
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate
            loading={null}
            onBeforeLift={this.finalCheck}
            persistor={persistor}
          >
            <div>
              <div className="Page">
                <Router>
                  <div>
                    <header className="App-header">
                      <div className="container">
                        <div className="row">
                          <div className="col-3">
                            <Link className="App-title" to="/">
                              <h1>Repeatic</h1>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="container header-content">
                        <div className="row">
                          <div className="col-3">
                            <Character />
                          </div>

                          <div className="col-9">
                            <Health />
                            <Experience />
                            <LevelDisplay />
                          </div>
                        </div>
                      </div>
                    </header>

                    <div className="page-content routes">
                      <Route exact path="/" component={Home} />
                      <Route path="/new-task" component={NewTask} />
                      <Route path="/failed-tasks" component={FailedTasks} />
                      <Route
                        path="/completed-tasks"
                        component={CompletedTasks}
                      />
                      <Route path="/edit-character" component={EditCharacter} />
                      <Route
                        path="/add-preset-task"
                        component={AddPresetTask}
                      />
                    </div>
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
