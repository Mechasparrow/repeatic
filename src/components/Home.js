import React, { Component } from "react";
import "./Home.css";

//lodash
import _ from "lodash";

//routing components
import { Link, Redirect } from "react-router-dom";

//Extra components
import TaskCard from "./TaskCard";

//Home Page component
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new_task: false,
      view_failed_tasks: false
    };

    console.log(props);

    this.renderTasks = this.renderTasks.bind(this);
    this.newTask = this.newTask.bind(this);
    this.viewFailedTasks = this.viewFailedTasks.bind(this);
  }

  viewFailedTasks() {
    this.setState({
      ...this.state,
      view_failed_tasks: true
    });
  }

  newTask() {
    this.setState({
      ...this.state,
      new_task: true
    });
  }

  renderTasks() {
    var tasks = [];

    _.each(this.props.tasks, (task, idx) => {
      tasks.push(
        <TaskCard
          completeTask={() => {
            this.props.completeTask(idx);
          }}
          addXP={() => {
            this.props.addXP(task);
          }}
          failTask={() => {
            this.props.failTask(idx);
          }}
          key={idx}
          task={task}
          taskFailed={false}
        />
      );
    });

    return tasks;
  }

  render() {
    if (this.state.new_task === true) {
      return <Redirect push to="/new-task" />;
    }

    if (this.state.view_failed_tasks === true) {
      return <Redirect push to="/failed-tasks" />;
    }

    return (
      <div className="home container">
        <h2>Here are some tasks</h2>
        <div className="home-buttons">
          <button
            onClick={this.newTask}
            className="btn btn-secondary btn-new-task"
          >
            New Task
          </button>
          <button
            onClick={this.viewFailedTasks}
            className="btn btn-danger btn-failed-task"
          >
            View Failed Tasks
          </button>
        </div>
        <div className="task-list">{this.renderTasks()}</div>
      </div>
    );
  }
}

export default Home;
