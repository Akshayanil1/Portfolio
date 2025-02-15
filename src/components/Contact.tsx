'use client'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'
import { useState, useEffect } from 'react'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      {/* Add ambient section highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4`}>
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400/30 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 mx-auto w-full max-w-md"
          >
            <div className="bg-gray-100/5 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-100/10 hover:border-purple-500/30 transition-colors">
              <h3 className={`${playfair.className} text-xl md:text-2xl font-semibold text-purple-400 mb-4 text-center md:text-left`}>
                Let's Connect
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 text-center md:text-left">
                I'm currently open to new opportunities and collaborations. 
                Feel free to reach out if you'd like to discuss a project or just say hello!
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    type: 'email',
                    title: 'Email',
                    value: 'akshayy.anill@gmail.com',
                    href: 'mailto:akshayy.anill@gmail.com',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    )
                  },
                  {
                    type: 'phone',
                    title: 'Phone',
                    value: '+91 790-454-5352',
                    href: 'tel:+917904545352',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    )
                  },
                  {
                    type: 'location',
                    title: 'Location',
                    value: 'Coimbatore, India',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((item) => (
                  <motion.div
                    key={item.type}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 
                      hover:bg-purple-500/10 active:bg-purple-500/20 transition-all group
                      touch-manipulation"
                  >
                    <span className="w-10 h-10 flex items-center justify-center 
                      bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 
                      group-active:bg-purple-500/30 transition-colors"
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-medium text-gray-200 group-hover:text-purple-400 
                        transition-colors">{item.title}</p>
                      {item.type === 'phone' && isMobile ? (
                        <a 
                          href={item.href}
                          className="text-sm text-gray-400 hover:text-purple-400 
                            active:text-purple-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-400 group-hover:text-purple-300 
                          transition-colors">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 mx-auto w-full max-w-md"
          >
            <div className="bg-gray-100/5 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-100/10 hover:border-purple-500/30 transition-colors">
              <h3 className={`${playfair.className} text-xl md:text-2xl font-semibold text-purple-400 mb-6 text-center md:text-left`}>
                Quick Actions
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:akshayy.anill@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 bg-purple-500 
                    text-white py-4 px-6 rounded-lg hover:bg-purple-600 
                    active:bg-purple-700 transition-all shadow-lg touch-manipulation"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </motion.a>

                {isMobile ? (
                  <motion.a
                    href="tel:+917904545352"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 border-2 
                      border-purple-500 text-purple-400 py-4 px-6 rounded-lg 
                      hover:bg-purple-500/10 active:bg-purple-500/20 
                      transition-all shadow-lg touch-manipulation"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center gap-3 border-2 border-purple-500/50 text-purple-400 py-4 px-6 rounded-lg bg-purple-500/5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Available on Call
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100/5 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-100/10 hover:border-purple-500/30 transition-colors"
            >
              <h4 className="text-lg font-medium text-purple-400 mb-3 text-center md:text-left">
                Availability
              </h4>
              <p className="text-gray-300 leading-relaxed text-center md:text-left">
                I'm currently available for freelance work and full-time positions.
                <br />
                <span className="text-purple-400/80">Response time: Within 24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}