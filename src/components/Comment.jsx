import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 mb-8 rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          className="w-10 h-10 rounded-full object-cover"
          src="userImg.jpeg"
        ></Image>
        <span>John</span>
        <span>2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim
          dolores sapiente? Amet rerum ex quam harum, quas aperiam atque
          possimus quidem nesciunt quo, blanditiis sed quisquam eaque hic
          consectetur.
        </p>
      </div>
    </div>
  );
};

export default Comment;
