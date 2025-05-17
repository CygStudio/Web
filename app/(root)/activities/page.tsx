import React from 'react'
import ActivitiesMasonry from './components/ActivitiesMasonry'

export default async function ActivitiesPage() {
  return (
    <section className="container mx-auto container my-8">
      <div className="text-[#293845] text-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold">工作室活動</h1>
        <p className="text-xl font-bold">
          無論你是新加入的婚叫還是資深的婚叫，無論你是社恐還是外向的人，無論你來自哪個國家，我們都歡迎你的加入。
          <br />
          加入熙歌工作室，讓我們一起成為守護熙歌公主殿下的騎士！
        </p>
        <div className="flex-1" />
      </div>
      <ActivitiesMasonry />
    </section>
  )
}
