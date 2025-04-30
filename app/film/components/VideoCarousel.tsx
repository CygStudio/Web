'use client'

import React, { useEffect, useState } from 'react'
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
    <main className="video-gallery">
      {videoData &&
        videoData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="video-section">
            <div className="container">
              <h1 className="text-center section-heading">{section.title}</h1>
            </div>
            <div className="container">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
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
                className="video-swiper"
              >
                <div slot="container-start" className="swiper-navigation-wrapper">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-pagination"></div>
                </div>
                
                {section.infoList.map((video, videoIndex) => (
                  <SwiperSlide key={videoIndex} className="video-slide">
                    <div className="video-slide-img">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-fancybox="gallery">
                        <img
                          className="card-img-top img-fluid"
                          src={video.img}
                          alt={`Video thumbnail ${video.id}`}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        ))}
    </main>
  )
}

export default VideoCarousel
