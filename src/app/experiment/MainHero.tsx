"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { FlipWords } from '@/component/Loadliner'
import { Big_Shoulders_Display } from 'next/font/google'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import AISupportBadge from './Aibadge'
import Lottie from 'lottie-react'
const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
function MainHero() {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }
  return (
   <>
  <motion.div className="text-center flex flex-col z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[270px]" variants={containerVariants} initial="hidden" animate="visible">
         <div className='mt-5'><AISupportBadge text=" All systems ONLINE" /></div>
            <motion.h1
              className={`font-black text-[120px] md:text-[220px] leading-[110px] md:leading-[300px] text-white select-none ${bigShoulders.className}`}
              variants={itemVariants}
            >
              OFF*
            </motion.h1>
  
            <motion.h1
              className={`font-black text-[120px] md:text-[220px] leading-[100px] md:leading-[132px] text-[#ea3a59] select-none md:-mt-2 ${bigShoulders.className}`}
              variants={itemVariants}
            >
              RADAR
            </motion.h1>
             <motion.a
                      href="/offradar.zip"
                      className=""
                      download
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                        delay: 0.8,
                        duration: 0.8,
                      }}
                    >
                     <button className="bg-[#ea3a59] mt-14 ml-44 flex items-center justify-center gap-2 w-40 h-14 rounded-full text-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(234,58,89,0.6)] hover:shadow-[0_0_30px_rgba(234,58,89,0.8)]">
  <div className="w-8 h-8">
    <Lottie animationData={require("@/assets/fileicon.json")} loop={true} autoplay={true} />
  </div>
  <span>Download</span>
</button>      </motion.a>
          </motion.div>
</>
  )
            
}

export default MainHero