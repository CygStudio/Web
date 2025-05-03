import Image from 'next/image'
import Link from 'next/link'
import StrokeText from '@/components/StrokeText'

export default async function StandingSign() {
  type Item = {
    date: string
    name: string
    dc: string
    avatar: string
    image: string
    info: string
  }
  const items: Item[] = await fetch('https://cygstudio.github.io/asset/travel')
    .then(res => res.json())
    .catch(() => [])

  const ASSET_HOST = 'https://cygstudio.github.io/asset/'

  return (
    <section id="standing_sign" className="block max-w-5xl w-4/5 mx-auto my-4">
      <div className="travel_notes relative">
        <h2 className="font-bold my-5 text-3xl text-center">
          <StrokeText text="婚叫 團結 強大 - 熙遊記" />
        </h2>

        <Image
          src="https://www.xtremedeepfieldproject.com/images/%E7%86%99%E9%81%8A%E8%A8%98%E5%B0%81%E9%9D%A2.jpg"
          alt=""
          width={1920}
          height={1080}
          className="block w-full rounded-lg"
        />
      </div>
      <div className="w-full mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <Link className="example-image-link block" href="#" data-lightbox="example-set">
                <Image
                  className="example-image block w-full scale-110 hover:scale-125 transition-transform duration-300 ease-out"
                  src={ASSET_HOST + item.image}
                  width={300}
                  height={300}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
