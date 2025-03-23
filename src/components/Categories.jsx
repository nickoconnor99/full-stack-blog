import React from "react";
import { Link } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Categories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl gap-8 p-4 mt-4">
      <div className="flex flex-1 mt-2 items-center justify-between flex-wrap">
        <Link className="bg-blue-800 rounded-full px-4 py-2 text-white">
          All Posts
        </Link>
        <Link>Web Designs</Link>
        <Link>Development</Link>
        <Link>Databases</Link>
        <Link>Search Engines</Link>
        <Link>Marketing</Link>
      </div>
      <div className="flex items-center gap-2">
        <FaMagnifyingGlass></FaMagnifyingGlass>
        <input type="text" placeholder="search post..." />
      </div>
    </div>
  );
};

export default Categories;
