'use client'

import Image from 'next/image'
import StrokeText from '@/components/StrokeText'
import { motion } from 'framer-motion'

export default function NewFan() {
  return (
    <section id="newfan" className="flex flex-col lg:flex-row items-center justify-center gap-10 min-h-screen">
      <motion.div
        id="chick"
        className="w-1/2 md:w-1/3 rounded-full overflow-hidden"
        animate={{ rotate: [0, 5, 0] }}
        whileHover={{ rotate: [0, 5, 0], transition: { repeat: Infinity, duration: 0.05 } }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <Image
          src="/images/心雞拉奈.webp"
          alt=""
          width={400}
          height={400}
          className="block w-full rounded-[10px]"
        />
      </motion.div>

      <div className="">
        <h4 className="text-5xl sm:text-[70px] font-bold">
          <div>
            <StrokeText text="什麼!!!!!" strokeColor="white" textColor="#293845" />
          </div>
          <div>
            <StrokeText text="你竟然是新觀眾!!!" strokeColor="white" textColor="#293845" />
          </div>
        </h4>
      </div>
    </section>
  )
}
