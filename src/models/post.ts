import { User } from "./user";

export interface NewPost {
  title: string;
  cover_image?: string;
  body: string;
  authorId?: string;
}
