export default function VideoSection() {
  return (
    <section id="video" className="w-full h-[110vh] flex justify-around">
      <div className="box1 flex flex-col justify-center items-center">
        <h2 className="text-white mb-5 text-[2vw] text-shadow-black-sm">婚叫們送給熙歌的生日影片 Part1</h2>
        <iframe
          className="max-w-full w-[850px] h-[500px]"
          src="https://www.youtube.com/embed/l3Gkmro5piU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  )
}
