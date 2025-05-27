"use client"

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "framer-motion"
import { Big_Shoulders_Display } from "next/font/google"

const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

export const CallToAction = () => {
  return (
    <section className="relative">
      {/* Hero Section with Lamp */}
      <div className="relative">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <h1
              className={`${bigShoulders.className} text-white py-4 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl`}
            >
              Let me shed some <br /> light on this!
            </h1>

            <p className="text-white text-xl mt-7 font-normal px-6 max-w-3xl mx-auto">
              <span className="text-[#e0f11f] italic">Advanced testing</span> capabilities built for modern development.
              Tested across multiple environments and platforms for reliability and performance.
            </p>
          </motion.div>
        </LampContainer>
      </div>

      {/* Terminal and Description Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`${bigShoulders.className} text-4xl md:text-6xl text-white font-bold`}>
            All hail <span className="text-[#f0f810]">.NET</span>
          </h2>
        </motion.div>

        <div className="flex justify-center items-start md:flex-row flex-col   xl:flex-row gap-12 max-w-7xl mx-auto">
          {/* Terminal Section */}
          <div className="flex-1 w-full xl:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Terminal>
                <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

                <AnimatedSpan delay={1500} className="text-green-400">
                  <span>✔ Preflight checks.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2000} className="text-green-400">
                  <span>✔ Verifying framework. .NET Core.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className="text-green-400">
                  <span>✔ Validating configuration.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-green-400">
                  <span>✔ Validating credentials.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3500} className="text-green-400">
                  <span>✔ Setting up components.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4000} className="text-green-400">
                  <span>✔ Checking NuGet registry.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4500} className="text-green-400">
                  <span>✔ Updating project.csproj</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5000} className="text-green-400">
                  <span>✔ Updating appsettings.json</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5500} className="text-green-400">
                  <span>✔ Installing packages.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={6000} className="text-[#f0f810]">
                  <span>ℹ Updated 1 file:</span>
                  <span className="pl-2">- Program.cs</span>
                </AnimatedSpan>

                <TypingAnimation delay={6500} className="text-gray-400">
                  Success! .NET project
                </TypingAnimation>

                <TypingAnimation delay={7000} className="text-gray-400">
                  You may now start building.
                </TypingAnimation>
              </Terminal>
            </motion.div>
          </div>

          {/* Description Section */}
          <div className="flex-1 text-white max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className={`${bigShoulders.className} text-3xl lg:text-4xl font-bold leading-tight`}>
                Built for Modern Development
              </h3>

              <p className="text-lg text-gray-300  leading-relaxed">
                Experience seamless integration with cutting-edge .NET technology. Our platform is built with
                performance, reliability, and developer experience in mind.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">Lightning-fast setup with .NET CLI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">Cross-platform compatibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">High-performance runtime</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[] text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Started with .NET
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
