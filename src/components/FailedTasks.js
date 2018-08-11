import React, { Component } from "react";
import "./FailedTasks.css";

//lodash
import _ from "lodash";

//routing components
import { Link, Redirect } from "react-router-dom";

//Extra components
import TaskCard from "./TaskCard";

//Failed Tasks Page component
class FailedTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      go_home: false
    };

    this.displayFailedTasks = this.displayFailedTasks.bind(this);
  }

  displayFailedTasks() {
    var failed_task_cards = _.map(
      this.props.failed_tasks,
      (failed_task, idx) => {
        return <TaskCard key={idx} task={failed_task} taskFailed={true} />;
      }
    );

    return failed_task_cards;
  }

  render() {
    if (this.state.go_home === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="failed-tasks container">
        <h2>
          Tasks you <span className="failed-text">failed</span>
        </h2>

        <div className="failed-tasks-list">{this.displayFailedTasks()}</div>
      </div>
    );
  }
}

export default FailedTasks;
