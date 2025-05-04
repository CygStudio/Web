'use client'

import type React from 'react'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ScrollAnimation() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 text-[#293845]">
      {/* Row 1: Text left, Image right */}
      <AnimatedRow imagePosition="right" imageUrl="/images/QC.webp">
        <div className="flex flex-col justify-center gap-4">
          <p>Hi there , I’m </p>
          <h3 className="text-4xl font-bold drop-shadow-lg">
            Cygnus ch. 熙歌 <p className="inline text-base">(公主殿下)</p>
          </h3>
          <h5 className="text-xl drop-shadow-lg">
            誕生於遙遠銀河彼端的天鵝座⚫ 無聲卻深沉的黑洞。
            <br />
            想用音樂，將內心深處的情感（ㄏㄨㄣˋ ㄌㄨㄢˋ）傳遞給地球上所有人✨
          </h5>
        </div>
      </AnimatedRow>

      {/* Row 2: Image left, Text right */}
      <AnimatedRow imagePosition="left" imageUrl="/images/cyg.webp">
        <div className="flex flex-col justify-center gap-8">
          <p>Some info</p>
          <h2 className="text-3xl font-bold drop-shadow-lg">About Cygnus</h2>
          <p>
            是個愛打電動、彈琴唱歌、做迷因的渾沌黑洞； 話說，黑洞可以吞噬一切，想不想體驗看看呀♫{' '}
          </p>
          <h3 className="text-2xl font-bold drop-shadow-lg">清新健全早8台主</h3>
          <p>
            當你還未清醒時，打開熙歌早八台；當你通勤上班時，打開熙歌早八台；當你開會或老師在檢討考卷時，打開熙歌早八台。
            讓清新的一天，由熙歌早八台為你帶來更好的開始。
          </p>
          <h3 className="text-2xl font-bold drop-shadow-lg">Favourite quote</h3>
          <Blockquote>你去吃大便啦! 、 吼呦~~~~~~</Blockquote>
        </div>
      </AnimatedRow>

      {/* Row 3: Text left, Image right */}
      <AnimatedRow imagePosition="right" imageUrl="/images/pigeon.webp">
        <div className="flex flex-col justify-center gap-8">
          <h6 className="text-3xl font-bold drop-shadow-lg">
            (」・ω・)」熙歌！(／・ω・)／超可愛！
          </h6>
          <p className="letter">
            熙歌不僅擁有獨特的魅力，還非常用心地回覆每位婚叫在Twitter上的留言，並轉發婚叫們的作品。熙歌在直播中互動超好，並且用心準備有趣的內容，給觀眾滿滿的福利，還有笑聲非常討喜。
            <br />
            <br />
            熙歌是一位非常用心且充滿熱情的主播，對待婚叫的態度和互動方式都非常讓人感動，熙歌值得被更多人喜愛和支持。(熙歌就是婆啦!)
          </p>
          <div className="flex justify-between w-full">
            <nav>
              <ul className="flex">
                <li className="mr-1.5">
                  <a
                    href="https://twitter.com/CygnusXDFP"
                    target="_blank"
                    rel="noopener"
                    title="twitter">
                    <Image
                      src="./icon/twitter.webp"
                      alt="twitter"
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  </a>
                </li>
                <li className="mr-1.5">
                  <a
                    href="https://www.youtube.com/@CygnusXDFP"
                    target="_blank"
                    rel="noopener"
                    title="youtube">
                    <Image
                      src="./icon/yt.webp"
                      alt="youtube"
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  </a>
                </li>
                <li className="mr-1.5">
                  <Link href="/film" title="精華影片">
                    <Image
                      src="./icon/video.webp"
                      alt="精華影片"
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  </Link>
                </li>
                <li className='flex items-center'>
                  <p>{'<-這裡可以看到更多熙歌喔~'}</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </AnimatedRow>
    </section>
  )
}

interface AnimatedRowProps {
  imagePosition: 'left' | 'right'
  imageUrl: string
  children?: React.ReactNode
}

function AnimatedRow({ imagePosition, imageUrl, children }: AnimatedRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  })

  const progressY = [0, 0.4, 0.7, 1]

  // Calculate opacity based on scroll position
  const opacity = useTransform(scrollYProgress, progressY, [0, 1, 1, 0])

  // Calculate x position for rolling in and out effect
  // If image is on the right, it starts off-screen to the right (positive value)
  // and rolls out to the left (negative value)
  // If image is on the left, it's the opposite
  const x =
    imagePosition === 'right'
      ? useTransform(scrollYProgress, progressY, [500, 0, 0, 500])
      : useTransform(scrollYProgress, progressY, [-500, 0, 0, -500])

  // Add rotation effect - rotate in opposite direction of movement
  const rotate =
    imagePosition === 'right'
      ? useTransform(scrollYProgress, progressY, [90, 0, 0, 90])
      : useTransform(scrollYProgress, progressY, [-90, 0, 0, -90])

  const TextContent = () => <div className="flex flex-col justify-center h-full">{children}</div>

  const ImageContent = () => {
    const placeholderImageUrl = '/placeholder.svg?height=400&width=600'
    const finalImageUrl = imageUrl || placeholderImageUrl

    return (
      <motion.div
        style={{ opacity, x, rotate }}
        className="flex items-center justify-center h-full rounded-full overflow-hidden">
        <Image
          src={finalImageUrl || '/placeholder.svg'}
          alt="Animated Image"
          width={400}
          height={400}
          className="rounded-lg h-full"
        />
      </motion.div>
    )
  }

  return (
    <div ref={rowRef} className="flex flex-col md:flex-row items-center gap-8 py-16">
      {imagePosition === 'right' ? (
        <>
          <div className="w-full md:w-2/3">
            <TextContent />
          </div>
          <div className="w-full md:w-1/3 overflow-hidden">
            <ImageContent />
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/3 order-2 md:order-1 overflow-hidden">
            <ImageContent />
          </div>
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <TextContent />
          </div>
        </>
      )}
    </div>
  )
}

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className="relative italic p-8 bg-black/10 rounded-xl before:content-['“'] after:content-['”'] before:text-[#1eed86] after:text-[#1eed86] before:text-2xl after:text-2xl before:absolute before:left-4 before:top-2 after:absolute after:right-4 after:bottom-2">
      {children}
    </blockquote>
  )
}
