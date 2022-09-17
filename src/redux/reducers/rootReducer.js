import { combineReducers } from "redux";
import { reducerUser } from "./reducerUser";
import { reducerSpinner } from "./reducerSpinner";

export let rootReducer = combineReducers({
  reducerUser,
  reducerSpinner,
});
