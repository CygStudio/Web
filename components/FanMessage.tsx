import Image from "next/image"
import Link from "next/link"

export default function FanMessage() {
  return (
    <section
      id="fanmessage"
      className="block relative z-[700] overflow-hidden h-[110vh] bg-[url('/images/message_brg.png')] w-full bg-center bg-cover"
    >
      <h3 className="absolute text-[30px] text-white ml-[30px] mt-5 text-shadow-black-sm">婚叫想對熙歌說的話 Part3</h3>
      <div className="flex justify-end space-x-4 mr-20 p-2.5 h-[1500px] overflow-hidden">
        <div className="pic w-[400px]">
          <div className="marquee-container h-[1500px] w-[400px] overflow-hidden">
            {Array.from({ length: 7 }).map((_, index) => (
              <Link key={index} href="/message">
                <Image
                  src={`/placeholder.svg?height=400&width=400&query=fan message ${index + 1}`}
                  width={400}
                  height={400}
                  alt=""
                  className="mb-5 block w-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="picture w-[400px]">
          <div className="marquee-container-up h-[1500px] w-[400px] overflow-hidden">
            {Array.from({ length: 7 }).map((_, index) => (
              <Link key={index} href="/message">
                <Image
                  src={`/placeholder.svg?height=400&width=400&query=fan message ${index + 8}`}
                  width={400}
                  height={400}
                  alt=""
                  className="mb-5 block w-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
