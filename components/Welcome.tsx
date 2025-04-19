import Image from "next/image"

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="block h-[105vh] w-full relative bg-[url('/images/邀請.jpg')] bg-center bg-cover bg-fixed overflow-x-hidden antialiased"
    >
      <div className="cygpoint absolute w-2/5 bottom-0 left-[5%]">
        <Image
          src="/placeholder.svg?height=400&width=600&query=cygnus pointing"
          alt=""
          width={600}
          height={400}
          className="block w-full"
        />
      </div>
      <div className="welcomeblock flex flex-col absolute top-[18%] right-[9%]">
        <div className="welcome_letter w-[53rem]">
          <ul>
            <li className="list-none">
              <h1 className="text-white text-[3rem] font-[550] text-shadow-black-md">【熙歌工作室】</h1>
            </li>
            <li className="list-none h-4">
              <span className="space"></span>
              <span></span>
            </li>
            <li className="list-none">
              <h5 className="text-[2rem] text-white text-shadow-black-md">歡迎來到熙歌非官方粉絲群【熙歌工作室】！</h5>
            </li>
            <li className="list-none h-4">
              <span className="space"></span>
              <span></span>
            </li>
            <li className="list-none">
              <h5 className="text-[2rem] text-white text-shadow-black-md">
                這裡是一個結識志同道合的熙歌粉絲的地方，可以一起觀看熙歌的直播、為熙歌應援，還可以一起瘋狂地購買熙歌的周邊商品！
              </h5>
            </li>
            <li className="list-none h-4">
              <span className="space"></span>
              <span></span>
            </li>
            <li className="list-none">
              <h5 className="text-[2rem] text-white text-shadow-black-md">
                工作室還會時不時舉辦歌唱大會、跳熙歌太郎與其他群的聯動活動和工作室台詞回等，期待未來的活動中能夠見到你！
              </h5>
            </li>
            <li className="list-none h-4">
              <span className="space"></span>
              <span></span>
            </li>
            <li className="list-none">
              <h5 className="text-[2rem] text-white text-shadow-black-md">
                無論你是新血婚叫還是資深婚叫，無論你是社恐還是外向的人，無論你來自哪個國家，我們都歡迎你的加入。加入熙歌工作室，讓我們一起成為守護熙歌公主殿下的騎士！
              </h5>
            </li>
            <li className="list-none h-4">
              <span className="space"></span>
              <span></span>
            </li>
            <li className="list-none">
              <h5 className="text-[2rem] text-white text-shadow-black-md">婚叫 團結 強大!</h5>
            </li>
          </ul>
        </div>
        <div className="welcomedc flex justify-start w-12 mt-2.5">
          <nav>
            <ul className="flex list-none items-center">
              <li>
                <a href="https://discord.gg/49ESKCCUfh" target="_blank" rel="noreferrer">
                  <Image
                    src="/placeholder.svg?height=40&width=40&query=discord icon"
                    alt=""
                    width={40}
                    height={40}
                    className="block w-full"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
