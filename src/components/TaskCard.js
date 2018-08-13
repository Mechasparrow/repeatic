import React, { Component } from "react";
import "./TaskCard.css";

//Task Card Page component
class TaskCard extends Component {
  static get COMPLETED() {
    return "COMPLETED";
  }

  static get FAILED() {
    return "FAILED";
  }

  static get INPROGRESS() {
    return "INPROGRESS";
  }

  constructor(props) {
    super(props);

    this.completeTask = this.completeTask.bind(this);
    this.taskOverdue = this.taskOverdue.bind(this);

    this.taskOverdue();
  }

  completeTask() {
    this.props.completeTask();
    this.props.addTaskXP();
  }

  taskOverdue() {
    var task = this.props.task;

    if (this.props.task_status === TaskCard.INPROGRESS) {
      if (task.pastDeadline()) {
        this.props.failTask();
      }
    } else {
      return;
    }
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
            <div>
              <span className="xp">+{this.props.task.xp} xp</span>
            </div>
            {this.props.task_status === TaskCard.INPROGRESS && (
              <div>
                <span className="time-left">{this.props.task.timeLeft()}</span>
              </div>
            )}
            {this.props.taskFailed === false && (
              <button onClick={this.completeTask} className="btn btn-success">
                Complete task
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCard;
