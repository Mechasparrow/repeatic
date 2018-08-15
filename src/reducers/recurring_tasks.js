//models
import RecurringTask from "../models/RecurringTask";

//constants
import { DAILY, UPDATE_RECURRING_TASK_LAST_INSTANCE } from "../constants";

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

      var {recurring_task_idx, last_instance} = action.payload;

      var recurring_tasks = {...state}
      var recurring_task = recurring_tasks[recurring_task_idx];

      recurring_task.lastInstance = last_instance;

      recurring_tasks[recurring_task_idx] = recurring_task;

      return _.map(recurring_tasks, function (recurring_task) {
          return RecurringTask.parse(recurring_task);
      })

    default:
      return state;
  }
};
