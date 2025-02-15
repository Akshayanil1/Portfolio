'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hello, I'm{' '}
            <span className="text-purple-400">Akshay Anilkumar</span>,
          </h1>
          <div className="text-2xl md:text-4xl font-bold text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                'a Full Stack Developer',
                2000,
                'a Tech Enthusiast',
                2000,
                'a Civil Engineer turned Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            Civil Engineer turned Full Stack Developer, passionate about creating scalable web 
            applications and exploring AI technologies. Bringing a unique perspective to 
            software development through my diverse background.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 
                transition-colors w-full md:w-auto text-center"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg 
                hover:bg-purple-500/10 transition-colors w-full md:w-auto text-center"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string;
  icon?: string; // Made optional since it's not used
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
  >
    <span className="relative px-5 py-2.5 overflow-hidden font-medium rounded-full">
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:translate-x-full"></span>
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </span>
  </motion.a>
)