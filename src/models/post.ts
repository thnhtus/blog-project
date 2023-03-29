import { User } from "./user";

export interface Post {
  id: string;
  title: string;
  cover_image?: string;
  content: string;
  authorId?: string;
}

export type NewPost = Omit<Post, "id">;
