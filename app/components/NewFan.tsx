import Image from "next/image"

export default function NewFan() {
  return (
    <section id="newfan" className="block relative h-screen w-full">
      <div id="chick" className="shake shake-rotate absolute w-1/4 top-[31%] left-[13%]">
        <Image
          src="/placeholder.svg?height=400&width=400&query=cute chick character"
          alt=""
          width={400}
          height={400}
          className="block w-full rounded-[10px]"
        />
      </div>
      <div className="newfandialogbox absolute w-1/5 top-1/4 left-[39%]">
        <Image
          src="/placeholder.svg?height=200&width=300&query=dialog box"
          alt=""
          width={300}
          height={200}
          className="block w-full"
        />
      </div>
      <div className="whatword absolute top-[43%] left-[43%]">
        <h4 className="text-[6.5vw] text-white text-stroke-black-3 text-shadow-black-sm">什麼!!!!!</h4>
      </div>
      <div className="newfanword absolute top-[58%] left-[43%]">
        <h4 className="text-[6.5vw] text-white text-stroke-black-3 text-shadow-black-sm">你竟然是新觀眾!!!</h4>
      </div>
    </section>
  )
}
