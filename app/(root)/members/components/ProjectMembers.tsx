'use client'

import { useRef } from 'react'
import Image from 'next/image'

export function ProjectMembers() {
  return (
    <section id="cygintroduction" className="py-8 relative overflow-hidden">
      <ul className="relative z-10 max-w-[640px] px-8 sm:px-12 py-16 bg-[url('/images/熙歌周表.webp')] bg-center bg-cover sm:bg-contain bg-no-repeat aspect-[2372/3575] mx-auto flex flex-col gap-1 justify-around">
        <ListItem title="【影片拍攝參與人員】" />
        <ListItem title="北部">DJ DÄZEE、Owen52、梓Azusa、歐咖吶哋島油、蛋蛋王幽靈、Euryka尤里卡、哭麻糬(クマ吉)、葉祤[語]、派大客、白毛BaimoRay、哈斯塔、婚叫E、ラスキ浮雲、棠Tang、落羽</ListItem>
        <ListItem title="南部">高岡、小肉桂(。‧ω‧。)、建錡ゲンキ、六巡、00展、啊戊、非洲皓皓(暴雨旋風)、司馬冢虎、曾水餃、雲淵、蘇小龜、涼月(Suzutsuki Lin)、亞允 認真鋼鐵人、幻月、蕾蕾</ListItem>
        <ListItem title="中部">歐咖吶哋島油、維婚叫、排氣管管</ListItem>

        <ListItem title="【改編曲參與人員】" />

        <ListItem title="Vocal">梓Azusa、伊祁青歲、高岡、哈斯塔、蛋蛋王幽靈、阿飛、Euryka尤里卡、哭麻糬(クマ吉)</ListItem>
        <ListItem title="改詞">雪楓</ListItem>
        <ListItem title="混音">DJ DÄZEE</ListItem>
      </ul>
    </section>
  )
}

const ListItem = ({ title, children }: { title: string; children?: React.ReactNode }) => {
  return (
    <li className="list-none text-xl mb-4">
      <span className="title inline-block px-1 bg-[#C5AC7E] text-[#1f1213] font-[550] border-2 border-x-4 border-[#C5AC7E] rounded-[10px]">
        {title}
      </span>
      <span className="word ml-2 text-[#C5AC7E]">{children}</span>
    </li>
  )
}
