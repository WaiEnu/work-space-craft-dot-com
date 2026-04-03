import React from 'react';
import Icon from '../asset/person1.jpg';
import Timeline from './Timeline';

function About() {
  return (

<div className="bg-blue-500 relative flex flex-col overflow-hidden h-full">
  <div className="inset-0 bg-white opacity-25 absolute">
  </div>
  <div className="container mx-auto w-full relative z-10 flex flex-col items-center py-16 my-16">
    <div className="w-full mx-auto max-w-xl rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
      <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <img alt="profil" src={Icon} className="mx-auto object-cover rounded-full h-20 w-20 "/>
      </div>
      <div className="w-full mb-8">
        <p className="text-md text-indigo-500 font-bold text-center">

        </p>
        <p className="text-xs text-gray-500 text-center">
          Web Programmer
        </p>
      </div>
      <div className="w-full">
        <p className="text-sm text-gray-900 text-center px-4 mb-4">
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
