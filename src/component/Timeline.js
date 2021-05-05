import React from 'react';

function Timeline() {
  const right = {
    right: '50%'
  };
  const left = {
    left: '50%'
  };
  return (

<div class="relative flex overflow-hidden bg-white h-full">
  <div class="container mx-auto w-full relative z-10 flex flex-col items-center p-0 mb-24">

    <div class="container mx-auto w-full h-full">
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div class="border-2-2 border-indigo-400 absolute h-full border"
          style={right}></div>
        <div class="border-2-2 border-indigo-400 absolute h-full border"
          style={left}></div>
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="order-1 w-5/12 px-1 py-4 text-right">
            <p class="mb-3 text-base text-indigo-800">Mar, 2014</p>
            <h4 class="mb-3 font-bold text-2xl">青山学院理工学部化学・生命科学科卒業</h4>
            <ul class="m-0 p-0">
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                【卒業研究】</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                ◎遺伝子シミュレーション(VBAマクロ)</li>
            </ul>
          </div>
        </div>
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="order-1  w-5/12 px-1 py-4 text-left">
            <p class="mb-3 text-base text-indigo-800">Apr, 2014 - Jun, 2020</p>
            <h4 class="mb-3 font-bold text-2xl">システムインテグレーター勤務</h4>
            <p class="text-base leading-snug text-gray-50 text-opacity-100">
              システムエンジニア
            </p>
            <ul class="m-0 p-0">
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                【開発実績】</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                  ◎経理システム改修・保守(Java)</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                  ◎帳票管理システム保守(C#)</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                  ◎企業Webサイト改修・作成(HTML・CSS・Javascript)</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                  ◎Wordpressカスタマイズ,テーマ作成,プラグイン開発(PHP)</li>
            </ul>
          </div>
        </div>
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="order-1 w-5/12 px-1 py-4 text-right">
            <p class="mb-3 text-base text-indigo-800"> Oct, 2019 - Apr, 2020</p>
            <h4 class="mb-3 font-bold text-2xl">G's Academy Lab8期</h4>
            
            <ul class="m-0 p-0">
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                【卒業製作】</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                ◎<a href="https://troublecentral.herokuapp.com/about" rel="noopener noreferrer" target="_blank" class="border-b-2 border-blue-500">DNA Playground</a></li>
            </ul>
          </div>
        </div>

        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>

          <div class="order-1  w-5/12 px-1 py-4">
            <p class="mb-3 text-base text-indigo-800">Jul, 2020 - Apr, 2021</p>
            <h4 class="mb-3 font-bold text-2xl">医療系スタートアップ勤務</h4>
            <p class="text-base leading-snug text-gray-50 text-opacity-100">
              Webプログラマー(laravel/Vue)
            </p>
            <ul class="m-0 p-0">
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                【開発実績】</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
              プレカル</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
              ◎薬局向けWebアプリケーション開発(laravel/Vue)</li>
              <li class="text-base leading-snug text-gray-50 text-opacity-100">
                  ◎業務用PCのRPAデスクトップアプリケーション開発(electrons/python)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

  );
};

export default Timeline;
