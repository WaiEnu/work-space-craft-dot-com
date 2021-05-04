import React from 'react';
import Icon from '../asset/person1.jpeg';
import Timeline from './Timeline';

function About() {
  return (

<div class="bg-blue-500 relative flex flex-col overflow-hidden h-full">
  <div class="inset-0 bg-white opacity-25 absolute">
  </div>
  <div class="container mx-auto w-full relative z-10 flex flex-col items-center py-16 my-16">
    <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
      <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <img alt="profil" src={Icon} class="mx-auto object-cover rounded-full h-20 w-20 "/>
      </div>
      <div class="w-full mb-8">
        <p class="text-md text-indigo-500 font-bold text-center">
          内藤 由希子
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
          Web Programmer
        </p>
      </div>
      <div class="w-full">
        <p class="text-sm text-gray-900 dark:text-gray-100 text-center px-4 mb-4">
          エンジニアとしては誠実さを<br/>
          デザインは明快さを追及したいです。
        </p>
      </div>
    </div>
  </div>
      <Timeline />
</div>

  );
}

export default About;
