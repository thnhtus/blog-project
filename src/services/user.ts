import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/user",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

export default userApi;
