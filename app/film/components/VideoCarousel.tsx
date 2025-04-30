'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// 引入必要的 Swiper 樣式
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type VideoData = {
  title: string
  infoList: {
    id: string
    url: string
    img: string
  }[]
}[]

const VideoCarousel = ({ videoData }: { videoData: VideoData }) => {
  return (
    <main className="video-gallery py-8 bg-[#f0f0f5]">
      {videoData &&
        videoData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="video-section mb-16">
            <div className="container mx-auto px-4 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-center section-heading relative inline-block mx-auto">
                <span className="relative z-10">{section.title}</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 opacity-50 -z-10"></span>
              </h1>
            </div>
            <div className="container mx-auto px-4 relative">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                className="video-swiper py-4"
              >
                <div slot="container-start" className="swiper-navigation-wrapper flex justify-end items-center mb-4 gap-2">
                  <div className="swiper-button-prev !w-10 !h-10 !rounded-full bg-white shadow-md !text-gray-800 after:!text-lg"></div>
                  <div className="swiper-button-next !w-10 !h-10 !rounded-full bg-white shadow-md !text-gray-800 after:!text-lg"></div>
                </div>
                
                {section.infoList.map((video, videoIndex) => (
                  <SwiperSlide key={videoIndex} className="video-slide h-auto">
                    <div className="video-slide-img overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-white">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group"
                        data-fancybox="gallery">
                        <img
                          className="card-img-top img-fluid w-full h-auto aspect-video object-cover"
                          src={video.img}
                          alt={`Video thumbnail ${video.id}`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 4.066L16.9 10 8 15.934V4.066z" stroke="white" strokeWidth="2" fill="none" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
                
                <div className="swiper-pagination !static mt-8"></div>
              </Swiper>
            </div>
          </section>
        ))}
    </main>
  )
}

export default VideoCarousel
