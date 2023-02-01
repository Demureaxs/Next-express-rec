import Link from 'next/link';
import React, { useState } from 'react';
import {
  HiLink,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3BottomRight,
} from 'react-icons/hi2';

function Header(props) {
  return (
    // Overall Header
    <header className=" bg-gradient-to-br from-slate-100 to-slate-200 border-b border-gray-200 shadow-md">
      {/* Inner Container */}
      <div className="flex justify-between max-w-7xl mx-auto p-4 items-center text-slate-700 space-x-10">
        {/* Logo and name */}

        <div className="flex items-center space-x-2 font-semibold">
          <HiLink className=" p-1 h-8 w-8 bg-green-500 text-white md:h-10 md:w-10 md:p-2 rounded-tl-2xl rounded-br-2xl" />

          <hi className=" text-2xl md:text-3xl">
            Skill<span className="text-green-500">Serve</span>
          </hi>
        </div>

        {/* Search Box */}
        <form className="hidden sm:flex items-center flex-grow max-w-xs rounded-full overflow-hidden h-8">
          {/* Search Input */}
          <input
            className="pl-4 h-full w-full focus:outline-none"
            placeholder="Search the site"
            type="text"
          ></input>

          {/* Magnifying Glass Icon */}
          <HiOutlineMagnifyingGlass className="text-white bg-green-500 h-full w-8 p-2 cursor-pointer" />
        </form>

        {/* Nav Container */}
        <div className="flex items-center space-x-6">
          {/* Nav Links */}
          <nav className=" hidden md:flex space-x-6">
            <Link href="/">Home</Link>

            <Link href="/">App</Link>

            <Link href="/">About</Link>

            <Link href="/">Contact</Link>
          </nav>

          {/* Hamburger menu icon */}
          <HiOutlineBars3BottomRight
            onClick={props.togglePopupNav}
            className=" md:hidden  h-8 w-8 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
