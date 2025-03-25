import React from "react";

const PostMenuAction = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 cursor-pointer">
        <span>Save this Post</span>
      </div>
      <div>
        <span>Delete this Post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;
