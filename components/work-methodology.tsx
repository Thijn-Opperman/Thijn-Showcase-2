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
      "Ik behaalde mijn HAVO diploma met de profielen Natuur & Techniek (N&T) en Natuur & Gezondheid (N&G). Bovendien voltooide ik het Technasium programma, waar ik ervaring opdeed met technisch en onderzoekend denken, samenwerking en het ontwikkelen van out-of-the-box oplossingen.",
    color: "#4ECB71",
  },
  {
    image: "/timeline/thijnwerk.jpg",
    title: "2024 - ICT Media",
    number: "02",
    description:
      "Na interesse in ICT te hebben ontwikkeld door mijn Technasium opleiding, begon ik aan ICT te studeren. Na het voltooien van mijn eerste semester besloot ik door te gaan in de Media specialisatie, waardoor ik technische vaardigheden kan combineren met creativiteit in gebieden zoals digitale media, content creatie en multimedia toepassingen.",
    color: "#4ECB71",
  },
  {
    image: "/timeline/propedeuse.JPG",
    title: "2025 - Front-End Development",
    number: "03",
    description:
      "Na het voltooien van mijn eerste en tweede semester behaalde ik succesvol mijn propedeuse diploma, waar ik erg trots op ben. Ik zit momenteel in mijn derde semester, gespecialiseerd in Front-End Development, waar ik mijn vaardigheden blijf opbouwen in het creëren van boeiende en gebruiksvriendelijke digitale ervaringen.",
    color: "#4ECB71",
  },
  {
    image: "/timeline/thijnvooraanzicht.jpg",
    title: "Nu - Toekomst",
    number: "04",
    description:
      "Ik zit momenteel midden in mijn derde semester in Front-End Development, waar ik echt van geniet. Ik hoop tijdens deze tijd veel te leren. Ik weet nog niet zeker wat ik na dit semester wil doen, omdat ik veel dingen interessant vind. Ik ben nieuwsgierig naar een breed scala aan onderwerpen en zeer gemotiveerd om nieuwe dingen te leren!",
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
                            className={`relative z-10 flex flex-col justify-start ${
                              isEven 
                                ? "md:order-1 md:text-left" 
                                : "md:order-2 md:text-left"
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
                              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
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
