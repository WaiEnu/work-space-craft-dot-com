import React from 'react';
import Icon from '../asset/person1.jpeg';

function About() {
  return (

<div class="bg-blue-500 relative overflow-hidden h-screen">
  <div class="inset-0 bg-white opacity-25 absolute">
  </div>
  <div class="container mx-auto w-full relative z-10 flex flex-col items-center py-24 my-16">
    <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
      <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <a href="#" class="block relative">
          <img alt="profil" src={Icon} class="mx-auto object-cover rounded-full h-20 w-20 "/>
        </a>
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
        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-around">
          <a class="link" href="https://github.com/WaiEnu" data-tippy-content="@github_handle"><svg class="h-6 fill-current text-gray-600 hover:text-indigo-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default About;
