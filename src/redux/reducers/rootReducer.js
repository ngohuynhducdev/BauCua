import { combineReducers } from "redux";

import bauCuaReducer from "./bauCuaReducer";

const rootReducer = combineReducers({
  // Khai báo tất cả reducer con vào đây

  baucua: bauCuaReducer,
});

export default rootReducer;
