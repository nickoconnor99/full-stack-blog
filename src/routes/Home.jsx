import React from "react";
import { Link } from "react-router";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div className="mt-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link>Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt
            laudantium,
          </h1>
          <p className="mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            impedit dolorem tempore
          </p>
        </div>
        {/* ANIMATED BUTTON */}
        <button className="bg-blue-800 hidden md:block">Button</button>
      </div>
      {/* CATEGORIES */}
      <Categories></Categories>
      {/* FEATURED POSTS */}
      <div>
        <h1 className="my-8 text-2xl">Recent Posts</h1>
      </div>
      <FeaturedPosts></FeaturedPosts>
      {/* POST LIST */}
      <PostList></PostList>
    </div>
  );
};

export default Home;
