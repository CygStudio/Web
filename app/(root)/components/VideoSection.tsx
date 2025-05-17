import StrokeText from '@/components/StrokeText'

type VideoItem = { title: string; url: string }
type Common = {
  videoList: VideoItem[]
}

export default async function VideoSectionList() {
  const items: Common = await fetch('https://cygstudio.github.io/asset/common')
    .then(res => res.json())
    .catch(() => {
      return { videoList: [] }
    })

  return items.videoList.map((item, index) => (
    <VideoSection key={index} videoItem={item} />
  ))
}

const VideoSection = ({ videoItem }: { videoItem: VideoItem }) => {
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
