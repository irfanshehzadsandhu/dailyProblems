import {combineReducers} from "redux";

import login from "./loginReducer";
import shipments from "./shipmentReducer";
import quotes from "./quoteReducer";

export default combineReducers({
  login,shipments,quotes
})
