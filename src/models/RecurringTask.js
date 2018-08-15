import moment from "moment";

//recurrence constants
import {
  DAILY,
  WEEKLY
} from '../constants';

//parent model
import Task from "./Task";

class RecurringTask extends Task {
  constructor(
    label,
    type,
    xp,
    completeBy,
    penalty,
    completed,
    recurrence,
    lastInstance
  ) {
    super(label, type, xp, completeBy, penalty);
    this.completed = completed;
    this.recurrence = recurrence;
    this.lastInstance = moment(lastInstance);
  }

  //TODO implement me
  checkRecurrence(current_time) {

    //Get the recurrence
    var {recurrence} = this;

    //Get the diff between now and the last recurrence
    var diff = current_time.diff(this.lastInstance, 'days');

    switch (recurrence) {
      case DAILY:
        if (diff >= 1) {
          return true;
        }else {
          return false;
        }
      case WEEKLY:
        if (diff >= 7) {
          return true;
        }else {
          return false;
        }
      default:
        return false;
    }

  }

  serialize() {
    let { completed, recurrence, lastInstance } = this;

    var raw_task = super.serialize();

    return {
      ...raw_task,
      completed,
      recurrence,
      lastInstance
    };
  }

  spawn_task() {
    let {
      label,
      type,
      xp,
      completeBy,
      penalty,
      completed,
      recurrence,
      lastInstance
    } = this;

    completeBy = moment().add(1, "day");

    return new Task(label, type, xp, completeBy, penalty);
  }

  static parse(raw_recurring_task) {
    let {
      label,
      type,
      xp,
      completeBy,
      penalty,
      completed,
      recurrence,
      lastInstance
    } = raw_recurring_task;
    return new RecurringTask(
      label,
      type,
      xp,
      completeBy,
      penalty,
      completed,
      recurrence,
      lastInstance
    );
  }
}

export default RecurringTask;
