import { combineReducers } from "redux";
import { authReducer } from "./auth/auth-reducer";
import { counterReducer } from "./counter/couter-reducer";
import { modalReducer } from "./modal/modal-reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  isOpenModal: modalReducer,
});
