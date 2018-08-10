//models
import Task from "../models/Task";

import { COMPLETE_TASK, CREATE_TASK } from "../constants";

import _ from "lodash";

export const tasks = (
  state = [
    new Task("brush teeth", "hygiene", 10),
    new Task("meditate", "spiritual", 5)
  ],
  action
) => {
  switch (action.type) {
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
