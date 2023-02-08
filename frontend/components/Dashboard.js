import React, { useState } from 'react';
import MainDash from './dashboard_components/MainDash';
import SidenavDash from './dashboard_components/SidenavDash';

function Dashboard() {
  // state and functions sent to the sidenav to change focus
  return (
    <main className=" flex flex-col lg:flex-row max-w-7xl mx-auto bg-gray-200 border-1 border-l border-r border-gray-300 rounded-sm overflow-hidden text-slate-600">
      <SidenavDash />
      <MainDash />
    </main>
  );
}

export default Dashboard;
