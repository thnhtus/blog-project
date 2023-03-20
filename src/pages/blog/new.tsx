import dynamic from "next/dynamic";
import React, { useEffect, useReducer, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import superagent from "superagent";
import { NewPost } from "@/models/post";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const NewBlogPage: React.FC = () => {
  // const [values, setValues] = useState<string>();

  const initialPost: NewPost = {
    title: "",
    cover_image: "",
    body: "",
  };

  const reducer = (state: NewPost, action: Partial<NewPost>) => {
    return { ...state, ...action };
  };

  const [newPost, setNewPost] = useReducer(reducer, initialPost);

  const handleCreateNewPost = async () => {
    console.log(newPost);

    // const data = {
    //   title: "New Post",
    //   cover_image:
    //     "https://images.unsplash.com/photo-1679045148090-520584b4ab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //   content: newPost.body,
    //   author: {
    //     create: {
    //       email: "thanhtu@gmail.com",
    //       name: "thnhtu",
    //       address: "HCMC",
    //     },
    //   },
    // };

    // await superagent
    //   .post("/api/post")
    //   .set("Content-Type", "application/json")
    //   .send(data)
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <>
      <div className="form-control my-5 ">
        <label className="label">
          <span className="label-text">Title:</span>
        </label>
        <input
          type="text"
          placeholder="..."
          className="input input-bordered"
          onChange={(event) => {
            setNewPost({ ...newPost, title: event.target.value });
          }}
        />
      </div>
      <div className="form-control my-5">
        <label className="label">
          <span className="label-text">Cover image link:</span>
        </label>
        <input
          type="text"
          placeholder="..."
          className="input input-bordered"
          onChange={(event) => {
            setNewPost({ ...newPost, cover_image: event.target.value });
          }}
        />
      </div>
      <div className="form-control my-5">
        <label className="label">
          <span className="label-text">Content:</span>
        </label>
        <MDEditor
          data-color-mode="light"
          height={500}
          value={newPost.body}
          onChange={(value) => setNewPost({ ...newPost, body: value })}
        />
      </div>

      <button className="btn my-5" onClick={handleCreateNewPost}>
        Submit
      </button>
    </>
  );
};

export default NewBlogPage;
