import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProdutoReducer } from "./features/produto.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiLoginReducer } from "../redux/features/api.login.slice";

const rooReducer = combineReducers({
  produto: apiProdutoReducer,
  login: apiLoginReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["produto"],
};

const persistedReducer = persistReducer(persistConfig, rooReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
