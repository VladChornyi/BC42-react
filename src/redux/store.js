import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { rootReducer } from "./rootReducer";

// const persistConfig = {
//   key: "auth",
//   storage,
//   blacklist: ["isOpenModal", "counter"],
//   whitelist: ["auth"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
