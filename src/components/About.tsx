'use client'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative">
      {/* Add ambient section highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4`}>
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400/30 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Passionate Full-Stack Developer transitioning from Civil Engineering to IT, 
              specializing in scalable web applications, cloud computing, and AI-driven solutions. 
              Proficient in React.js, Next.js, Node.js, and cloud technologies, I thrive at 
              building high-performance applications with seamless user experiences.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Continuously exploring the intersection of web development, DevOps, and artificial 
              intelligence, I leverage modern frameworks and automation tools to create innovative 
              and efficient digital solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100/5 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className={`${playfair.className} text-2xl font-semibold text-purple-400`}>
                What I Do
              </h3>
              <ul className="space-y-4 text-gray-300">
                {[
                  "Develop high-performance web applications with modern JavaScript frameworks",
                  "Build and maintain scalable backend services and RESTful APIs",
                  "Implement cloud solutions using AWS and Azure services",
                  "Design and optimize database schemas for better performance",
                  "Integrate AI/ML solutions into web applications using TensorFlow.js and Python",
                  "Develop cross-platform mobile applications using Flutter and React Native"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start group"
                  >
                    <span className="text-purple-400 mr-3 transform group-hover:scale-110 transition-transform">
                      ⚡
                    </span>
                    <span className="group-hover:text-purple-400 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Recent Focus */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-100/5 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className={`${playfair.className} text-2xl font-semibold text-purple-400 mb-4`}>
                Recent Focus
              </h3>
              <ul className="space-y-4 text-gray-300">
                {[
                  "Microservices architecture and containerization with Docker",
                  "Server-side rendering and static site generation with Next.js",
                  "CI/CD implementation and DevOps practices",
                  "Performance optimization and web vitals improvement",
                  "Large Language Models and AI-powered development tools",
                  "Cross-platform development with Flutter and cloud integration"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start group"
                  >
                    <span className="text-purple-400 mr-3 transform group-hover:rotate-12 transition-transform">
                      ↗
                    </span>
                    <span className="group-hover:text-purple-400 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300 leading-relaxed bg-gray-100/5 backdrop-blur-sm rounded-xl p-6"
            >
              I'm passionate about staying at the forefront of technology, with a particular focus on AI 
              and emerging development tools. My ability to quickly adapt to new technologies and 
              frameworks allows me to bring innovative solutions to complex problems.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className={`${playfair.className} text-2xl text-purple-400 italic`}>
            "Crafting digital experiences that make a difference"
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}