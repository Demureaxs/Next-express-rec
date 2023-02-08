import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { WindowContext } from '@/context/WindowContext';

import {
  HiLink,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3BottomRight,
} from 'react-icons/hi2';

import {
  MdBookmarks,
  MdChat,
  MdSpaceDashboard,
  MdPeople,
  MdOutlineShowChart,
  MdCall,
  MdOutlineMail,
} from 'react-icons/md';
import { FaWhatsapp, FaLinkedin, FaAddressBook } from 'react-icons/fa';

function Header(props) {
  const {
    window,
    changeFocusDash,
    changeFocusPicks,
    changeFocusContacts,
    changeFocusChat,
    changeFocusProfile,
  } = useContext(WindowContext);

  const [navigation, setNavigation] = useState(false);

  const handleNav = () => {
    setNavigation(!navigation);
  };

  return (
    // Overall Header
    <header className=" bg-gradient-to-br from-slate-100 to-slate-200 border-b border-gray-300 shadow-md">
      {/* Inner Container */}
      <div className="flex justify-between max-w-7xl mx-auto py-4 px-4 items-center text-slate-600 space-x-10">
        {/* Logo and name */}

        <div className="flex items-center space-x-2 font-semibold">
          <HiLink className=" p-1 h-9 w-9 bg-gradient-to-br from-green-500 to-green-600 text-white md:h-10 md:w-10 md:p-1 rounded-tl-2xl rounded-br-2xl" />

          <hi className=" text-3xl sm:text-4xl">
            Skill
            <span className="text-transparent bg-gradient-to-br from-green-500 to-green-600 bg-clip-text">
              Serve
            </span>
          </hi>
        </div>

        {/* Search Box */}
        <form className="hidden sm:flex items-center flex-grow max-w-xs rounded-full overflow-hidden h-8 shadow-md">
          {/* Search Input */}
          <input
            className="pl-4 h-full w-full focus:outline-none"
            placeholder="Search the site"
            type="text"
          ></input>

          {/* Magnifying Glass Icon */}
          <HiOutlineMagnifyingGlass className="text-white bg-gradient-to-br from-green-500 to-green-600 h-full w-8 p-2 cursor-pointer" />
        </form>

        {/* Nav Container */}
        <div className="flex items-center space-x-4">
          {/* Nav Links */}
          <nav className=" hidden md:flex space-x-6">
            <Link href="/">Home</Link>

            <Link href="/app">App</Link>

            <Link href="/">About</Link>

            <Link href="/">Contact</Link>
          </nav>

          {/* Sign in button */}
          <button className="hidden lg:block bg-gradient-to-br from-green-500 to-green-600 px-3 py-2 rounded-md font-semibold text-white hover:bg-green-700 shadow-md">
            Sign In
          </button>

          {/* Hamburger menu icon */}
          <HiOutlineBars3BottomRight
            onClick={handleNav}
            className=" md:hidden  h-8 w-8 cursor-pointer"
          />
        </div>
      </div>

      <nav className=" border-t border-gray-300 flex justify-between text-gray-600 lg:hidden">
        <div
          onClick={changeFocusDash}
          className=" py-5 px-5 flex items-center w-full justify-center border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdSpaceDashboard className="h-6 w-6" />
        </div>
        <div
          onClick={changeFocusPicks}
          className=" py-5 px-5 flex items-center w-full justify-center border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdBookmarks className="h-6 w-6" />
        </div>
        <div
          onClick={changeFocusContacts}
          className=" py-5 px-5 flex items-center w-full justify-center border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <FaAddressBook className="h-6 w-6" />
        </div>
        <div
          onClick={changeFocusChat}
          className=" py-5 px-5 flex items-center w-full justify-center border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdChat className="h-6 w-6" />
        </div>
        <div
          onClick={changeFocusProfile}
          className=" py-5 px-5 flex items-center w-full justify-center border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdPeople className="h-6 w-6" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
