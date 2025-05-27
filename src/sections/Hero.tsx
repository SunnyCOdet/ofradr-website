"use client"

import { useState, useEffect } from "react"
import { FlipWords } from "@/component/Loadliner"
import { Big_Shoulders_Display } from "next/font/google"

// import icon from "@/assets/fileicon.json"
import icon from "@/assets/fileicon.json"
import Lottie from "lottie-react"

const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="flex flex-col  bg-black items-center justify-center">
      <div className="min-h-screen bg-black flex items-center justify-center p-8 ">
        <div className="text-center">
          <div className=" text-center text-2xl mt-10 text-yellow-200">
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
       <button className="bg-[rgba(224,241,31,255)]  absolute mt-[680px] flex items-center justify-center gap-2 w-40 h-14 rounded-full text-xl">
  <div className="w-8 h-8">
    <Lottie animationData={icon} loop={true} autoplay={true} />
  </div>
  <span>Download</span>
</button >

      
      
    </section>
  )
}

// "use client"

// import { useState, useEffect } from "react"
// import { FlipWords } from "@/component/Loadliner"
// import { Big_Shoulders_Display } from "next/font/google"

// const bigShoulders = Big_Shoulders_Display({
//   weight: ["400", "700", "900"],
//   subsets: ["latin"],
// })

// export const Hero = () => {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY
//       setIsScrolled(scrollTop > 50)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const glowStyle = {
//     textShadow: `
//     0 0 5px #ffff00,
//     0 0 10px #ffff00,
//     0 0 15px #ffff00,
//     0 0 20px #ffff00
//   `,
//   }

//   return (
//     <div className="flex flex-col bg-black">
//       <div className="min-h-screen bg-black flex items-center justify-center p-8">
//         <div className="text-center">
//           <div className=" text-center text-2xl mt-10 text-yellow-200">
//             &#9679; <span className="text-white">My model is </span>
//             <FlipWords words={["Undetectable", "Smarter", "F*cking fast"]} />
//           </div>
//           <h1
//             className={`font-black text-[#e0f11f] select-none ${bigShoulders.className}`}
//             style={{
//               fontSize: "220px",
//               fontWeight: 900,
//               letterSpacing: "-2.4px",
//               lineHeight: "292px",
//               ...glowStyle,
//             }}
//           >
//             MONKEY
//           </h1>
//           <h1
//             className={`font-black text-[#e0f11f] select-none -mt-2 ${bigShoulders.className}`}
//             style={{
//               fontSize: "250px",
//               fontWeight: 900,
//               letterSpacing: "-2.4px",
//               lineHeight: "132px",
//               ...glowStyle,
//             }}
//           >
//             CODER
//           </h1>
//         </div>
//       </div>
//     </div>
//   )
// }

