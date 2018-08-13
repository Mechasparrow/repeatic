import React, { Component } from "react";
import "./CompletedTasks.css";

//lodash
import _ from "lodash";

//routing components
import { Link, Redirect } from "react-router-dom";

//Extra components
import TaskCard from "./TaskCard";

//Completed Tasks Page component
class CompletedTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      go_home: false
    };

    //this.displayCompletedTasks = this.displayCompletedTasks.bind(this);
  }

  /** TODO implement redux container

  displayCompletedTasks() {
    var completed_task_cards = _.map(
      this.props.completed_tasks,
      (completed_task, idx) => {
        return (
          <TaskCard
            key={idx}
            task={(completed_task, _task)}
            taskFailed={true}
          />
        );
      }
    );

    return completed_task_cards;
  }
  **/

  render() {
    if (this.state.go_home === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="completed-tasks container">
        <h2>
          Tasks you <span className="completed-text">completed</span>
        </h2>

        <div className="completed-tasks-list">display completed tasks</div>
      </div>
    );
  }
}

export default CompletedTasks;
