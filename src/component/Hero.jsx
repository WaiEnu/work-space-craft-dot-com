import React from 'react';
import Top from '../asset/top.svg';

function Hero() {
  return (

<div className="bg-indigo-900 relative overflow-hidden h-screen"> 
  <img src={Top} className="absolute h-full w-full object-cover" alt="top"/>
  <div className="inset-0 bg-black opacity-25 absolute">
  </div>
  <header className="absolute top-0 left-0 right-0 z-20">
    <nav className="container mx-auto px-6 md:px-12 py-4">
      <div className="md:flex justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            About
          </a>
          <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                  Skill
            </a>
            <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                Works
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div className="container rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
      <div className="w-full flex flex-col items-end justify-between relative z-10">
        <p className="w-full flex flex-row flex-wrap justify-end font-extrabold text-6xl text-center md:text-8xl text-white break-words">
          <span className="inline-block">Space</span><span className="inline-block">Craft</span>
        </p>
        <p className="w-full flex flex-col items-end font-extrabold text-6xl text-center md:text-8xl text-white">
          .Wroks
        </p>
      </div>
    </div>
</div>

  );
}

export default Hero;
