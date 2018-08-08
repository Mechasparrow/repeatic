import React, { Component } from "react";
import "./TaskCard.css";

//Task Card Page component
class TaskCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Task-Card card">
        <div className="card-body">
          <h2 className="card-title">{this.props.task.label}</h2>
          <p className="card-text">
            <span className="badge badge-secondary">
              {this.props.task.type}
            </span>
            <br />
            <span className="xp">+{this.props.task.xp} xp</span>
          </p>
        </div>
      </div>
    );
  }
}

export default TaskCard;
