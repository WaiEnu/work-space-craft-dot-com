import React from 'react';

function Timeline() {
  const right = {
    right: '50%'
  };
  const left = {
    left: '50%'
  };
  return (

<div className="relative flex overflow-hidden bg-white h-full">
  <div className="container mx-auto w-full relative z-10 flex flex-col items-center p-0 mb-24">

    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 border-indigo-400 absolute h-full border"
          style={right}></div>

        <div className="border-2-2 border-indigo-400 absolute h-full border"
          style={left}></div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-5/12 px-1 py-4 text-right">
            <p className="mb-3 text-base text-indigo-800">Mar, 2014</p>
            <h4 className="mb-3 font-bold text-2xl">青山学院理工学部化学・生命科学科卒業</h4>
            <ul className="m-0 p-0">
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                【卒業研究】</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                ◎遺伝子シミュレーション(VBAマクロ)</li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="order-1  w-5/12 px-1 py-4 text-left">
            <p className="mb-3 text-base text-indigo-800">Apr, 2014 - Jun, 2020</p>
            <h4 className="mb-3 font-bold text-2xl">システムインテグレーター勤務</h4>
            <p className="text-base leading-snug text-gray-800 text-opacity-100">
              システムエンジニア
            </p>
            <ul className="m-0 p-0">
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                【開発実績】</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                  ◎経理システム改修・保守(Java)</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                  ◎帳票管理システム保守(C#)</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                  ◎企業Webサイト改修・作成(HTML・CSS・Javascript)</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                  ◎Wordpressカスタマイズ,テーマ作成,プラグイン開発(PHP)</li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-5/12 px-1 py-4 text-right">
            <p className="mb-3 text-base text-indigo-800"> Oct, 2019 - Apr, 2020</p>
            <h4 className="mb-3 font-bold text-2xl">G's Academy Lab8期</h4>
            
            <ul className="m-0 p-0">
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                【卒業製作】</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                ◎<a href="https://troublecentral.herokuapp.com/about" rel="noopener noreferrer" target="_blank" className="border-b-2 border-blue-500">DNA Playground</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>

          <div className="order-1  w-5/12 px-1 py-4">
            <p className="mb-3 text-base text-indigo-800">Jul, 2020 - Apr, 2021</p>
            <h4 className="mb-3 font-bold text-2xl">医療系スタートアップ勤務</h4>
            <p className="text-base leading-snug text-gray-800 text-opacity-100">
              Webプログラマー(laravel/Vue)
            </p>
            <ul className="m-0 p-0">
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                【開発実績】</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
              医療系スタートアップ</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
              ◎薬局向けWebアプリケーション開発(laravel/Vue)</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                  ◎業務用PCのRPAデスクトップアプリケーション開発(electrons/python)</li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>

          <div className="order-1  w-5/12 px-1 py-4">
            <p className="mb-3 text-base text-indigo-800">jul, 2021 - Sep, 2023</p>
            <h4 className="mb-3 font-bold text-2xl">某SIer勤務</h4>
            <p className="text-base leading-snug text-gray-800 text-opacity-100">
              フロントエンドエンジニア
            </p>
            <ul className="m-0 p-0">
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                【開発実績】</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
              SIer</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
              ◎金融機関向けWebアプリケーション開発(React/typescript/node.js)</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                  セキュリティ監視ツールの検索画面UI,バックエンド開発</li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>

          <div className="order-1  w-5/12 px-1 py-4">
            <p className="mb-3 text-base text-indigo-800">Oct, 2023 - </p>
            <h4 className="mb-3 font-bold text-2xl">システム開発会社勤務</h4>
            <p className="text-base leading-snug text-gray-800 text-opacity-100">
              フロントエンドエンジニア
            </p>
            <ul className="m-0 p-0">
              <li className="text-base leading-snug text-gray-800 text-opacity-100">
                【開発実績】</li>
              <li className="text-base leading-snug text-gray-800 text-opacity-100"></li>
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
