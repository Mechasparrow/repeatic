import moment from "moment";

class Task {
  constructor(label, type, xp, completeBy, penalty = 5) {
    this.label = label;
    this.type = type;
    this.xp = xp;
    this.completeBy = completeBy; //must be a moment instance
    this.penalty = penalty;
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
