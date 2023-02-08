import React from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaLinkedin, FaAddressBook } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';

function ProfileCard({ name, age, skills, profilePic, backgroundPic }) {
  return (
    // Container
    <div className="relative rounded-md overflow-hidden bg-gradient-to-br from-white to-slate-100 border border-gray-300">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-[37%] z-10 object-cover"
        src={backgroundPic}
      />

      {/* Main Card */}
      <div className="relative h-full rounded-md text-sm flex flex-col justify-between p-8">
        {/* Profile Pic */}
        <img
          className="h-24 w-24 rounded-full object-cover border-2 border-white z-20"
          src={profilePic}
        />

        {/* Data container */}
        <div className="space-y-4 h-1/3">
          <h1>
            <span className=" font-semibold">Name:</span> {name}
          </h1>
          <p>
            <span className=" font-semibold">Age:</span> {age}
          </p>
          <p>
            <span className=" font-semibold">Skills:</span> {skills}
          </p>
        </div>

        {/* Links container */}
        <div className="flex justify-evenly items-center border-t border-gray-300 pt-6">
          <FaWhatsapp className="h-6 w-6 cursor-pointer" />
          <FaLinkedin className="h-6 w-6 cursor-pointer" />
          <FaAddressBook className="h-6 w-6 cursor-pointer" />
          <MdChat className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
