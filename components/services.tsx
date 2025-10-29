"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces.",
    expandedContent: "I create user-centered designs that not only look great but also provide exceptional user experiences. This includes user research, wireframing, prototyping, and usability testing to ensure your digital products are both beautiful and functional.",
    color: "#4ecb71",
  },
  {
    title: "Website Design",
    description: "Creative and modern website designs for your brand.",
    expandedContent: "From landing pages to complex web applications, I design websites that perfectly represent your brand identity. Every design is crafted with attention to detail, ensuring it resonates with your target audience and converts visitors into customers.",
    color: "#4ecb71",
  },
  {
    title: "Front-End Development",
    description: "Fast, responsive websites with modern technologies.",
    expandedContent: "I build websites using React, Next.js, and TypeScript to ensure high performance and maintainability. Clean code, modern patterns, and best practices are at the core of everything I develop.",
    color: "#4ecb71",
  },
  {
    title: "Responsive Development",
    description: "Mobile-friendly websites for all devices.",
    expandedContent: "Your website will look and work perfectly on every device - from smartphones to tablets to large desktop screens. I ensure seamless experiences across all screen sizes using mobile-first design principles.",
    color: "#4ecb71",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing for smooth user experience and speed.",
    expandedContent: "Speed matters. I optimize your website's performance through code splitting, lazy loading, image optimization, and other techniques to ensure fast load times and smooth interactions.",
    color: "#4ecb71",
  },
  {
    title: "Animation & Interactions",
    description: "Subtle animations that bring websites to life.",
    expandedContent: "I add carefully crafted animations and micro-interactions that enhance user experience without being distracting. These subtle touches make your website feel modern, professional, and engaging.",
    color: "#4ecb71",
  },
  {
    title: "Research & Analysis",
    description: "Research on users, competitors, and trends.",
    expandedContent: "Before starting any project, I conduct thorough research on your target audience, competitors, and industry trends. This ensures that design and development decisions are data-driven and aligned with your business goals.",
    color: "#4ecb71",
  },
]

interface ServiceCardProps {
  service: typeof services[0]
  index: number
  isHovered: boolean
  isExpanded: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
  onExpandClick: () => void
}

function ServiceCard({ service, index, isHovered, isExpanded, onHoverStart, onHoverEnd, onExpandClick }: ServiceCardProps) {
  return (
    <motion.div 
      animate={{
        scale: isExpanded ? 1.02 : 1,
      }}
      className="relative rounded-xl border overflow-hidden cursor-pointer"
      style={{
        background: isExpanded || isHovered
          ? `linear-gradient(135deg, ${service.color}08, ${service.color}05)`
          : 'rgba(78, 203, 113, 0.03)',
        borderColor: isExpanded || isHovered
          ? `${service.color}40` 
          : 'rgba(78, 203, 113, 0.2)',
        transition: 'all 0.3s ease',
      }}
      onClick={onExpandClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
        }}
      />

      {/* Animated left border */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded || isHovered ? '100%' : '0%',
          opacity: isExpanded || isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-0 top-0 w-1 rounded-r-full"
        style={{ background: service.color }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header with number and expand button */}
        <div className="flex items-start justify-between mb-4">
          {/* Number badge */}
          <motion.div
            animate={{
              scale: isHovered || isExpanded ? 1.1 : 1,
              backgroundColor: isExpanded ? `${service.color}25` : isHovered ? `${service.color}20` : `${service.color}10`,
            }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
            style={{
              border: `1px solid ${service.color}30`,
            }}
          >
            <span 
              className="text-xs font-black"
              style={{ color: service.color }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Expand/Collapse button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-6 h-6 rounded-lg transition-colors"
            style={{
              background: isExpanded ? `${service.color}20` : `${service.color}10`,
              border: `1px solid ${service.color}30`,
            }}
            onClick={(e) => {
              e.stopPropagation()
              onExpandClick()
            }}
          >
            {isExpanded ? (
              <Minus className="w-4 h-4" style={{ color: service.color }} />
            ) : (
              <Plus className="w-4 h-4" style={{ color: service.color }} />
            )}
          </motion.button>
        </div>

        {/* Title */}
        <h3 
          className="text-lg font-bold mb-2 leading-tight"
          style={{ color: service.color }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t" style={{ borderColor: `${service.color}20` }}>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.expandedContent}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated progress bar */}
        <motion.div
          className="mt-4 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(78, 203, 113, 0.1)' }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: isExpanded ? '100%' : (isHovered ? '100%' : '0%') }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full rounded-full"
            style={{ background: service.color }}
          />
        </motion.div>
      </div>

      {/* Corner glow effect */}
      <motion.div
        animate={{
          opacity: isExpanded || isHovered ? 0.3 : 0,
          scale: isExpanded || isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${service.color}, transparent)` }}
      />
    </motion.div>
  )
}

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [showMoreServices, setShowMoreServices] = useState(false)

  const visibleServices = services.slice(0, 3)
  const hiddenServices = services.slice(3)

  return (
    <section className="relative py-16 overflow-hidden dark:bg-[#0a1f1a] bg-gray-50" style={{
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

      {/* Subtle glow effects - only green */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[300px] rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[250px] rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #5dd39e 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-black mb-3"
              style={{
                color: "#4ecb71",
                textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
                letterSpacing: "1px",
              }}
            >
              What I can do for you
            </motion.h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              From concept to realization, I'll help you with every step
            </p>
          </motion.div>

          {/* Creative grid layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First 3 services - always visible */}
            {visibleServices.map((service, index) => {
              const isHovered = hoveredIndex === index
              const isExpanded = expandedIndex === index
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.06, 
                    duration: 0.4,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  <ServiceCard
                    service={service}
                    index={index}
                    isHovered={isHovered}
                    isExpanded={isExpanded}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onExpandClick={() => setExpandedIndex(isExpanded ? null : index)}
                  />
                </motion.div>
              )
            })}

            {/* Hidden services - shown when showMoreServices is true */}
            <AnimatePresence>
              {showMoreServices && (
                <>
                  {hiddenServices.map((service, index) => {
                    const actualIndex = index + 3 // Adjust index for numbering
                    const isHovered = hoveredIndex === actualIndex
                    const isExpanded = expandedIndex === actualIndex
                    
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ 
                          delay: index * 0.06, 
                          duration: 0.4,
                        }}
                        onHoverStart={() => setHoveredIndex(actualIndex)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="group relative"
                      >
                        <ServiceCard
                          service={service}
                          index={actualIndex}
                          isHovered={isHovered}
                          isExpanded={isExpanded}
                          onHoverStart={() => setHoveredIndex(actualIndex)}
                          onHoverEnd={() => setHoveredIndex(null)}
                          onExpandClick={() => setExpandedIndex(isExpanded ? null : actualIndex)}
                        />
                      </motion.div>
                    )
                  })}
                </>
              )}
            </AnimatePresence>
          </div>

          {/* More Services Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMoreServices(!showMoreServices)}
              className="px-6 py-3 rounded-full border-2 font-semibold text-sm transition-all"
              style={{
                background: showMoreServices 
                  ? 'rgba(78, 203, 113, 0.1)'
                  : 'rgba(78, 203, 113, 0.05)',
                borderColor: showMoreServices
                  ? '#4ecb71'
                  : 'rgba(78, 203, 113, 0.3)',
                color: '#4ecb71',
                boxShadow: showMoreServices
                  ? '0 0 20px rgba(78, 203, 113, 0.3)'
                  : '0 0 10px rgba(78, 203, 113, 0.2)',
              }}
            >
              {showMoreServices ? 'Show Less' : 'More Services'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
