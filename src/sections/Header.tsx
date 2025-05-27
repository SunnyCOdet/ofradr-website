"use client"

import dynamic from "next/dynamic"

// Dynamically import DotLottieReact to prevent SSR issues
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => ({ default: mod.DotLottieReact })),
  { ssr: false }
)

export default function CenteredLottieNavbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-xl border-gray-800 h-22 flex items-center justify-center">
      <div className="w-40 h-40">
        <DotLottieReact
          src="https://lottie.host/bee4bcea-72dc-4f56-9e0a-01ba45a52487/rGPvCr5zNx.lottie"
          loop
          autoplay
        />
      </div>
    </nav>
  )
}