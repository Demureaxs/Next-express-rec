import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import React, { useContext } from 'react';
import WindowContextProvider from '@/context/WindowContext';
import PeopleContextProvider from '@/context/PeopleContext';

function App() {
  return (
    <WindowContextProvider>
      <PeopleContextProvider>
        <div className="bg-gray-200">
          <Header />
          <Dashboard />
        </div>
      </PeopleContextProvider>
    </WindowContextProvider>
  );
}

export default App;
