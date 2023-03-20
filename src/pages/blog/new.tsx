import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import superagent from "superagent";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const NewBlogPage: React.FC = () => {
  const [values, setValues] = useState<string>();

  const handleCreateNewPost = async () => {
    const data = {
      slug: "1",
      title: "New Post",
      cover_image: "",
      body: values,
      author: {
        create: {
          email: "thanhtu@gmail.com",
          name: "thnhtu",
          address: "HCMC",
        },
      },
    };

    await superagent
      .post("/api/post")
      .set("Content-Type", "application/json")
      .send(data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="form-control my-5 ">
        <label className="label">
          <span className="label-text">Title:</span>
        </label>
        <input type="text" placeholder="..." className="input input-bordered" />
      </div>
      <div className="form-control my-5">
        <label className="label">
          <span className="label-text">Cover image link:</span>
        </label>
        <input type="text" placeholder="..." className="input input-bordered" />
      </div>
      <div className="form-control my-5">
        <label className="label">
          <span className="label-text">Content:</span>
        </label>
        <MDEditor
          data-color-mode="light"
          height={500}
          value={values}
          onChange={setValues}
        />
      </div>

      <button className="btn my-5" onClick={handleCreateNewPost}>
        Submit
      </button>
    </>
  );
};

export default NewBlogPage;
