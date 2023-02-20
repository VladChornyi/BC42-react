import { combineReducers } from "redux";
import { authReducer } from "./auth/auth-slice";
import { counterReducer } from "./counter/counter-slice";
import storage from "redux-persist/lib/storage";
import { modalReducer } from "./modal/modal-slice";
import { persistReducer } from "redux-persist";
import { filmotekaReducer } from "./filmoteka/filmoteka-slice";
import { usersReducer } from "./users/users-slice";

const persistAuthConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistedAuthReducer,
  isOpenModal: modalReducer,
  filmoteka: filmotekaReducer,
  users: usersReducer,
});
