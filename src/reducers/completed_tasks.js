//constants
import { COMPLETE_TASK } from "../constants";

//lodash
import _ from "lodash";

//completed tasks reducer
export const completed_tasks = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_TASK:
      let { task } = action.payload;
      return _.concat(state, task);
    default:
      return state;
  }
};
