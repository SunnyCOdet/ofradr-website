"use client"

import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { Button } from "@/components/ui/button"
import Image from 'next/image'; // ✅ Correct
import Link from "next/link";
interface GlassNavbarProps {
  transparency?: number // 0-100
  tintColor?: string // hex color or rgba color
  blurIntensity?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

export default function GlassNavbar({
  transparency = 10,
  tintColor = "#000000",
  blurIntensity = "md",
}: GlassNavbarProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
    "3xl": "backdrop-blur-3xl",
  }

  // Function to detect if color is hex or rgba
  const isRgbaColor = (color: string): boolean => {
    return color.toLowerCase().startsWith("rgba(") || color.toLowerCase().startsWith("rgb(")
  }

  // Function to convert hex to rgba with transparency
  const hexToRgba = (hex: string, transparency: number): string => {
    const r = Number.parseInt(hex.slice(1, 3), 16)
    const g = Number.parseInt(hex.slice(3, 5), 16)
    const b = Number.parseInt(hex.slice(5, 7), 16)
    const alpha = transparency / 100
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  // Function to modify rgba transparency
  const modifyRgbaTransparency = (rgba: string, transparency: number): string => {
    // Parse rgba string
    const rgbaMatch = rgba.match(/rgba?$$(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?$$/)
    if (!rgbaMatch) return rgba

    const r = rgbaMatch[1]
    const g = rgbaMatch[2]
    const b = rgbaMatch[3]
    const alpha = transparency / 100

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  // Function to get background color based on input type
  const getBackgroundColor = (): string => {
    if (isRgbaColor(tintColor)) {
      return modifyRgbaTransparency(tintColor, transparency)
    } else {
      // Handle hex colors (existing logic)
      if (tintColor.startsWith("#")) {
        return hexToRgba(tintColor, transparency)
      } else {
        // Fallback for hex without #
        return hexToRgba(`#${tintColor}`, transparency)
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0  right-0 z-50 ${blurClasses[blurIntensity]} border-b border-white/20`}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
    >
      <div className="relative  mx-24 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-row gap-10 ">
            <div>
      <Image src="/logo.png" alt="Logo" width={70} height={70} />
    </div>
          

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors  tracking-tight duration-200">
              Home
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">
              Integrations
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">
              Docs
            </a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-200">
              Changelog
            </a>
          </div>
</div>
          {/* Right Side Actions */}
          <div className="absolute right-0 flex items-center space-x-4">
            
            <Link href="/getin"><ShimmerButton shimmerSize="0.1rem" shimmerDuration="1.5s"  className="px-4 py-2">
              <span className="text-sm font-medium">Sign in / Sign up</span>
            </ShimmerButton></Link>
          </div>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/50 text-sm hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
