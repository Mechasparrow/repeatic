import React, { Component } from "react";
import "./NewTask.css";

//Duration constants
import {DURATIONS} from '../constants';

//lodash
import _ from "lodash";

//Task model
import Task from "../models/Task";

//Routing
import { Redirect } from "react-router-dom";

//Moment Lib
import moment from 'moment';

//New Task Page component
class NewTask extends Component {
  constructor(props) {
    super(props);


    this.handleInputChange = this.handleInputChange.bind(this);
    this.createTask = this.createTask.bind(this);

    this.renderCategoryOptions = this.renderCategoryOptions.bind(this);
    this.renderDeadlineOptions = this.renderDeadlineOptions.bind(this);

    let starting_duration = DURATIONS.DAY;

    this.state = {
      task_created: false,
      tempTask: new Task("", this.props.categories[0], 0, this.parseDeadline(starting_duration)),
      deadline: starting_duration
    };

  }

  parseDeadline(deadline_constant) {

    var right_now = moment();

    switch(deadline_constant) {
      case DURATIONS.DAY:
        return right_now.add(1, 'day');
      case DURATIONS.HOUR:
        return right_now.add(1, 'hour');
      default:
        return right_now;
    }

  }

  handleInputChange(e) {
    let { name, value } = e.target;

    var theTask = this.state.tempTask;
    var deadline = this.state.deadline;

    if (name === "deadline") {
      deadline = value;

      var deadline_moment = this.parseDeadline(value);
      console.log(deadline_moment);
      theTask['completeBy'] = deadline_moment;
    }

    if (name === "xp") {
      if (parseInt(value, 10) >= 0) {
        theTask[name] = value;
      }
    } else {
      theTask[name] = value;
    }

    this.setState({
      ...this.state,
      tempTask: theTask,
      deadline: deadline
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

  renderDeadlineOptions() {
    var deadline_option_values = _.keys(DURATIONS);

    console.log(deadline_option_values);

    const prettier_option = (constant) => {
      var split_constant = _.clone(constant).toLowerCase().split("");
      split_constant[0] = split_constant[0].toUpperCase();
      var constant = split_constant.join("");

      return constant;
    }

    var deadline_options = _.map(deadline_option_values, function (option_value, idx) {
      return (
        <option value = {option_value} key = {idx}>
          {prettier_option(option_value)}
        </option>
      );
    });

    return deadline_options;

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

          <div className = "form-group">
            <label>Complete By: </label>
            <select name = "deadline" value = {this.state.deadline} onChange = {this.handleInputChange} className = "form-control">
              {this.renderDeadlineOptions()}
            </select>
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
