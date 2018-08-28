//models
import RecurringTask from "../models/RecurringTask";

//constants
import {
  DAILY,
  UPDATE_RECURRING_TASK_LAST_INSTANCE,
  DELETE_RECURRING_TASK,
  CREATE_RECURRING_TASK
} from "../constants";

//lodash
import _ from "lodash";

//moment.js
import moment from "moment";

export const recurring_tasks = (
  state = [
    new RecurringTask(
      "Eat Strawberries",
      "food",
      10,
      moment().subtract(1, "day"),
      5,
      false,
      DAILY,
      moment().subtract(1, "day")
    )
  ],
  action
) => {
  switch (action.type) {
    case UPDATE_RECURRING_TASK_LAST_INSTANCE:
      var { recurring_task_idx, last_instance } = action.payload;

      var recurring_tasks = { ...state };
      var recurring_task = recurring_tasks[recurring_task_idx];

      recurring_task.lastInstance = last_instance;

      recurring_tasks[recurring_task_idx] = recurring_task;

      return _.map(recurring_tasks, function(recurring_task) {
        return RecurringTask.parse(recurring_task);
      });

    case DELETE_RECURRING_TASK:
      var { recurring_task_idx } = action.payload;

      //TODO implement ability to delete recurring tasks

      return state;

    case CREATE_RECURRING_TASK:
      var { new_recurring_task } = action.payload;

      //TODO implement ability to create recurring tasks

      return state;

    default:
      return state;
  }
};
