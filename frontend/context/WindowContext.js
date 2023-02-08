import React, { createContext, useState } from 'react';

export const WindowContext = createContext();

const WindowContextProvider = props => {
  const [window, setWindow] = useState('dashboard');

  const changeFocusDash = () => {
    setWindow('dashboard');
  };

  const changeFocusPicks = () => {
    setWindow('picks');
  };

  const changeFocusContacts = () => {
    setWindow('contacts');
  };

  const changeFocusChat = () => {
    setWindow('chat');
  };

  const changeFocusProfile = () => {
    setWindow('profile');
  };

  return (
    <WindowContext.Provider
      value={{
        window,
        changeFocusDash,
        changeFocusPicks,
        changeFocusContacts,
        changeFocusChat,
        changeFocusProfile,
      }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
