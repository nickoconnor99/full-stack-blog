import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="mt-8">
      <h1>Comments</h1>
      <div className="flex items-center w-full lg:w-2/3 justify-between gap-8 mb-4">
        <textarea className="w-full" placeholder="Write a comment"></textarea>
        <button className="bg-blue-800 rounded-xl px-4 py-3">Send</button>
      </div>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </div>
  );
};

export default Comments;
