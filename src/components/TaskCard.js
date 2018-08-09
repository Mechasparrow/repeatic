import React, { Component } from "react";
import "./TaskCard.css";

//Task Card Page component
class TaskCard extends Component {
  constructor(props) {
    super(props);

    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    this.props.completeTask();
    this.props.addXP();
  }

  render() {
    return (
      <div className="Task-Card card">
        <div className="card-body">
          <h2 className="card-title">{this.props.task.label}</h2>
          <div className="card-content">
            <span className="badge badge-secondary">
              {this.props.task.type}
            </span>
            <br />
            <span className="xp">+{this.props.task.xp} xp</span>
            <br />
            <button onClick={this.completeTask} className="btn btn-success">
              Complete task
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCard;
