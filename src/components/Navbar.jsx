import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 flex justify-between items-center">
      {/* LOGO */}
      <div className="flex gap-4 items-cente text-2xl font-bold">
        <img className="w-8" src="./logo.png" alt="" />
        <span>Blog</span>
      </div>
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
          className={`w-full h-screen absolute top-16 flex flex-col items-center justify-center bg-red-700 ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          menu
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default Navbar;
