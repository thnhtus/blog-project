import { userApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
