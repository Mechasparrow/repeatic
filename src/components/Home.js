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
      new_task: false
    };

    console.log(props);

    this.renderTasks = this.renderTasks.bind(this);
    this.newTask = this.newTask.bind(this);
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
          key={idx}
          task={task}
        />
      );
    });

    return tasks;
  }

  render() {
    if (this.state.new_task === true) {
      return <Redirect push to="/new-task" />;
    }

    return (
      <div className="home container">
        <h2>Here are some tasks</h2>
        <button
          onClick={this.newTask}
          className="btn btn-secondary btn-new-task"
        >
          New Task
        </button>
        <div className="task-list">{this.renderTasks()}</div>
      </div>
    );
  }
}

export default Home;
