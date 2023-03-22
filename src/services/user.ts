import { User } from "@/models/user";
import { API_METHODS } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User, void>({
      query: () => "/api/user",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

export default userApi;
