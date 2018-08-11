//constants
import { FAILED_TASK } from "../constants";

//lodash
import _ from "lodash";

export const failed_tasks = (state = [], action) => {
  switch (action.type) {
    case FAILED_TASK:
      let { task } = action.payload;
      return _.concat(state, task);
    default:
      return state;
  }
};
