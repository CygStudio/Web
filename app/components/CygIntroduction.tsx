"use client"

import { useRef } from "react"
import Image from "next/image"

export default function CygIntroduction() {
  const introRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={introRef} id="cygintroduction" className="block h-[110vh] w-full relative">
      <div className="cygintroduction absolute w-[26%] top-[14%] left-[22%]">
        <Image
          src="/placeholder.svg?height=400&width=300&query=cygnus introduction"
          alt=""
          width={300}
          height={400}
          className="block w-full"
        />
      </div>
      <div className="weektable flex flex-col absolute top-[16%] right-[28.8%]">
        <div className="weektablebackground flex flex-col items-start h-[72vh] w-[48vh] bg-[url('/images/熙歌周表.png')] bg-center bg-cover antialiased">
          <ul className="w-[46vh] pl-[9%] pt-[14%]">
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                名字
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 熙歌</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                綽號
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 歌～～ E歌 西瓜 阿公的夢中情人</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                精神體年齡
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 20</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                生日
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 5/20</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                語言
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 中文Ｏ 日文▲ English(Ｏ+▲)÷2</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                喜歡
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 彈琴 打遊戲 吃大餐 睡覺 庫洛米</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                喜歡的食物
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 肉 番茄醬＋水餃</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                喜歡的動畫
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 鋼之煉金術師 86</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                喜歡的東西
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 錢 婚叫</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                討厭
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 美樂蒂</span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                特技
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]">
                {" "}
                5速嘴 釣魚(被釣、自釣) 抬棺 結紮 人見人愛;花見花開 輕聲熙語 開船
              </span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                出道日
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]"> 2022/11/28</span>
            </li>
            <li className="list-none">
              <span className="word text-[2.1vh] text-[#C5AC7E]">
                #迷因擔當 #極深空 台語擔當 <del>#氣質擔當</del>
              </span>
            </li>
            <li className="list-none h-4">
              <span className="space"></span>
              <span></span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                繪師媽媽
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]">
                {" "}
                RainFox{" "}
                <a href="https://twitter.com/AF_Rainfox" target="_blank" className="text-[#C5AC7E]" rel="noreferrer">
                  ＠AF_RainFox
                </a>
              </span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                建模媽媽
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]">
                {" "}
                茂矢門{" "}
                <a href="https://twitter.com/mon_moya" target="_blank" className="text-[#C5AC7E]" rel="noreferrer">
                  ＠Mon_moya
                </a>
              </span>
            </li>
            <li className="list-none">
              <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] text-[2.1vh] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
                字體設計
              </span>
              <span className="word ml-2 text-[2.1vh] text-[#C5AC7E]">
                {" "}
                サヤカ{" "}
                <a href="https://twitter.com/laipeng16" target="_blank" className="text-[#C5AC7E]" rel="noreferrer">
                  ＠laipeng16
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="introductionicon flex justify-start w-2/5 mt-2">
          <nav>
            <ul className="flex list-none items-center">
              <li className="mr-[5px]">
                <a href="https://twitter.com/CygnusXDFP" target="_blank" rel="noreferrer">
                  <Image
                    src="/placeholder.svg?height=40&width=40&query=twitter icon"
                    alt=""
                    width={40}
                    height={40}
                    className="block w-full"
                  />
                </a>
              </li>
              <li className="mr-[5px]">
                <a href="https://www.youtube.com/@CygnusXDFP" target="_blank" rel="noreferrer">
                  <Image
                    src="/placeholder.svg?height=40&width=40&query=youtube icon"
                    alt=""
                    width={40}
                    height={40}
                    className="block w-full"
                  />
                </a>
              </li>
              <li className="mr-[5px]">
                <a href="#">
                  <Image
                    src="/placeholder.svg?height=40&width=40&query=social media icon"
                    alt=""
                    width={40}
                    height={40}
                    className="block w-full"
                  />
                </a>
              </li>
              <li className="mr-[5px]">
                <a href="/film">
                  <Image
                    src="/placeholder.svg?height=40&width=40&query=film icon"
                    alt=""
                    width={40}
                    height={40}
                    className="block w-full"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
