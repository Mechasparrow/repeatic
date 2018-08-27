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
    this.renderPresetTasks = this.renderPresetTasks.bind(this);

    let starting_duration = DURATIONS.DAY;
    let starting_time_length = 1;

    this.state = {
      task_created: false,
      presetTask: this.props.preset_tasks[0],
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
    let { value, name } = e.target;

    var { deadline, time_length, presetTask } = this.state;

    switch (name) {
      case "time_length":
        if (value >= 1) {
          time_length = value;
        }
        break;
      case "deadline":
        deadline = value;
        break;
      case "presetTask":
        presetTask = JSON.parse(value);
        break;
    }

    var deadline_moment = this.parseDeadline(deadline, time_length);

    this.setState({
      ...this.state,
      deadline,
      time_length,
      presetTask
    });
  }

  renderPresetTasks() {
    var preset_tasks = this.props.preset_tasks;

    var task_options = _.map(preset_tasks, function(task, idx) {
      var task_name = task["label"];

      return (
        <option key={idx} value={JSON.stringify(task)}>
          {task_name}
        </option>
      );
    });

    return task_options;
  }

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
    var task_json = {
      ...this.state.presetTask,
      completeBy: this.parseDeadline(
        this.state.deadline,
        this.state.time_length
      )
    };

    this.props.createTask(Task.parse(task_json));

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
          <div className="form-group">
            <label>Select Preset:</label>
            <select
              onChange={this.handleInputChange}
              name="presetTask"
              value={JSON.stringify(this.state.presetTask)}
              className="form-control"
            >
              {this.renderPresetTasks()}
            </select>
          </div>

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
