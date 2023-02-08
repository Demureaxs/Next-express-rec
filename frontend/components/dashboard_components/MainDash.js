import React, { useContext } from 'react';
import Chat from './Chat';
import ProfileCard from './ProfileCard';
import { WindowContext } from '@/context/WindowContext';

const people = [
  {
    name: 'Spencer Bumsniff',
    age: 28,
    skills: 'Won a rimming competition against Harry Styles',
    profile:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg',
  },
  {
    name: 'Crazy Frog',
    age: 2,
    skills: 'Jay from the inbetweeners loves him dearly',
    profile:
      'https://i.guim.co.uk/img/media/87929f76cb1cbd05350d5a7b8fe759857a2e7e78/388_698_3299_1979/master/3299.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=875b2f73d7fb4832f0b1720a0851af51',
    background:
      'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Norman Ermantraut',
    age: 18,
    skills: '6x League of Legends world champion',
    profile:
      'https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Amedeus Maximilianos',
    age: 88,
    skills: 'Wut Skills fam',
    profile:
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Jay',
    age: 16,
    skills: 'Completed it mate, likes to shout at bus stops',
    profile:
      'https://static.independent.co.uk/2022/09/29/06/newFile.jpg?width=1200',
    background:
      'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Duncan Bannatyne',
    age: 56,
    skills: 'He was on dragons den you nutter',
    profile:
      'https://images.pexels.com/photos/6908067/pexels-photo-6908067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Spencer Bumsniff',
    age: 28,
    skills: 'Won a rimming competition against Harry Styles',
    profile:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg',
  },
  {
    name: 'Hillary Brownshaft',
    age: 48,
    skills: 'Good at cleaning Windows and a fantastic chef',
    profile:
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Norman Ermantraut',
    age: 18,
    skills: '6x League of Legends world champion',
    profile:
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/kot-2508858_1280.jpg',
    background:
      'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Amedeus Maximilianos',
    age: 88,
    skills: 'Wut Skills fam',
    profile:
      'https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Roger Analbleed',
    age: 8,
    skills: 'Professional pirate',
    profile:
      'https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Duncan Bannatyne',
    age: 56,
    skills: 'He was on dragons den you nutter',
    profile:
      'https://images.pexels.com/photos/6908067/pexels-photo-6908067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    background:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

function MainDash(props) {
  const {
    window,
    changeFocusDash,
    changeFocusPicks,
    changeFocusContacts,
    changeFocusChat,
    changeFocusProfile,
  } = useContext(WindowContext);

  return (
    // container for the Employee cards
    <div className="w-full grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-[50%] auto-rows-[50%] gap-3 p-3 overflow-y-scroll h-[900px]">
      {window === 'dashboard' && <div>I am a dashboard</div>}

      {window === 'chat' && <Chat />}

      {window === 'picks' &&
        people.map((person, index) => {
          return (
            <ProfileCard
              key={index}
              name={person.name}
              age={person.age}
              skills={person.skills}
              profilePic={person.profile}
              backgroundPic={person.background}
            />
          );
        })}
    </div>
  );
}

export default MainDash;
