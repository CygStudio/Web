import StrokeText from '@/components/StrokeText'
import { VideoSection, type Common } from '@/components/VideoSection'

export default async function VideoSectionList() {
  const items: Common = await fetch('https://cygasset.sid.tw/common')
    .then(res => res.json())
    .catch(() => {
      return { behindScenes: [] }
    })

  return items.behindScenes.map((item, index) => <VideoSection key={index} videoItem={item} />)
}
