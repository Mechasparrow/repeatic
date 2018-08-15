import moment from "moment";

class Task {
  constructor(label, type, xp, completeBy, penalty = 5) {
    this.label = label;
    this.type = type;
    this.xp = xp;
    this.completeBy = moment(completeBy); //must be a moment instance
    this.penalty = penalty;
  }

  serialize() {
    let { label, type, xp, completeBy, penalty } = this;
    return {
      label,
      type,
      xp,
      completeBy,
      penalty
    };
  }

  static parse(raw_task) {
    let { label, type, xp, completeBy, penalty } = raw_task;
    return new Task(label, type, xp, completeBy, penalty);
  }

  timeLeft() {
    var current_time = moment();
    return current_time.to(this.completeBy);
  }

  pastDeadline() {
    var current_time = moment();
    return current_time.isAfter(this.completeBy);
  }
}

export default Task;
