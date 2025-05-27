"use client"

import { motion } from "framer-motion"
import { Big_Shoulders_Display } from "next/font/google"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white mt-24">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className={`${bigShoulders.className} text-3xl font-bold text-white`}>
                Monkey<span className="text-[#f0f810]">Coder</span>
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Building the future with cutting-edge technology and innovative solutions for modern development.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f0f810]" />
                <span className="text-gray-300">hello@techflow.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f0f810]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#f0f810]" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className={`${bigShoulders.className} text-xl font-bold text-[#f0f810]`}>Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Portfolio", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#f0f810] transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className={`${bigShoulders.className} text-xl font-bold text-[#f0f810]`}>Services</h4>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "AI Integration", "DevOps", "Consulting"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#f0f810] transition-colors duration-300 hover:underline"
                    >
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className={`${bigShoulders.className} text-xl font-bold text-[#f0f810]`}>Stay Updated</h4>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates and insights.</p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f0f810] transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#f0f810] text-black font-semibold rounded-lg hover:bg-[#e8e608] transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h5 className={`${bigShoulders.className} text-lg font-bold text-white`}>Follow Us</h5>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#f0f810] hover:bg-gray-800 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="border-t border-gray-800"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} <span className="text-[#f0f810] font-semibold">TechFlow</span>. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-[#f0f810] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
    </footer>
  )
}
