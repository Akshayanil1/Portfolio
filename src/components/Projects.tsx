'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  image: string;
  coreSkills: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, secure payments, and user authentication.",
    image: "/projects/ecommerce.png", // Add project image
    coreSkills: ["React", "Next.js", "Node.js"],
    technologies: ["TypeScript", "Sanity CMS", "Stripe", "Clerk Auth", "TailwindCSS", "Prisma"],
    liveUrl: "https://your-ecommerce-url.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing with Stripe",
      "User authentication and authorization",
      "Admin dashboard for product management",
      "Responsive design for all devices"
    ]
  },
  {
    title: "Movie Recommendation App",
    description: "A personalized movie recommendation application using TMDB API with advanced filtering and user preferences.",
    image: "/projects/movie-app.png",
    coreSkills: ["React", "TMDB API", "Framer Motion"],
    technologies: ["Next.js", "TailwindCSS", "Redux Toolkit", "Firebase Auth", "Vercel"],
    liveUrl: "https://your-movie-app.com",
    githubUrl: "https://github.com/yourusername/movie-app",
    features: [
      "Personalized movie recommendations",
      "Advanced search and filtering",
      "User watchlist and favorites",
      "Smooth animations and transitions",
      "Responsive and mobile-friendly design"
    ]
  },
  {
    title: "AI Task Management",
    description: "An intelligent task management system with AI-powered prioritization and smart scheduling features.",
    image: "/projects/task-app.png",
    coreSkills: ["React", "Node.js", "OpenAI"],
    technologies: ["TypeScript", "Express", "MongoDB", "TailwindCSS", "Socket.io"],
    liveUrl: "https://your-task-app.com",
    githubUrl: "https://github.com/yourusername/task-management",
    features: [
      "AI-powered task prioritization",
      "Real-time collaboration",
      "Smart scheduling algorithm",
      "Performance analytics dashboard",
      "Integration with calendar apps"
    ]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills with interactive features.",
    image: "/projects/portfolio.png",
    coreSkills: ["Next.js", "TailwindCSS", "Framer Motion"],
    technologies: ["TypeScript", "React", "Vercel", "Email.js"],
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    features: [
      "Modern and clean design",
      "Interactive UI elements",
      "Responsive layout",
      "Performance optimized",
      "Contact form integration"
    ]
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      {/* Add ambient section highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Featured <span className="text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-gray-100/5 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer border border-gray-100/10 hover:border-purple-500/30 transition-colors"
            >
              {/* Project Preview */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    View Details
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Core Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.coreSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-gray-900 rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>

                {/* Project Image */}
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">▹</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-purple-500 text-purple-400 rounded-lg 
                        hover:bg-purple-500/10 transition-colors"
                    >
                      View Source Code
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
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