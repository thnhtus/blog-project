import { UserRegister } from "@/models/user";
import { API_METHODS } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    register: builder.mutation<
      Omit<UserRegister, "confirmPassword">,
      Partial<Omit<UserRegister, "confirmPassword">>
    >({
      query: (body) => {
        return {
          url: "/api/register",
          method: API_METHODS.POST,
          body,
        };
      },
    }),
  }),
});

export const { useRegisterMutation } = registerApi;

export default registerApi;
