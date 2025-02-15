'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    logo: string;
    proficiency?: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core",
    description: "Programming languages and core technologies",
    skills: [
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 90 },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 95 },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: 85 },
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", proficiency: 80 },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", proficiency: 75 },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 95 },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 90 },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", proficiency: 70 }
    ]
  },
  {
    title: "Frontend & UI",
    description: "Frontend frameworks and UI technologies",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 95 },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", proficiency: 90 },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", proficiency: 85 },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", proficiency: 80 },
      { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", proficiency: 90 },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", proficiency: 85 },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", proficiency: 75 },
      { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", proficiency: 85 }
    ]
  },
  {
    title: "Backend & Database",
    description: "Server-side and database technologies",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 90 },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", proficiency: 85 },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: 80 },
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", proficiency: 85 },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", proficiency: 85 },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", proficiency: 85 },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", proficiency: 80 },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", proficiency: 75 }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud services and DevOps tools",
    skills: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", proficiency: 80 },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", proficiency: 75 },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", proficiency: 85 },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", proficiency: 75 },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", proficiency: 70 },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", proficiency: 90 },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", proficiency: 75 },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", proficiency: 85 }
    ]
  }
]

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null)

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative">
      {/* Add ambient section highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Technical <span className="text-purple-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className="bg-gray-100/5 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-100/10 
                transition-all cursor-pointer group relative"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
                <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  View Details
                </span>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <div className="grid grid-cols-5 gap-4">
                {category.skills.slice(0, 5).map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group">
                    <div className="relative w-8 h-8 mb-2">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              {category.skills.length > 5 && (
                <div className="mt-4 text-sm text-purple-400">
                  +{category.skills.length - 5} more skills...
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-2">{selectedCategory.title}</h3>
                <p className="text-gray-400 mb-8">{selectedCategory.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {selectedCategory.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-gray-800 p-4 rounded-lg flex flex-col items-center"
                    >
                      <div className="relative w-12 h-12 mb-4">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-purple-400 font-medium mb-2">{skill.name}</span>
                      {skill.proficiency && (
                        <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-purple-400 rounded-full"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-8 text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}