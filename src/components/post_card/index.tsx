import React from "react";
import { Post } from "@/models/post";
import Image from "next/image";

const PostCard: React.FC<{ data: Post }> = ({ data }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
      <div className="p-5 max-h-[300px] overflow-hidden">
        <Image
          src={data.cover_image ?? "/"}
          alt="post_cover_img"
          width={500}
          height={500}
          className="w-full h-full object-fill rounded-md"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default PostCard;
