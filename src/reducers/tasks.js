//models
import Task from "../models/Task";

const tasks = (
  state = [
    new Task("brush teeth", "hygiene", 10),
    new Task("meditate", "spiritual", 5)
  ],
  action
) => {
  return state;
};

export default tasks;
