import React, { Component } from "react";
import "./AddPresetTask.css";

//Duration constants
import { DURATIONS } from "../constants";

//lodash
import _ from "lodash";

//Task model
import Task from "../models/Task";

//Routing
import { Redirect } from "react-router-dom";

//Moment Lib
import moment from "moment";

//Add Preset Task Page component
class AddPresetTask extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createTask = this.createTask.bind(this);
    this.renderDeadlineOptions = this.renderDeadlineOptions.bind(this);

    let starting_duration = DURATIONS.DAY;
    let starting_time_length = 1;

    this.state = {
      task_created: false,
      tempTask: new Task(
        "",
        this.props.categories[0],
        0,
        this.parseDeadline(starting_duration, starting_time_length)
      ),
      deadline: starting_duration,
      time_length: starting_time_length
    };
  }

  parseDeadline(deadline_constant, time_length) {
    var right_now = moment();

    switch (deadline_constant) {
      case DURATIONS.DAY:
        return right_now.add(time_length, "day");
      case DURATIONS.HOUR:
        return right_now.add(time_length, "hour");
      default:
        return right_now;
    }
  }

  handleInputChange(e) {
    let { name, value } = e.target;

    var theTask = this.state.tempTask;
    var deadline = this.state.deadline;
    var time_length = this.state.time_length;

    if (name === "time_length") {
      if (value >= 1) {
        time_length = value;
      }
    } else if (name === "deadline") {
      deadline = value;
    } else if (name === "xp") {
      var formatted_xp = parseInt(value, 10);
      if (formatted_xp >= 0) {
        theTask[name] = formatted_xp;
      }
    } else {
      theTask[name] = value;
    }

    var deadline_moment = this.parseDeadline(deadline, time_length);
    console.log(deadline_moment);
    theTask["completeBy"] = deadline_moment;

    this.setState({
      ...this.state,
      tempTask: theTask,
      deadline: deadline,
      time_length: time_length
    });
  }

  // TODO implement me plz
  renderPresetTasks() {}

  renderDeadlineOptions() {
    var deadline_option_values = _.keys(DURATIONS);

    var multiple = this.state.time_length > 1;

    console.log(deadline_option_values);

    const prettier_option = constant => {
      var split_constant = _
        .clone(constant)
        .toLowerCase()
        .split("");
      split_constant[0] = split_constant[0].toUpperCase();

      if (multiple) {
        split_constant.push("s");
      }

      var constant = split_constant.join("");

      return constant;
    };

    var deadline_options = _.map(deadline_option_values, function(
      option_value,
      idx
    ) {
      return (
        <option value={option_value} key={idx}>
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
      <div className="preset-task container">
        <h2>Select Preset Task</h2>

        <div className="preset-task-form">
          <div className="form-group" />

          <div className="form-group">
            <label>Complete By: </label>
            <br />
            <div className="d-flex">
              <input
                className="form-control flex-shrink-1 time-length-input"
                value={this.state.time_length}
                type="number"
                name="time_length"
                onChange={this.handleInputChange}
              />
              <select
                name="deadline"
                value={this.state.deadline}
                onChange={this.handleInputChange}
                className="form-control flex-grow-1 duration-input"
              >
                {this.renderDeadlineOptions()}
              </select>
            </div>
          </div>

          <button onClick={this.createTask} className="btn btn-success">
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default AddPresetTask;
