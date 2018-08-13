//constants
import { INCREMENT_LEVEL } from "../constants";

//level reducer that reps the users current level
export const level = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_LEVEL:
      return state + 1;
    default:
      return state;
  }
};
