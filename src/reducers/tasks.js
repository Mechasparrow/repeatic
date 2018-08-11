//models
import Task from "../models/Task";

//constants
import { COMPLETE_TASK, CREATE_TASK, FAILED_TASK } from "../constants";

//lodash
import _ from "lodash";

//moment.js
import moment from "moment";

export const tasks = (
  state = [
    new Task("brush teeth", "hygiene", 10, moment().add(1, "hour")),
    new Task("meditate", "spiritual", 5, moment().subtract(1, "day"))
  ],
  action
) => {
  switch (action.type) {
    case FAILED_TASK:
      var task_id = action.payload.task_idx;

      var task_indexs = _.map(state, (t, i) => i);

      var task_ids = _.filter(task_indexs, idx => {
        return idx !== task_id;
      });

      return _.map(task_ids, function(idx) {
        return state[idx];
      });

    case CREATE_TASK:
      var { new_task } = action.payload;
      return _.concat(state, new_task);

    case COMPLETE_TASK:
      var task_idx = _.map(state, function(tsk, i) {
        return i;
      });

      var task_ids = _.filter(task_idx, function(idx) {
        var task_id = action.payload.task_idx;

        return idx !== task_id;
      });

      console.log(task_ids);

      return _.map(task_ids, function(idx) {
        return state[idx];
      });

      console.log(tasks);

    default:
      return state;
  }
};
