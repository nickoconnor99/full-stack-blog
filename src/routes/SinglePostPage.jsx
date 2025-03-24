import React from "react";
import { Link } from "react-router";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div>
      {/* DETAILS */}
      <div className="flex">
        <div className="w-3/5">
          <h1 className="text-3xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            recusandae suscipit deleniti culpa molestias, at similique! Omnis{" "}
          </h1>
          <div className="flex items-center gap-2">
            <span>Written by</span>
            <Link>John Doe</Link>
            <span>Web Design</span>
            <Link>2 days ago</Link>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quod, assumenda accusamus obcaecati ab nisi non culpa, illum earum
            ad vel quibusdam accusantium! Explicabo culpa nam mollitia, nihil
            impedit quos!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image className="rounded-2xl" src="postImg.jpeg"></Image>
        </div>
      </div>
      {/* CONTENT */}
      <div className="mt-8 flex flex-col md:flex-row">
        <div className="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque reiciendis quasi dicta ad magnam quisquam id earum. Corporis
            tenetur vero vel sapiente inventore magni rem excepturi qui
            voluptatibus dolore?
          </p>
        </div>
        {/* MENU */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="">Author</h1>
          <div className="">
            <div className="flex flex-row">
              <Image
                className="w-12 h-12 rounded-full object-cover"
                src="userImg.jpeg"
              ></Image>
              <Link>John Doe</Link>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg"></Image>
              </Link>
              <Link>
                <Image src="instagram.svg"></Image>
              </Link>
            </div>
          </div>
          <PostMenuAction></PostMenuAction>
          <h1>Categories</h1>
          <div>
            <Link>All</Link>
            <Link>Web Design</Link>
            <Link>Development</Link>
            <Link>Databases</Link>
            <Link>Search Engines</Link>
            <Link>Marketing</Link>
          </div>
          <h1>Search</h1>
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
