import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 flex justify-between items-center">
      {/* LOGO */}
      <Link to="/" className="flex gap-4 items-cente text-2xl font-bold">
        <Image src="logo.png" w={32} h={32}></Image>
        <span>Blog</span>
      </Link>
      {/* MOBILE MENU*/}
      <div className=" md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="curson-pointer text-4xl bg-red"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen absolute top-16 flex flex-col items-center justify-center gap-8 font-medium text-lg   transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium items-end">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
