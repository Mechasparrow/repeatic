import { createTransform } from "redux-persist";

//lodash
import _ from "lodash";

//models for parsing and serialization
import Task from "../../models/Task";

export const taskTransform = createTransform(
  (inboundState, key) => {
    let tasks = inboundState;
    let serialized_tasks = _.map(tasks, function(task) {
      return task.serialize();
    });
    return serialized_tasks;
  },

  (outboundState, key) => {
    let raw_tasks = { ...outboundState };
    let parsed_tasks = _.map(raw_tasks, function(raw_task) {
      return Task.parse(raw_task);
    });
    return parsed_tasks;
  },

  { whitelist: ["tasks", "failed_tasks", "completed_tasks"] }
);
