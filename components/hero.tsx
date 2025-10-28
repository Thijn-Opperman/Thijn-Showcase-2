"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import CircularText from "./CircularText"
import PillNav from "./PillNav"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden dark:bg-[#0a1f1a] bg-gray-50 transition-colors duration-300"
      style={{ 
        background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
      }}
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
      
      {/* PillNav Navigation Bar - Removed from here, added as separate component */}

      {/* Main Content - Centered */}
      <div className="flex-1 relative flex items-center justify-center px-20">
        <div className="relative w-full h-screen flex items-center justify-center max-w-[1600px]">
          
          {/* Behind Text - THIJN OPPERMAN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.08,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 1.2,
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }
            }}
            className="absolute text-[60px] lg:text-[90px] font-black select-none pointer-events-none"
            style={{
              top: "15%",
              color: "#4ecb71",
              textShadow: "0 0 80px rgba(78, 203, 113, 0.15), 0 0 150px rgba(78, 203, 113, 0.1)",
              transform: "rotate(-4deg)",
              fontWeight: 900,
              letterSpacing: "6px",
            }}
          >
            THIJN OPPERMAN
          </motion.div>

          {/* Decorative line accents */}
          <div className="absolute top-[25%] left-[20px] w-[2px] h-[200px] opacity-30" style={{ background: 'linear-gradient(to bottom, #4ecb71, transparent)' }} />
          <div className="absolute bottom-[25%] right-[20px] w-[2px] h-[200px] opacity-30" style={{ background: 'linear-gradient(to top, #4ecb71, transparent)' }} />

          {/* Center Image with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-30 w-full max-w-md lg:max-w-lg flex items-center justify-center"
          >
            {/* CircularText around the photo - positioned around the image */}
            <div
              className="absolute z-0"
              style={{ 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -45%)',
                width: '560px',
                height: '560px',
                pointerEvents: 'none',
              }}
            >
              <CircularText
                text="THIJN OPPERMAN * FRONT END DEVELOPER * CREATIVE CODER * "
                spinDuration={35}
                onHover="speedUp"
                className="text-primary large"
              />
            </div>

            {/* Neon Glow Behind Image */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full blur-3xl -z-10"
              style={{
                background: 'radial-gradient(circle, #4ecb71 0%, #39a6cd 40%, transparent 70%)',
              }}
            />
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Image
                src="/hero.png"
                alt="Thijn Opperman"
                width={600}
                height={800}
                className="w-full h-auto object-cover drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Particles */}
            {[
              { left: 10, top: 20, color: '#4ecb71' },
              { left: 80, top: 30, color: '#61e8a8' },
              { left: 20, top: 70, color: '#39a6cd' },
              { left: 90, top: 60, color: '#4ecb71' },
              { left: 50, top: 10, color: '#5dd39e' },
              { left: 70, top: 80, color: '#61e8a8' },
              { left: 15, top: 50, color: '#39a6cd' },
              { left: 85, top: 25, color: '#4ecb71' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  backgroundColor: pos.color,
                  boxShadow: `0 0 10px ${pos.color}`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + (i * 0.2),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Front Text - FRONT END DEVELOPER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }
            }}
            className="absolute z-40 text-center"
            style={{
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <motion.h2
              animate={{
                textShadow: [
                  "0 0 3px #4ecb71",
                  "0 0 6px #4ecb71",
                  "0 0 3px #4ecb71",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl lg:text-6xl font-black mb-2"
              style={{
                color: "#4ecb71",
                fontWeight: 900,
                letterSpacing: "4px",
              }}
            >
              FRONT END
            </motion.h2>
            <motion.h2
              animate={{
                textShadow: [
                  "0 0 3px #4ecb71",
                  "0 0 6px #4ecb71",
                  "0 0 3px #4ecb71",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="text-4xl lg:text-6xl font-black"
              style={{
                color: "#4ecb71",
                fontWeight: 900,
                letterSpacing: "4px",
              }}
            >
              DEVELOPER
            </motion.h2>
          </motion.div>

        </div>

        {/* Left side - Description and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-20 w-80 lg:w-96 z-50"
          style={{
            bottom: "25%",
          }}
        >
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Passionate about creating beautiful, user-friendly web experiences
            through innovative design and clean code.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4ecb71" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-white text-sm font-medium transition-all relative overflow-hidden group"
              style={{ 
                border: "1.5px solid #4ecb71",
                borderRadius: "0",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
              Contact
              <ArrowRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ background: 'linear-gradient(to right, rgba(78, 203, 113, 0), rgba(78, 203, 113, 0.1), rgba(78, 203, 113, 0))' }} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #4ecb71" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #4ecb71 0%, #39a6cd 100%)',
                color: "#000",
                border: "1.5px solid #4ecb71",
                borderRadius: "0",
                boxShadow: "0 0 15px rgba(78, 203, 113, 0.4)",
              }}
            >
              Projects
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Logo and Branding - Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-24 right-20 flex items-center gap-3 z-30"
      >
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color: "#1a3a2f" }}>
            T
          </span>
        </div>
        <a
          href="https://github.com/thijnopperman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="text-sm">Thijn-Opperman</span>
        </a>
      </motion.div>

      {/* Subtle green glow effects */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
        }}
      />
      
      {/* Green accent lines on edges */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(78, 203, 113, 0.5), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(78, 203, 113, 0.3), transparent)' }} />
    </section>
  )
}
