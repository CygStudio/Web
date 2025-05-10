import StrokeText from '@/components/StrokeText'

export default function VideoSection() {
  return (
    <section id="video">
      <h2 className="font-bold my-5 text-3xl text-center">
        <StrokeText text="慶生影片" />
      </h2>
      <div className="max-w-[720px] mx-auto">
        <div className="iframe-container mx-auto">
          <iframe
            src="https://www.youtube.com/embed/E739HotYZ4k"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
