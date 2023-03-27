import { User, UserLogin } from "@/models/user";
import { API_METHODS } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    login: builder.mutation<User, Partial<UserLogin>>({
      query: (body) => {
        return {
          url: "/api/login",
          method: API_METHODS.POST,
          body,
        };
      },

      transformResponse: (response: { result: User }) => response.result,

      transformErrorResponse(
        response: { data: { error: string }; status: number },
        meta,
        arg
      ) {
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;

export default loginApi;
