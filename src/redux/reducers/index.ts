import { combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";
import counterReducer from "./counter";
import sasReducer from "./sasData";

const rootReducer = (history: History) =>
  combineReducers({
    count: counterReducer,
    sasData: sasReducer,
    router: connectRouter(history)
  });

export interface State {
  count: number;
  router: RouterState;
}

export default rootReducer;
