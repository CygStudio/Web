'use client'

import { useRef } from 'react'
import Image from 'next/image'

export default function CygIntroduction() {
  return (
    <section id="cygintroduction" className="my-8 relative overflow-hidden">
      <div className="lg:absolute lg:-left-[40%] xl:-left-[30%] 2xl:left-0 h-full">
        <Image
          src="/images/熙歌網頁封面圖V3.webp"
          alt="熙歌介紹"
          width={800}
          height={800}
          className="lg:w-auto lg:h-full"
        />
      </div>
      <div className="hidden lg:block absolute top-[50%] -right-[20%] xl:-right-[10%] 2xl:right-0 translate-y-[-50%] h-full">
        <Image
          src="/images/介紹熙歌V2.webp"
          alt="熙歌介紹"
          width={800}
          height={800}
          className="w-auto h-full"
        />
      </div>
      <ul className="relative z-10 max-w-[640px] px-8 sm:px-12 py-16 bg-[url('/images/熙歌周表.webp')] bg-center bg-cover sm:bg-contain bg-no-repeat aspect-[2372/3575] mx-auto flex flex-col gap-1 justify-around">
        <ListItem title="名字">熙歌</ListItem>
        <ListItem title="綽號">歌～～ E歌 西瓜 阿公的夢中情人</ListItem>
        <ListItem title="精神體年齡">20</ListItem>
        <ListItem title="生日">5/20</ListItem>
        <ListItem title="語言">中文Ｏ 日文▲ English(Ｏ+▲)÷2</ListItem>
        <ListItem title="喜歡">彈琴 打遊戲 吃大餐 睡覺 庫洛米</ListItem>
        <ListItem title="喜歡的食物">肉 番茄醬＋水餃</ListItem>
        <ListItem title="喜歡的動畫">鋼之煉金術師 86</ListItem>
        <ListItem title="喜歡的東西">錢 婚叫</ListItem>
        <ListItem title="討厭">美樂蒂</ListItem>
        <ListItem title="特技">5速嘴 釣魚(被釣、自釣) 抬棺 結紮 人見人愛;花見花開 輕聲熙語 開船</ListItem>
        <ListItem title="出道日">2022/11/28</ListItem>
        <li className="list-none">
          <span className="word text-xl text-[#C5AC7E]">
            #迷因擔當 #極深空 台語擔當 <del>#氣質擔當</del>
          </span>
        </li>
        <li className="list-none h-4">
          <span className="space"></span>
          <span></span>
        </li>
        <ListItem title="繪師媽媽">
          RainFox{' '}
          <a
            href="https://twitter.com/AF_Rainfox"
            target="_blank"
            className="text-[#C5AC7E]"
            rel="noreferrer">
            ＠AF_RainFox
          </a>
        </ListItem>
        <ListItem title="建模媽媽">
          茂矢門{' '}
          <a
            href="https://twitter.com/mon_moya"
            target="_blank"
            className="text-[#C5AC7E]"
            rel="noreferrer">
            ＠Mon_moya
          </a>
        </ListItem>
        <ListItem title="字體設計">
          サヤカ{' '}
          <a
            href="https://twitter.com/laipeng16"
            target="_blank"
            className="text-[#C5AC7E]"
            rel="noreferrer">
            ＠laipeng16
          </a>
        </ListItem>
      </ul>
    </section>
  )
}

const ListItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <li className="list-none text-xl">
      <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
        {title}
      </span>
      <span className="word ml-2 text-[#C5AC7E]">{children}</span>
    </li>
  )
}
