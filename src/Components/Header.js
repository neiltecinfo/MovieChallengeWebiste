import React, { useState } from "react";
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Favourites", link: "/favourites" },
    { name: "Watchlist", link: "/watchlist" },
    { name: "Profile", link: "/profile" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* Logo */}
        <div className="flex text-2xl cursor-pointer items-center gap-1">
          <BeakerIcon className="w-7 h-7 text-blue-600" />
          <span className="font-bold">Website</span>
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static z-10 left-0 w-full 
            transition-all bg-white duration-500 ease-in ${isOpen ? "top-12" : "top-[-490px]"}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 md:my-0 md:ml-8 font-semibold">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
          {/* <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded">
            Get Started
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
