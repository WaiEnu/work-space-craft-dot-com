import React from 'react';
import Top from '../asset/top.svg';

function Hero() {
  return (

<div class="bg-indigo-900 relative overflow-hidden h-screen">
  <img src={Top} class="absolute h-full w-full object-cover" alt="top"/>
  <div class="inset-0 bg-black opacity-25 absolute">
  </div>
  <header class="absolute top-0 left-0 right-0 z-20">
    <nav class="container mx-auto px-6 md:px-12 py-4">
      <div class="md:flex justify-center items-center">
        <div class="flex justify-between items-center">
          <div class="md:hidden">
            <button class="text-white focus:outline-none">
              <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            About
          </a>
          <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            Skills
          </a>
          <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container mx-auto px-6 md:px-12 relative z-10 flex flex-row-reverse items-center py-32 xl:py-40">
    <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
      <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
        SpaceCraft
        <br/>
        .Wroks
      </h1>
    </div>
  </div>
</div>
  );
}

export default Hero;
