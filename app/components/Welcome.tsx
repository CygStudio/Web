import Image from 'next/image'
import StrokeText from '@/components/StrokeText'

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="block bg-[url('/images/rainbow.webp')] bg-center bg-cover bg-fixed antialiased supports-[background-attachment:fixed]:bg-fixed">
      <div className="flex flex-col text-white gap-4 font-semibold text-xl text-shadow-black-lg px-4 pt-8 container mx-auto">
        <h2 className="text-2xl">【熙歌工作室】</h2>
        <p>歡迎來到熙歌非官方粉絲群【熙歌工作室】！</p>
        <p>
          這裡是一個結識志同道合的熙歌粉絲的地方，可以一起觀看熙歌的直播、為熙歌應援，還可以一起瘋狂地購買熙歌的周邊商品！
        </p>
        <p>
          工作室還會時不時舉辦歌唱大會、跳熙歌太郎與其他群的聯動活動和工作室台詞回等，期待未來的活動中能夠見到你！
        </p>
        <p>
          無論你是新血婚叫還是資深婚叫，無論你是社恐還是外向的人，無論你來自哪個國家，我們都歡迎你的加入。加入熙歌工作室，讓我們一起成為守護熙歌公主殿下的騎士！
        </p>
        <p>婚叫 團結 強大!</p>

        <div className="flex justify-start items-center mt-2.5">
          <div className="w-2/5">
            <Image
              src="/images/cygpoint.webp"
              alt="cygpoint"
              width={600}
              height={400}
              className="block w-full"
            />
          </div>
          <a
            href="https://discord.gg/49ESKCCUfh"
            target="_blank"
            rel="noopener noreferrer"
            title="Join our Discord server"
            className="hover:scale-105">
            <Image
              src="/icon/dc.webp"
              alt="Discord icon"
              width={40}
              height={40}
              className="block w-full mt-12 ml-2 animate-wiggle shadow-[0_4px_24px_0_rgba(255,255,255,0.7)] rounded-full"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
