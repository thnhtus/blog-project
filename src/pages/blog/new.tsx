import dynamic from "next/dynamic";
import React, { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { NewPost } from "@/models/post";
import Layout from "@/components/layout";
import { useAddPostMutation } from "@/services/post";
import { useSelector } from "@/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleToast } from "@/utils/helper";
import classNames from "classnames";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const NewBlogPage: React.FC = () => {
  const { userInfo } = useSelector((state) => state.user);

  const { register, handleSubmit, reset } = useForm<NewPost>();

  //-------------------------------------------------------------------

  const [addNewPost, { isLoading }] = useAddPostMutation();

  const [postContent, setPostContent] = useState<string>();

  //-------------------------------------------------------------------

  const onSubmit: SubmitHandler<NewPost> = async (values) => {
    await addNewPost({
      ...values,
      content: postContent,
      authorId: userInfo?.id,
    })
      .unwrap()
      .then(() => {
        handleToast("Created post success!", "success");
        reset();
        setPostContent(undefined);
      })
      .catch((err) => {
        console.log(err);
        handleToast("Create post failed!", "error");
      });
  };

  //----------------------------------------------------------------

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            type="text"
            placeholder="..."
            className="input input-bordered"
            {...register("title")}
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
            {...register("cover_image")}
          />
        </div>
        <div className="form-control my-5">
          <label className="label">
            <span className="label-text">Content:</span>
          </label>
          <MDEditor
            data-color-mode="light"
            height={500}
            value={postContent}
            onChange={(value) => setPostContent(value)}
          />
        </div>

        <div className="text-right">
          <button
            className={classNames("btn my-5 normal-case", {
              loading: isLoading,
            })}
            type="submit"
          >
            Create new post
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default NewBlogPage;
