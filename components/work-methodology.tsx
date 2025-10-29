"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    image: "/timeline/havodiploma.jpg",
    title: "2024 - Havo diploma",
    number: "01",
    description:
      "I obtained my HAVO diploma with the profiles Nature & Technology (N&T) and Nature & Health (N&G). In addition, I completed the Technasium program, where I gained experience in technical and research-based thinking, collaboration, and developing out-of-the-box solutions.",
    color: "#4ECB71",
  },
  {
    image: "/timeline/thijnwerk.jpg",
    title: "2024 - ICT Media",
    number: "02",
    description:
      "Having developed an interest in ICT through my Technasium education, I started studying ICT. After completing my first semester, I decided to continue in the Media specialization, allowing me to combine technical skills with creativity in areas such as digital media, content creation, and multimedia applications.",
    color: "#4ECB71",
  },
  {
    image: "/timeline/propedeuse.JPG",
    title: "2025 - Front-End Development",
    number: "03",
    description:
      "After completing my first and second semesters, I successfully obtained my propaedeutic diploma, which I am very proud of. I am currently in my third semester, specializing in Front-End Development, where I continue to build my skills in creating engaging and user-friendly digital experiences.",
    color: "#4ECB71",
  },
  {
    image: "/timeline/thijnvooraanzicht.jpg",
    title: "Now - Future",
    number: "04",
    description:
      "I am currently in the middle of my third semester in Front-End Development, which I really enjoy. I hope to learn a lot during this time. I am not yet sure what I want to do after this semester, as I find many things interesting. I am curious about a wide range of topics and highly motivated to learn new things!",
    color: "#4ECB71",
  },
]

export function WorkMethodology({ 
  title = "The way I work",
  subtitle
}: {
  title?: string
  subtitle?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"]
  })

  // Transform scroll progress to height for the vertical line
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Animated Progress Line with Glow */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-1 bg-primary -translate-x-1/2 origin-top hidden md:block"
              style={{
                height: lineProgress,
                boxShadow: "0 0 20px rgba(78, 203, 113, 0.6)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(78, 203, 113, 0.6)",
                  "0 0 30px rgba(78, 203, 113, 0.8)",
                  "0 0 20px rgba(78, 203, 113, 0.6)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Animated Glow Effect on Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-3 bg-primary/30 -translate-x-1/2 origin-top hidden md:block blur-sm"
              style={{
                height: lineProgress,
              }}
            />

            {/* Timeline Items */}
            <div className="space-y-24 md:space-y-32">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: isEven ? -150 : 150, scale: 0.8 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      scale: 1,
                      transition: { 
                        duration: 0.8, 
                        delay: index * 0.15,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    viewport={{ once: false, margin: "-150px" }}
                    className={`relative flex items-center gap-8 md:gap-16 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      className={`flex-1 ${
                        isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                      }`}
                    >
                      <motion.div
                        className="relative bg-background p-6 md:p-8 rounded-2xl border-2 shadow-lg overflow-hidden cursor-pointer group"
                        style={{
                          borderColor: step.color,
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ 
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        whileHover={{ 
                          y: -8,
                          scale: 1.02,
                          boxShadow: `0 20px 60px ${step.color}40`,
                          borderWidth: 3,
                        }}
                      >
                        {/* Animated Background Gradient on Hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}08 0%, ${step.color}03 100%)`,
                          }}
                        />
                        
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(110deg, transparent 30%, ${step.color}20 50%, transparent 70%)`,
                          }}
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Grid Layout: Image and Content Side by Side */}
                        <div className={`grid gap-6 md:gap-8 md:grid-cols-2`}>
                          {/* Content Section - Left for even, Right for odd */}
                          <div 
                            className={`relative z-10 flex flex-col justify-center ${
                              isEven 
                                ? "md:order-1 md:text-left" 
                                : "md:order-2 md:text-right"
                            }`}
                          >
                            {/* Title Section */}
                            <div className="relative mb-4">
                              <motion.h3 
                                className="text-2xl md:text-3xl font-bold"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.15 + 0.4 }}
                                whileHover={{ 
                                  scale: 1.05,
                                  x: isEven ? -5 : 5,
                                }}
                              >
                                {step.title}
                              </motion.h3>
                            </div>
                            
                            <motion.p 
                              className="text-foreground/70 leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false }}
                              transition={{ delay: index * 0.15 + 0.5 }}
                            >
                              {step.description}
                            </motion.p>
                          </div>

                          {/* Image Section - Right for even, Left for odd */}
                          <motion.div
                            className={`relative w-full h-48 md:h-full md:min-h-[300px] rounded-xl overflow-hidden ${
                              isEven ? "md:order-2" : "md:order-1"
                            }`}
                            initial={{ opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ 
                              delay: index * 0.15 + 0.3,
                              type: "spring",
                              stiffness: 200,
                              damping: 15
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                              style={{ objectPosition: "center 25%" }}
                              sizes="(max-width: 768px) 100vw, 400px"
                              quality={95}
                              priority={index < 2}
                            />
                            {/* Overlay gradient */}
                            <div 
                              className="absolute inset-0 opacity-40"
                              style={{
                                background: `linear-gradient(135deg, ${step.color}40 0%, transparent 100%)`,
                              }}
                            />
                            {/* Number badge on image */}
                            <motion.div
                              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center border-2"
                              style={{ borderColor: step.color }}
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: false }}
                              transition={{ 
                                delay: index * 0.15 + 0.4,
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                              }}
                              whileHover={{ scale: 1.1, rotate: 360 }}
                            >
                              <span className="text-xs font-bold" style={{ color: step.color }}>
                                {step.number}
                              </span>
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Spacer for mobile */}
                    <div className="w-16 md:w-0" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
