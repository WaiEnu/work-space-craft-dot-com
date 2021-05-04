import React from 'react';
import thumb1 from '../asset/blog1.jpeg';
import thumb2 from '../asset/blog1.jpeg';
import thumb3 from '../asset/blog1.jpeg';
import thumb4 from '../asset/blog1.jpeg';
import thumb5 from '../asset/blog1.jpeg';
import thumb6 from '../asset/blog1.jpeg';

function Works() {
  return (

<div class="bg-blue-50 relative overflow-hidden h-full">
  <div class="inset-0 bg-white opacity-25 absolute">
  </div>


  <div class="container mx-auto z-20 px-6 p-6 bg-white dark:bg-gray-800">
    <div class="mb-16 text-center">
      <h2 class="text-1xl text-base text-blue-600 font-semibold tracking-wide uppercase">
        Portfolio
      </h2>
    </div>
    <div class="flex flex-wrap my-12 dark:text-white">
      <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
        <a href="https://troublecentral.herokuapp.com/about" class="w-full block h-full">
          <img alt="blog photo" src={thumb1} class="max-h-40 w-full object-cover"/>
          <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                DNA Playground
              </p>
              <p class="text-gray-600 dark:text-gray-500 font-light text-md">
                G's Academy Lab8期 卒業制作。DNAの暗号でクイズができる。
              </p>
          </div>
        </a>
      </div>
      <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
        <a href="https://waienu.github.io/kaeru_weather/" class="w-full block h-full">
          <img alt="blog photo" src={thumb2} class="max-h-40 w-full object-cover"/>
          <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                天気予報
              </p>
              <p class="text-gray-600 dark:text-gray-500 font-light text-md">
                react＋weathermapApiの天気アプリ。地味に自作カエルフォントが出ます。
              </p>
          </div>
        </a>
      </div>
      <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
        <a href="https://waienu.github.io/periodic-table/" class="w-full block h-full">
          <img alt="blog photo" src={thumb3} class="max-h-40 w-full object-cover"/>
          <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                web元素周期表
              </p>
              <p class="text-gray-600 dark:text-gray-500 font-light text-md">
                Vueで元素周期表。化学科出身っぽいのを作ってみたかったので製作。
              </p>
          </div>
        </a>
      </div>
      <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
        <a href="https://github.com/WaiEnu/p5co" class="w-full block h-full">
          <img alt="blog photo" src={thumb4} class="max-h-40 w-full object-cover"/>
          <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              p5co
              </p>
              <p class="text-gray-600 dark:text-gray-500 font-light text-md">
                Vue＋Typescriptでアニメーションのテスト。せっかくなので電卓も作ってみた。(github)
              </p>
          </div>
        </a>
      </div>
      <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
        <a href="https://github.com/WaiEnu/react-sample" class="w-full block h-full">
          <img alt="blog photo" src={thumb5} class="max-h-40 w-full object-cover"/>
          <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                react sample
              </p>
              <p class="text-gray-600 dark:text-gray-500 font-light text-md">
                Next.js練習用プロジェクト。ダークモードもあります。(github)
              </p>
          </div>
        </a>
      </div>
      <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
        <a href="https://waienu.github.io/2019_portofolio_cording/#works" class="w-full block h-full">
          <img alt="blog photo" src={thumb6} class="max-h-40 w-full object-cover"/>
          <div class="bg-white dark:bg-gray-800 w-full p-4">
              <p class="text-indigo-500 text-md font-medium">
              </p>
              <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                2019_portofolio_cording
              </p>
              <p class="text-gray-600 dark:text-gray-500 font-light text-md">
                以前のポートフォリオはこちらから
              </p>
          </div>
        </a>
      </div>
    </div>
  </div>

</div>

  );
}

export default Works;
