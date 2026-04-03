import React from 'react';
import thumb1 from '../asset/booksapi.png';
import thumb2 from '../asset/kerokeroweather.png';
import thumb3 from '../asset/priodictable.png';
import thumb4 from '../asset/p5co.png';
import thumb5 from '../asset/reactsample.png';
import thumb6 from '../asset/2019portfolio.png';

function Works() {
  return (

<div className="bg-blue-50 relative overflow-hidden h-full">

  <div className="container mx-auto mb-12 z-20 px-6 p-6 bg-white">
    <div className="mb-16 text-center">
      <h2 className="text-1xl text-base text-blue-600 font-semibold tracking-wide uppercase">
        Works
      </h2>
    </div>
    <div className="flex flex-wrap my-12 ">
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <a href="https://github.com/WaiEnu/books-api" rel="noopener noreferrer" target="_blank" className="w-full block h-full">
          <img alt="troublecentral" src={thumb1} className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-gray-800  text-xl font-medium mb-2">
                books-api
              </p>
              <p className="text-gray-600 font-light text-md">
                書籍検索アプリ。typescriptのフレームワークSvelteを使ってます。(github)
              </p>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <a href="https://waienu.github.io/kaeru_weather/" rel="noopener noreferrer" target="_blank" className="w-full block h-full">
          <img alt="kaeru_weather" src={thumb2} className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-gray-800  text-xl font-medium mb-2">
                天気予報
              </p>
              <p className="text-gray-600 font-light text-md">
                react＋weathermapApiの天気アプリ。地味に自作カエルフォントが出ます。
              </p>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <a href="https://waienu.github.io/periodic-table/" rel="noopener noreferrer" target="_blank" className="w-full block h-full">
          <img alt="periodic-table" src={thumb3} className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-gray-800  text-xl font-medium mb-2">
                web元素周期表
              </p>
              <p className="text-gray-600 font-light text-md">
                Vueで元素周期表。化学科出身っぽいのを作ってみたかったので製作。
              </p>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <a href="https://github.com/WaiEnu/p5co" rel="noopener noreferrer" target="_blank" className="w-full block h-full">
          <img alt="p5co" src={thumb4} className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-gray-800  text-xl font-medium mb-2">
                p5co
              </p>
              <p className="text-gray-600 font-light text-md">
                Vue＋Typescriptでアニメーションのテスト。せっかくなので電卓も作ってみました。(github)
              </p>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <a href="https://github.com/WaiEnu/react-sample" rel="noopener noreferrer" target="_blank" className="w-full block h-full">
          <img alt="reactsample" src={thumb5} className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-gray-800  text-xl font-medium mb-2">
                react sample
              </p>
              <p className="text-gray-600 font-light text-md">
                Next.js練習用プロジェクト。ダークモードもあります。(github)
              </p>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-8">
        <a href="https://waienu.github.io/2019_portofolio_cording/#works" rel="noopener noreferrer" target="_blank" className="w-full block h-full">
          <img alt="2019_portofolio" src={thumb6} className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-gray-800  text-xl font-medium mb-2">
                2019_portofolio_cording
              </p>
              <p className="text-gray-600 font-light text-md">
                2019以前のポートフォリオはこちらから
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
