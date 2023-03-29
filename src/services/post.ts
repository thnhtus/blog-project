import { NewPost, Post } from "@/models/post";
import { API_METHODS } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    addPost: builder.mutation<Post, Partial<NewPost>>({
      query: (body) => {
        return {
          url: "/api/post",
          method: API_METHODS.POST,
          body,
        };
      },

      transformResponse: (response: { result: Post }) => response.result,
    }),
    getPosts: builder.query<Post[], void>({
      query: () => {
        return {
          url: "/api/post",
          method: API_METHODS.GET,
        };
      },
      transformResponse: (response: { result: Post[] }) => response.result,
    }),
  }),
});

export const { useAddPostMutation, useGetPostsQuery } = postApi;

export default postApi;
