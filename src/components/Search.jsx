import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  return (
    <div className="flex gap-2 items-center">
      <FaMagnifyingGlass></FaMagnifyingGlass>
      <input type="text" placeholder="search a post" />
    </div>
  );
};

export default Search;
