import { registerApi, userApi } from "@/services";
import loginApi from "@/services/login";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      registerApi.middleware,
      loginApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
