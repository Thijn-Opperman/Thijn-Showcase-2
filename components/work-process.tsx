"use client"

import { motion } from "framer-motion"

const cycleSteps = [
  {
    title: "Research",
    description: "Understanding users, competitors, and market trends to inform decisions.",
    angle: 0, // Top
  },
  {
    title: "Design",
    description: "Creating intuitive interfaces and user experiences that solve problems.",
    angle: 90, // Right
  },
  {
    title: "Code",
    description: "Building robust, performant solutions with modern technologies.",
    angle: 180, // Bottom
  },
  {
    title: "Test",
    description: "Validating solutions through user testing and continuous iteration.",
    angle: 270, // Left
  },
]

export function WorkProcess() {
  const circleRadius = 200 // Larger radius
  const centerX = 300
  const centerY = 300

  return (
    <section className="relative py-20 overflow-hidden dark:bg-[#0a1f1a] bg-gray-50" style={{
      background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
    }}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[350px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #5dd39e 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-black mb-3"
              style={{
                color: "#4ecb71",
                textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
                letterSpacing: "1px",
              }}
            >
              My Work Process
            </motion.h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              An iterative cycle that continuously improves to deliver better concepts
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="relative" style={{ width: '600px', height: '600px' }}>
              {/* Outer circular background with glow */}
              <div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: 'rgba(78, 203, 113, 0.3)',
                  background: 'rgba(78, 203, 113, 0.03)',
                  boxShadow: '0 0 60px rgba(78, 203, 113, 0.1), inset 0 0 60px rgba(78, 203, 113, 0.05)',
                }}
              />

              {/* Animated rotating gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 42%, #4ecb71 48%, #5dd39e 52%, transparent 58%, transparent 100%)',
                  opacity: 0.15,
                }}
              />

              {/* Cycle steps positioned around the circle */}
              {cycleSteps.map((step, index) => {
                const radian = (step.angle * Math.PI) / 180
                const x = centerX + circleRadius * Math.cos(radian) - 80
                const y = centerY + circleRadius * Math.sin(radian) - 70

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      width: '160px',
                    }}
                  >
                    <div
                      className="p-5 rounded-2xl border text-center relative overflow-hidden group"
                      style={{
                        background: 'rgba(78, 203, 113, 0.06)',
                        borderColor: 'rgba(78, 203, 113, 0.3)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle, rgba(78, 203, 113, 0.15), transparent)`,
                        }}
                      />
                      
                      <div className="relative z-10">
                        <h4
                          className="font-bold text-base mb-2"
                          style={{ color: '#4ecb71' }}
                        >
                          {step.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Center circle with rotating arrow */}
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  left: '240px',
                  top: '240px',
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, rgba(78, 203, 113, 0.15), rgba(78, 203, 113, 0.08))',
                  border: '3px solid rgba(78, 203, 113, 0.4)',
                  boxShadow: '0 0 30px rgba(78, 203, 113, 0.3), inset 0 0 30px rgba(78, 203, 113, 0.1)',
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-3xl"
                  style={{ color: '#4ecb71', filter: 'drop-shadow(0 0 8px rgba(78, 203, 113, 0.6))' }}
                >
                  ⟳
                </motion.div>
              </div>

              {/* SVG for connecting lines and animated flow */}
              <svg
                className="absolute inset-0 pointer-events-none"
                style={{ width: '600px', height: '600px' }}
              >
                {/* Connecting lines between steps */}
                {cycleSteps.map((step, index) => {
                  const nextStep = cycleSteps[(index + 1) % cycleSteps.length]
                  const currentRadian = (step.angle * Math.PI) / 180
                  const nextRadian = (nextStep.angle * Math.PI) / 180
                  
                  const x1 = centerX + (circleRadius - 40) * Math.cos(currentRadian)
                  const y1 = centerY + (circleRadius - 40) * Math.sin(currentRadian)
                  const x2 = centerX + (circleRadius - 40) * Math.cos(nextRadian)
                  const y2 = centerY + (circleRadius - 40) * Math.sin(nextRadian)

                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#4ecb71"
                      strokeWidth="3"
                      strokeOpacity="0.4"
                      strokeDasharray="6 6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  )
                })}
                
                {/* Animated flow indicators moving around the circle */}
                {cycleSteps.map((step, index) => {
                  const nextStep = cycleSteps[(index + 1) % cycleSteps.length]
                  const currentRadian = (step.angle * Math.PI) / 180
                  const nextRadian = (nextStep.angle * Math.PI) / 180
                  
                  const x1 = centerX + (circleRadius - 30) * Math.cos(currentRadian)
                  const y1 = centerY + (circleRadius - 30) * Math.sin(currentRadian)
                  const x2 = centerX + (circleRadius - 30) * Math.cos(nextRadian)
                  const y2 = centerY + (circleRadius - 30) * Math.sin(nextRadian)

                  return (
                    <motion.circle
                      key={`flow-${index}`}
                      cx={x1}
                      cy={y1}
                      r="6"
                      fill="#4ecb71"
                      initial={{ opacity: 0 }}
                      animate={{
                        cx: [x1, x2],
                        cy: [y1, y2],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.6,
                        ease: "easeInOut",
                      }}
                      style={{ 
                        filter: 'drop-shadow(0 0 6px rgba(78, 203, 113, 1))',
                      }}
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

