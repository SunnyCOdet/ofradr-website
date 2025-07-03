"use client"
import { cn } from "@/lib/utils"
import { motion, type Transition, type Variants } from "framer-motion"
import type React from "react"
import { Children } from "react"
import type { CSSProperties } from "react"

type SpinningTextProps = {
  children: React.ReactNode
  style?: CSSProperties
  duration?: number
  className?: string
  reverse?: boolean
  fontSize?: number
  radius?: number
  transition?: Transition
  variants?: {
    container?: Variants
    item?: Variants
  }
  blurAmount?: number
  backgroundColor?: string
}

const BASE_TRANSITION = {
  repeat: Number.POSITIVE_INFINITY,
  ease: "linear",
}

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
}

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 5,
  transition,
  variants,
  blurAmount = 0,
  backgroundColor = "rgba(255, 255, 255, 0)",
}: SpinningTextProps) {
  // Convert every child node that’s a string into one big string
  let textContent = ""
  if (typeof children === "string") {
    textContent = children
  } else if (Array.isArray(children)) {
    textContent = (children as Array<unknown>).filter((c) => typeof c === "string").join("")
  } else {
    textContent = Children.toArray(children)
      .filter((c) => typeof c === "string")
      .join("")
  }

  // Ensure we have usable text
  if (!textContent.trim().length) {
    throw new Error("SpinningText requires text content in its children")
  }

  const letters = textContent.split("")
  letters.push(" ")

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  }

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  }

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  }

  return (
    <motion.div
      className={cn(
        "relative",
        blurAmount > 0 &&
          `backdrop-blur-${blurAmount > 3 ? "xl" : blurAmount > 2 ? "lg" : blurAmount > 1 ? "md" : "sm"}`,
        className,
      )}
      style={{
        backgroundColor,
        ...style,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block"
          style={
            {
              "--index": index,
              "--total": letters.length,
              "--radius": radius,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: "center",
            } as React.CSSProperties
          }
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.div>
  )
}
