"use client"

interface AISupportBadgeProps {
  text?: string
  className?: string
}

export default function AISupportBadge({
  text = "Our AI generates support at all times.",
  className = "",
}: AISupportBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${className}`}
      style={{
        backgroundColor: "rgba(127, 29, 29, 0.9)", // Dark red/burgundy with transparency
        borderColor: "rgba(185, 28, 28, 0.6)", // Slightly lighter red border
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Blinking Pink Orb with Glow */}
      <div
        className="relative w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#ea3a59", // Pink color
          boxShadow: `
      0 0 4px #ea3a59,
      0 0 8px #ea3a59,
      0 0 12px #ea3a59,
      0 0 16px #ea3a59
    `,
          animation: "smoothBlink 2s ease-in-out infinite",
        }}
      >
        {/* Additional glow layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: "#ea3a59",
            filter: "blur(1px)",
            animation: "glowPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Text */}
      <span className="text-white text-sm font-medium whitespace-nowrap">{text}</span>

      <style jsx>{`
  @keyframes smoothBlink {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.9);
    }
  }
  
  @keyframes glowPulse {
    0%, 100% {
      opacity: 0.8;
      transform: scale(1.2);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.5);
    }
  }
`}</style>
    </div>
  )
}
