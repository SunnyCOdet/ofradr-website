"use client"

import { useState, useEffect } from "react"

// Add this line to import Google Fonts
const GoogleFonts = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
)

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show main text animation
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 800)

    // Show subtext
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true)
    }, 1500)

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Start fade out immediately when progress reaches 100%
          setTimeout(() => {
            setFadeOut(true)
            // Call the completion callback after fade starts
            setTimeout(() => {
              onLoadingComplete?.()
            }, 1000) // Wait for fade animation
          }, 500) // Small delay to show 100% briefly
          return 100
        }
        return prev + Math.random() * 3 + 1
      })
    }, 150)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(subtextTimer)
      clearInterval(progressInterval)
    }
  }, [onLoadingComplete])

  return (
    <div
      className={`min-h-screen bg-red-500 flex items-center justify-center overflow-hidden relative transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <GoogleFonts />
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-0.5 bg-black/30 animate-pulse"
          style={{ animationDuration: "2s" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/30 animate-pulse"
          style={{ animationDuration: "2s", animationDelay: "1s" }}
        />
      </div>

      <div className="text-center z-10 w-full max-w-4xl px-8">
        {/* Subtext */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-black/80 text-lg font-medium tracking-wider">• SYSTEM INITIALIZING •</p>
        </div>

        {/* Main OFF* RADAR text */}
        <div
          className={`transition-all duration-2000 ease-out ${
            showText ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-110 translate-y-8"
          }`}
        >
          <h1
            className="text-black font-black text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter drop-shadow-lg"
            style={{ fontFamily: "Big Shoulders Display, sans-serif" }}
          >
            OFF*
          </h1>
          <h1
            className="text-black font-black text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter -mt-4 drop-shadow-lg"
            style={{ fontFamily: "Big Shoulders Display, sans-serif" }}
          >
            RADAR
          </h1>
        </div>

        {/* Loading progress */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1500 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto mb-4">
            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
              <div className="h-full bg-black transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Progress percentage */}
          <div className="text-black text-2xl font-bold tabular-nums mb-4">{Math.floor(progress)}%</div>

          {/* Loading text */}
          <div className="text-black/70 text-lg font-medium tracking-widest">
            {progress < 30 && "LOADING CORE SYSTEMS..."}
            {progress >= 30 && progress < 60 && "INITIALIZING MODULES..."}
            {progress >= 60 && progress < 90 && "COMPILING CODE..."}
            {progress >= 90 && progress < 100 && "FINALIZING..."}
            {progress >= 100 && "COMPLETE"}
          </div>
        </div>

        {/* Loading dots animation */}
        <div className={`mt-8 transition-all duration-1000 delay-2000 ${showText ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-black rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-red-600 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-red-600 to-transparent z-20" />
    </div>
  )
}
