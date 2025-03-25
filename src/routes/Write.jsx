import React from "react";
import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, IsSignedIn } = useUser();

  // if(!isLoaded) {
  //   return <div>Loading...</div>
  // }

  // if(isLoaded && !IsSignedIn) {
  //   return <div>You should login!</div>
  // }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex flex-col gap-6">
      <h1>Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max rounded-xl p-2 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="">Choose a category</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
          </select>
        </div>
        <textarea
          className="rounded-xl"
          name="desc"
          placeholder="A Short Description"
        ></textarea>
        <div></div>
        <ReactQuill
          className="flex-1 rounded-xl bg-white mb-8"
          theme="snow"
        ></ReactQuill>
        <button className="bg-blue-800 text-white rounded-xl p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
