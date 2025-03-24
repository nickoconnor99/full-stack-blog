import React from "react";
import { Link } from "react-router";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* IMAGE */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          className=" w-1/2 rounded-3xl lg:w-full"
          src="postImg.jpeg"
        ></Image>
      </div>
      {/* DETAILS */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/slug" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          tempore cumque explicabo,{" "}
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-800">Written by</span>
          <Link>John Doe</Link>
          <span className="text-blue-800">Web Design</span>
          <Link>2 days ago</Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
