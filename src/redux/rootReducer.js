import { combineReducers } from "redux";
import { authReducer } from "./auth/auth-slice";
import { counterReducer } from "./counter/counter-slice";
import storage from "redux-persist/lib/storage";
import { modalReducer } from "./modal/modal-slice";
import { persistReducer } from "redux-persist";
import { filmotekaReducer } from "./filmoteka/filmoteka-slice";
import { usersReducer } from "./users/users-slice";
import { postsReducer } from "./posts/posts-slice";

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistFilmotekaConfig = {
  key: "movies",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedFilmotekaReducer = persistReducer(
  persistFilmotekaConfig,
  filmotekaReducer
);

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistedAuthReducer,
  isOpenModal: modalReducer,
  filmoteka: persistedFilmotekaReducer,
  users: usersReducer,
  posts: postsReducer,
});
