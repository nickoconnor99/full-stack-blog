import React from "react";
import { Link } from "react-router";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      {/* FIRST POST */}
      <div className="w-full lg:w-1/2">
        {/* IMAGE */}
        <Image
          src="featured1.jpeg"
          className="object-cover rounded-3xl mb-4"
        ></Image>
        {/* DETAILS */}
        <div className="flex items-center gap-4 mb-4">
          <h1>.01</h1>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        {/* TITLE */}
        <Link to="/test" className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eius
          saep nostrum temporibus!
        </Link>
      </div>
      {/* OTHER POSTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="object-cover w-1/3 rounded-3xl"
          ></Image>
          {/* DETAILS & TITLE */}
          <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 mb-4">
              <h1>.01</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatum voluptatibus{" "}
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="object-cover w-1/3 rounded-3xl"
          ></Image>
          {/* DETAILS & TITLE */}
          <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 mb-4">
              <h1>.01</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatum voluptatibus{" "}
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="object-cover w-1/3 rounded-3xl"
          ></Image>
          {/* DETAILS & TITLE */}
          <div className="w-2/3">
            {/* DETAILS */}
            <div className="flex items-center gap-4 mb-4">
              <h1>.01</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatum voluptatibus{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
