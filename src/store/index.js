//redux libs
import { createStore, applyMiddleware } from "redux";

//persistence libs
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//persistence transforms
import { taskTransform, recurringTaskTransform } from "./transforms";

//Root reducer
import { rootReducer } from "../reducers";

//middleware
import logger from "redux-logger";
import thunk from "redux-thunk";

//redux-persist config
const persistConfig = {
  key: "root",
  storage,
  transforms: [taskTransform, recurringTaskTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//exported constants

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk)
);

export const persistor = persistStore(store);
