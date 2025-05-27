"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PlatformItem {
  id: string
  number: string
  name: string
  icon: string
  status: "Undetectable" | "Conditional"
}

const platforms: PlatformItem[] = [
  {
    id: "1",
    number: "002",
    name: "Hackerrank",
    icon: "/placeholder.svg?height=24&width=24",
    status: "Undetectable",
  },
  {
    id: "2",
    number: "003",
    name: "Codesignal",
    icon: "/placeholder.svg?height=24&width=24",
    status: "Undetectable",
  },
  {
    id: "3",
    number: "004",
    name: "CoderPad",
    icon: "/placeholder.svg?height=24&width=24",
    status: "Undetectable",
  },
  {
    id: "4",
    number: "005",
    name: "Chime",
    icon: "/placeholder.svg?height=24&width=24",
    status: "Conditional",
  },
  {
    id: "5",
    number: "006",
    name: "Microsoft Teams",
    icon: "/placeholder.svg?height=24&width=24",
    status: "Undetectable",
  },
  {
    id: "6",
    number: "007",
    name: "Google Meet",
    icon: "/placeholder.svg?height=24&width=24",
    status: "Undetectable",
  },
]

export default function PlatformDashboard() {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  const toggleRow = (platformId: string) => {
    const newExpandedRows = new Set(expandedRows)
    if (newExpandedRows.has(platformId)) {
      newExpandedRows.delete(platformId)
    } else {
      newExpandedRows.add(platformId)
    }
    setExpandedRows(newExpandedRows)
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 text-white">
      {/* Platform List */}
      <div className="divide-y divide-gray-800">
        {platforms.map((platform, index) => {
          const isExpanded = expandedRows.has(platform.id)
          return (
            <div key={platform.id} className="border-b border-gray-800 last:border-b-0">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-800/50 transition-colors">
                {/* Left Section: Number, Icon, Name */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 font-mono text-sm w-8">{platform.number}</span>
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src={platform.icon || "/placeholder.svg"}
                      alt={`${platform.name} icon`}
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium text-base">{platform.name}</span>
                </div>

                {/* Right Section: Status Badge and Dropdown */}
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      platform.status === "Undetectable"
                        ? "bg-green-600/20 text-green-400 border border-green-600/30"
                        : "bg-yellow-600/20 text-yellow-400 border border-yellow-600/30"
                    }`}
                  >
                    {platform.status}
                  </span>
                  <button
                    onClick={() => toggleRow(platform.id)}
                    className="p-1 hover:bg-gray-700 rounded transition-colors"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="px-6 pb-4 bg-gray-800/30">
                  <div className="pl-12 space-y-2">
                    <div className="text-sm text-gray-300">
                      <span className="text-gray-400">Platform Type:</span>{" "}
                      {platform.name === "Microsoft Teams" ||
                      platform.name === "Google Meet" ||
                      platform.name === "Chime"
                        ? "Video Conferencing"
                        : "Coding Assessment"}
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="text-gray-400">Detection Method:</span>{" "}
                      {platform.status === "Undetectable"
                        ? "Advanced bypass techniques applied"
                        : "Limited detection avoidance"}
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="text-gray-400">Last Updated:</span> {new Date().toLocaleDateString()}
                    </div>
                    {platform.status === "Conditional" && (
                      <div className="text-sm text-yellow-400 mt-2">
                        <span className="text-gray-400">Note:</span> This platform requires specific configuration for
                        optimal performance.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Warning Message */}
      <div className="px-6 py-4 border-t border-gray-800">
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-yellow-400 font-medium">Warning:</span> Some MacOS versions are experiencing a WebRTC
          issue that breaks Interview Coder. If you&apos;re on MacOS, please{" "}
          <span className="text-blue-400 underline cursor-pointer hover:text-blue-300">
            make sure you opt out of basic checks
          </span>{" "}
          to make sure you&apos;re good to go.
        </p>
      </div>
    </div>
  )
}
