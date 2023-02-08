import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { WindowContext } from '@/context/WindowContext';

function SidenavDash(props) {
  const {
    window,
    changeFocusDash,
    changeFocusPicks,
    changeFocusContacts,
    changeFocusChat,
    changeFocusProfile,
  } = useContext(WindowContext);

  return (
    <div className=" hidden lg:flex lg:flex-col justify-between w-1/4 bg-gradient-to-br from-slate-100 to-slate-200 h-[900px] border-r border-gray-300 text-sm">
      <nav className=" flex lg:flex-col">
        <div
          onClick={changeFocusDash}
          className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdSpaceDashboard className="h-6 w-6" />
          <Link className="pl-2" href="/app">
            Dashboard
          </Link>
        </div>
        <div
          onClick={changeFocusPicks}
          className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdBookmarks className="h-6 w-6" />
          <Link className="pl-2" href="/app">
            Your picks
          </Link>
        </div>
        <div
          onClick={changeFocusContacts}
          className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <FaAddressBook className="h-6 w-6" />
          <Link className="pl-2" href="/app">
            Contacts
          </Link>
        </div>
        <div
          onClick={changeFocusChat}
          className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdChat className="h-6 w-6" />
          <Link className="pl-2" href="/app">
            Chat
          </Link>
        </div>
        <div
          onClick={changeFocusProfile}
          className=" py-5 pl-5 flex items-center border-b border-slate-300 hover:bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
        >
          <MdPeople className="h-6 w-6" />
          <Link className="pl-2" href="/app">
            Profile
          </Link>
        </div>
      </nav>

      {/* Logged in profile card */}
      <div className="hidden border-t border-slate-300 p-4 lg:flex items-center">
        <div className=" h-14 w-14 bg-white rounded-full overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            objectFit="cover"
            height="56"
            width="56"
          />
        </div>
        <div className=" text-xs pl-4">
          <p className="pb-1 font-semibold">Matthew Spence</p>
          <p>MattgSpence@rocketmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default SidenavDash;
