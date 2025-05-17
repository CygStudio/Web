import React from 'react'
import VideoCarousel from './components/VideoCarousel'

export default async function FilmPage() {
  const items = await fetch('https://cygstudio.github.io/asset/video')
    .then(res => res.json())
    .catch(() => [])
  
  return (
    <section className='container mx-auto'>
      <h1 className="text-4xl font-bold text-center mb-8 container mx-auto px-4 py-12">
        熙歌影片專區
      </h1>
      <VideoCarousel videoData={items} />
    </section>
  )
}
