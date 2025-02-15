'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackgroundGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [orbs, setOrbs] = useState<Array<{ x: number, y: number }>>([])

  useEffect(() => {
    // Generate orb positions on client side only
    setOrbs(Array(5).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    })))

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      {/* Animated grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
      />

      {/* Interactive gradient that follows mouse */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.05), transparent 40%)`
        }}
      />

      {/* Floating orbs */}
      {orbs.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [`${position.x}vw`, `${(position.x + 20) % 100}vw`],
            y: [`${position.y}vh`, `${(position.y + 20) % 100}vh`],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: `radial-gradient(circle at center, ${
              i % 2 === 0 ? 'rgba(139, 92, 246, 0.03)' : 'rgba(59, 130, 246, 0.03)'
            }, transparent)`,
            filter: 'blur(40px)',
          }}
        />
      ))}

      {/* Scanlines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0px,rgba(0,0,0,0.1)_1px,transparent_2px)] bg-[size:100%_4px] pointer-events-none" />

      {/* Top and bottom gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  )
} 