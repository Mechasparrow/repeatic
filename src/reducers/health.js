//redux constants
import { INVOKE_PENALTY } from "../constants";

export const health = (state = 100, action) => {
  switch (action.type) {
    case INVOKE_PENALTY:
      const { penalty } = action.payload;
      if (state - penalty >= 0) {
        return state - penalty;
      }
    default:
      return state;
  }
};
