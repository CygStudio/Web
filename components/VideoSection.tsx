import StrokeText from '@/components/StrokeText'

export type VideoItem = { title: string; url: string }
export type Common = {
  videoList: VideoItem[]
  behindScenes: VideoItem[]
}

export const VideoSection = ({ videoItem }: { videoItem: VideoItem }) => {
  return (
    <section id="video" className="pt-5">
      <h2 className="font-bold mb-5 text-3xl text-center">
        <StrokeText text={videoItem.title} />
      </h2>
      <div className="max-w-[720px] mx-auto">
        <div className="iframe-container mx-auto">
          <iframe
            src={videoItem.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
