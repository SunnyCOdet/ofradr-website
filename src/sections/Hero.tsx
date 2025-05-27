"use client"

import { useState, useEffect } from "react"
import { FlipWords } from "@/component/Loadliner"
import { Big_Shoulders_Display } from 'next/font/google'
import dynamic from "next/dynamic"

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <section className="flex flex-col bg-black items-center justify-center">
      <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-center text-2xl mt-10 text-yellow-200">
            &#9679; <span className="text-white">My model is </span>
            <FlipWords words={["Undetectable", "Smarter", "F*cking fast"]} />
          </div>
          <h1
            className={`font-black text-[#e0f11f] select-none ${bigShoulders.className}`}
            style={{
              fontSize: "220px",
              fontWeight: 900,
              letterSpacing: "-2.4px",
              lineHeight: "292px",
            }}
          >
            MONKEY
          </h1>
          <h1
            className={`font-black text-[#e0f11f] select-none -mt-2 ${bigShoulders.className}`}
            style={{
              fontSize: "250px",
              fontWeight: 900,
              letterSpacing: "-2.4px",
              lineHeight: "132px",
            }}
          >
            CODER
          </h1>
        </div>
      </div>
      <button className="bg-[rgba(224,241,31,255)] absolute mt-[680px] flex items-center justify-center gap-2 w-40 h-14 rounded-full text-xl">
        <div className="w-8 h-8">
          {isMounted && (
            <Lottie 
              animationData={require("@/assets/fileicon.json")} 
              loop={true} 
              autoplay={true} 
            />
          )}
        </div>
        <span>Download</span>
      </button>
    </section>
  )
}