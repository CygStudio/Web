'use client'

import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import React, { useState, useRef, useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

type VideoInfo = {
  id: string
  url: string
  img: string
}
type VideoData = {
  title: string
  infoList: VideoInfo[]
}

const baseSwiperParameters: SwiperProps = {
  initialSlide: 0,
  centeredSlides: true,
  loop: true,
  modules: [Navigation, Pagination, EffectCoverflow],
  effect: 'coverflow',
  coverflowEffect: {
    depth: 150,
    modifier: 2.5,
    rotate: 0,
    slideShadows: true,
    stretch: 50,
  },
  pagination: {
    dynamicBullets: true,
    dynamicMainBullets: 6,
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const VideoCarousel = ({ videoData }: { videoData: VideoData[] }) => {
  return (
    <main className="video-gallery py-8">
      {videoData &&
        videoData.map((section, sectionIndex) => {
          const maxSlidesPerView = baseSwiperParameters.slidesPerView as number

          type Pagination = Exclude<SwiperProps['pagination'], boolean | undefined>
          const pagination: Pagination = {
            ...(baseSwiperParameters.pagination as Pagination),
            renderBullet: function (index, className) {
              if (index < section.infoList.length) {
                return `<span class="${className}"></span>`
              }
              return ''
            },
          }
          type OnSlideChangeTransitionStart = NonNullable<
            SwiperProps['onSlideChangeTransitionStart']
          >
          const onSlideChangeTransitionStart: OnSlideChangeTransitionStart = _swiper => {
            const current = _swiper.realIndex % section.infoList.length
            const bullets = _swiper.pagination.bullets
            bullets[current].classList.add('swiper-pagination-bullet-active')
          }
          const swiperParameters: SwiperProps = {
            ...baseSwiperParameters,
            pagination,
            onSlideChangeTransitionStart,
          }

          const renderSlides = () => {
            let renderSlides = [...section.infoList]
            if (renderSlides.length < maxSlidesPerView * 2) {
              while (renderSlides.length < maxSlidesPerView * 2) {
                renderSlides = [...renderSlides, ...section.infoList]
              }
            }
            return renderSlides.map((video, videoIndex) => (
              <SwiperSlide key={`${video.id}-${videoIndex}`} className="video-slide h-auto">
                <VideoSlide video={video} />
              </SwiperSlide>
            ))
          }

          return (
            <section key={sectionIndex} className="video-section mb-16">
              <div className="container mx-auto px-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center section-heading relative inline-block mx-auto">
                  <span className="relative z-10">{section.title}</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 opacity-50 -z-10"></span>
                </h1>
              </div>
              <div className="container mx-auto px-4 relative">
                <Swiper {...swiperParameters} spaceBetween={20} className="">
                  <div
                    slot="container-start"
                    className="swiper-navigation-wrapper flex justify-end items-center mb-4 gap-2">
                    <div className="swiper-button-prev !w-10 !h-10 !rounded-full bg-white shadow-md !text-gray-800 after:!text-lg"></div>
                    <div className="swiper-button-next !w-10 !h-10 !rounded-full bg-white shadow-md !text-gray-800 after:!text-lg"></div>
                  </div>

                  {renderSlides()}

                  <div className="swiper-pagination !static mt-8"></div>
                </Swiper>
              </div>
            </section>
          )
        })}
    </main>
  )
}

const VideoSlide = ({ video }: { video: VideoInfo }) => (
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
)

export default VideoCarousel
