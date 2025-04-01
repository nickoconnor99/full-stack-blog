import React from "react";
import Search from "./Search";
import { Link } from "react-router";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium ">Search</h1>
      <Search></Search>
      <h1 className="mb-4 mt-8 text-sm font-medium ">Filter</h1>
      <div className="flex flex-col gap-2 cursor-pointer">
        <label>
          <input type="radio" name="sort" value="newest" /> Newest
        </label>
        <label>
          <input type="radio" name="sort" value="popular" /> Most Popular
        </label>{" "}
        <label>
          <input type="radio" name="sort" value="trending" /> Trending
        </label>{" "}
        <label>
          <input type="radio" name="sort" value="oldest" /> Oldest
        </label>
      </div>
      <h1 className="mb-4 mt-8 text-sm font-medium ">Categories</h1>
      <div className="flex flex-col">
        <Link className="">All</Link>
        <Link>Web Design</Link>
        <Link>Development</Link>
        <Link>Databases</Link>
        <Link>Search Engines</Link>
        <Link>Marketing</Link>
      </div>
    </div>
  );
};

export default SideMenu;
