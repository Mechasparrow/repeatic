//models
import RecurringTask from "../models/RecurringTask";

//constants
import { DAILY } from "../constants";

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
      moment().add(1, "day"),
      5,
      false,
      DAILY,
      moment()
    )
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
