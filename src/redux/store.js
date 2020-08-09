import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import { reducer as formReducer } from "redux-form";
// import { studentReducer } from "./reducer";

const rootReducer = combineReducers({
  // school: studentReducer, //only used when storing data in redux
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
