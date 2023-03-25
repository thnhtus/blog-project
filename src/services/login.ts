import { UserLogin } from "@/models/user";
import { API_METHODS } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    login: builder.mutation<UserLogin, Partial<UserLogin>>({
      query: (body) => {
        return {
          url: "/api/login",
          method: API_METHODS.POST,
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;

export default loginApi;
