//models
import Task from "../models/Task";

//lodash
import _ from "lodash";

export const preset_tasks = (
  state = [
    Task.task_template("sleep", "recharge", 20, 10),
    Task.task_template("breakfast", "eating", 5, 10)
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
