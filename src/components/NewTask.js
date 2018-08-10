import React, { Component } from "react";
import "./NewTask.css";

//lodash
import _ from "lodash";

//Task model
import Task from "../models/Task";

//Routing
import { Redirect } from "react-router-dom";

//New Task Page component
class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task_created: false,
      tempTask: new Task("", this.props.categories[0], 0)
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderCategoryOptions = this.renderCategoryOptions.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  handleInputChange(e) {
    let { name, value } = e.target;

    var theTask = this.state.tempTask;

    if (name === "xp") {
      if (parseInt(value, 10) >= 0) {
        theTask[name] = value;
      }
    } else {
      theTask[name] = value;
    }

    this.setState({
      ...this.state,
      tempTask: theTask
    });
  }

  renderCategoryOptions() {
    var categories = this.props.categories;

    var category_options = _.map(categories, function(category, idx) {
      return (
        <option value={category} key={idx}>
          {category}
        </option>
      );
    });

    return category_options;
  }

  createTask() {
    this.props.createTask(this.state.tempTask);

    this.setState({
      ...this.state,
      task_created: true
    });
  }

  render() {
    if (this.state.task_created === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="new-task container">
        <h2>Creating New Task</h2>

        <div className="new-task-form">
          <div className="form-group">
            <label>Category: </label>
            <select
              value={this.state.tempTask.type}
              className="form-control"
              name="type"
              onChange={this.handleInputChange}
            >
              {this.renderCategoryOptions()}
            </select>
          </div>

          <div className="form-group">
            <label>Label: </label>
            <input
              value={this.state.tempTask.label}
              type="text"
              name="label"
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>XP: </label>
            <input
              value={this.state.tempTask.xp}
              className="form-control"
              type="number"
              name="xp"
              onChange={this.handleInputChange}
            />
          </div>

          <button onClick={this.createTask} className="btn btn-success">
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default NewTask;
