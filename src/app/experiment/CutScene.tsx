"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [showText, setShowText] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)

  useEffect(() => {
    // Trigger main text animation
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 500)

    // Trigger subtext animation
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true)
    }, 2000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(subtextTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-300 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse opacity-25"></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-red-500/10 animate-pulse"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "3s",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="text-center z-10">
        {/* Subtext */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-red-400 text-lg font-medium tracking-wider">• Code Beyond Detection •</p>
        </div>

        {/* Main MONKEYCODER text */}
        <div
          className={`transition-all duration-2000 ease-out ${
            showText ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-110 translate-y-8"
          }`}
        >
          <h1 className="text-red-500 font-black text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tighter">
            MONKEY
          </h1>
          <h1 className="text-red-500 font-black text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tighter -mt-4">
            CODER
          </h1>
        </div>

        {/* Animated underline */}
        <div
          className={`mt-8 transition-all duration-1500 delay-1000 ${
            showText ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto max-w-md"></div>
        </div>

        {/* Additional animated text */}
        <div
          className={`mt-12 transition-all duration-1000 delay-2000 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-red-300 text-xl font-light tracking-widest">INITIALIZING...</p>
        </div>
      </div>

      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-20"></div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse opacity-30"></div>
      </div>
    </div>
  )
}
