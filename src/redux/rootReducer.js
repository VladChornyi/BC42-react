import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { authReducer } from "./auth/auth-slice";
import { postsReducer } from "./posts/posts-slice";

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(tokenPersistConfig, authReducer);

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: persistedAuthReducer,
});
