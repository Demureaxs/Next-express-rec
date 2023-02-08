import React, { useContext, useEffect, useState } from 'react';
import { PeopleContext } from '@/context/PeopleContext';

function Chat() {
  const [chatView, setChatView] = useState(null);

  const handleChat = person => {
    setChatView(person);
    console.log(chatView);
  };

  const { people } = useContext(PeopleContext);

  return (
    <div className="bg-white col-span-1 row-span-2 sm:col-span-2 xl:col-span-3 rounded-md overflow-hidden flex">
      {/* Contacts shortlist */}
      <div className="hidden h-full bg-slate-50 border-r border-gray-200 w-1/3 md:flex flex-col space-y-0 overflow-y-scroll">
        {people.map((person, i) => {
          return (
            <div
              value={person.name}
              onClick={() => handleChat(person)}
              key={i}
              className="flex space-x-4 items-center border-b border-gray-200 p-4 cursor-pointer hover:bg-slate-200"
            >
              <img
                className="h-14 w-14 object-cover rounded-full border-2 border-white"
                src={person.profile}
              />
              <div className="text-sm">
                <h1>{person.name}</h1>
                <p>{person.age}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* chat page */}
      <div className="w-2/3 bg-white p-6 h-full text-sm flex flex-col justify-between">
        <div className="space-y-4">
          {chatView &&
            chatView.chat.map((text, i) => {
              return (
                <p
                  key={i}
                  className="bg-slate-200 w-fit px-3 py-1 rounded-full text-slate-600"
                >
                  {text}
                </p>
              );
            })}
        </div>
        <div>
          <form className="w-full">
            <input
              className="h-10 w-full rounded-full p-4 bg-slate-200 focus:outline-none"
              type="text"
              placeholder="Enter your message"
            ></input>
          </form>
        </div>
      </div>

      {/* Chat Input */}
    </div>
  );
}

export default Chat;
