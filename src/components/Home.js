import React, { Component } from "react";
import "./Home.css";

//lodash
import _ from "lodash";

//Extra components
import TaskCard from "./TaskCard";

//Home Page component
class Home extends Component {
  constructor(props) {
    super(props);

    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks() {
    var tasks = [];

    _.each(this.props.tasks, (task, idx) => {
      tasks.push(<TaskCard key={idx} task={task} />);
    });

    return tasks;
  }

  render() {
    return (
      <div className="home container">
        <h2>Here are some tasks</h2>
        <div className="task-list">{this.renderTasks()}</div>
      </div>
    );
  }
}

export default Home;
