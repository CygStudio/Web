"use client"

import Image from "next/image"
import Link from "next/link"

export default function StandingSign() {
  return (
    <section id="standing_sign" className="block w-4/5 mx-auto">
      <div className="travel_notes relative">
        <h2 className="text-white text-[2vw] mb-5 ml-4 text-shadow-black-sm">熙遊記 Part2</h2>
        <Image
          src="/placeholder.svg?height=600&width=800&query=travel photo"
          alt=""
          width={800}
          height={600}
          className="block h-[40vw] w-[65%] ml-[18px] rounded-[10px]"
        />
        <p className="absolute w-[30%] top-[18%] right-0 text-[1.8vw] p-[1%] text-white bg-[#332323] border-[3px] border-[#C5AC7E] rounded-[10px]">
          三週年之際，女兒的紀念巴士正在這個島上行駛。 當時小姐說："如果有機會，我也想親眼看看"，
          但現在看來，她並沒有得到機會。相反，我們想出了一個計劃，
          帶我們的女兒Mochidori到這個島上旅行，在各個地方拍照，盡情享受島上的風景。
        </p>
      </div>
      <div className="w-full mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="overflow-hidden">
              <Link className="example-image-link block" href="#" data-lightbox="example-set">
                <Image
                  className="example-image block w-full scale-110 hover:scale-125 transition-transform duration-300 ease-out"
                  src={`/placeholder.svg?height=300&width=300&query=travel photo ${index + 1}`}
                  width={300}
                  height={300}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
