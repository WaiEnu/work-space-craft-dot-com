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
                  Skill
            </a>
            <a class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                Works
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div class="container rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
      <div class="w-full flex flex-col items-end justify-between relative z-10">
        <p class="w-full flex flex-row flex-wrap justify-end font-extrabold text-6xl text-center md:text-8xl text-white break-words">
          <span class="inline-block">Space</span><span class="inline-block">Craft</span>
        </p>
        <p class="w-full flex flex-col items-end font-extrabold text-6xl text-center md:text-8xl text-white">
          .Wroks
        </p>
      </div>
    </div>
</div>

  );
}

export default Hero;
