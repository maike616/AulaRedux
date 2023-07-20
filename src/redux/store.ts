import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/count.slice";
import produtoReducer from "./features/produto.slice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    produto: produtoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
