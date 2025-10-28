"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PillNav from "@/components/PillNav"
import { Footer } from "@/components/footer"
import TiltedCard from "@/components/TiltedCard"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <main className="min-h-screen dark:bg-[#0a1f1a] bg-gray-50" style={{ 
      background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
    }}>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Sticky Navigation */}
      <div className="fixed top-6 left-1/2" style={{ zIndex: 100, transform: 'translateX(-50%)' }}>
        <PillNav
          logo="/t-logo.png"
          logoAlt="Thijn Opperman"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About me', href: '/about' },
            { label: 'Projects', href: '/projects' }
          ]}
          activeHref="/about"
          baseColor="#000"
          pillColor="#4ecb71"
          hoveredPillTextColor="#000"
          pillTextColor="#000"
        />
      </div>

      {/* Grid Background Pattern */}
      <div className="fixed inset-0 opacity-8 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Hero Section - About Me Content */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex items-center justify-center"
            >
              <div className="relative aspect-square w-[85%] flex items-center justify-center">
                {/* Glow effect behind image */}
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
                  className="absolute inset-0 rounded-2xl blur-3xl -z-10"
                  style={{
                    background: 'radial-gradient(circle, #4ecb71 0%, #39a6cd 40%, transparent 70%)',
                  }}
                />
                
                <TiltedCard
                  imageSrc="/aboutme.png"
                  altText="Thijn Opperman"
                  captionText="Thijn Opperman - Front-End Developer"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />

                {/* Decorative corner accents */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/50 pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/50 pointer-events-none" />
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-5xl lg:text-6xl font-black mb-4"
                  style={{
                    color: "#4ecb71",
                    textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
                    letterSpacing: "2px",
                  }}
                >
                  Hi, I am <br />Thijn Opperman
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/90 text-lg leading-relaxed"
              >
                Hi, I'm Thijn Opperman, a 20-year-old front-end developer from Gilze/Rijen, 
                currently studying ICT with a focus on Media and Front-End Development at Fontys. 
                I'm passionate about learning new technologies and constantly improving my skills, 
                always eager to explore and apply new ideas.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/90 text-lg leading-relaxed"
              >
                In my free time, I enjoy DJing, which allows me to combine creativity and technical 
                skills by reading a crowd and choosing the right track at the right moment. I'm a 
                social, motivated, and curious person, ready to dive into new challenges and 
                continuously grow as a developer.
              </motion.p>

              {/* Stats or highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">20</div>
                  <div className="text-sm text-white/70 mt-1">Years Old</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-white/70 mt-1">Years Coding</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-white/70 mt-1">Projects</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-black mb-8 text-center"
            style={{
              color: "#4ecb71",
              textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
              letterSpacing: "2px",
            }}
          >
            Gallery
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: index % 2 === 0 ? 3 : -3,
                  zIndex: 10 
                }}
                className="relative aspect-square overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/15 to-primary/5 cursor-pointer group"
                style={{
                  boxShadow: "0 4px 20px rgba(78, 203, 113, 0.15)"
                }}
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary/30 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(78, 203, 113, 0.2), transparent)'
                  }}
                />

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-black mb-20"
            style={{
              color: "#4ecb71",
              textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
              letterSpacing: "2px",
            }}
          >
            Timeline:
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Diagonal Line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                x1="10%"
                y1="10%"
                x2="90%"
                y2="90%"
                stroke="#4ecb71"
                strokeWidth="3"
                strokeDasharray="10,5"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(78, 203, 113, 0.6))",
                }}
              />
            </svg>

            {/* Timeline Items */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-12 py-12">
              {[
                {
                  year: "2018",
                  title: "Started Coding Journey",
                  description: "Discovered my passion for web development and began learning HTML, CSS, and JavaScript.",
                },
                {
                  year: "2020",
                  title: "Advanced Skills",
                  description: "Mastered React and modern front-end frameworks, building my first portfolio projects.",
                },
                {
                  year: "2022",
                  title: "Fontys University",
                  description: "Started studying ICT with a focus on Media and Front-End Development at Fontys.",
                },
                {
                  year: "2024",
                  title: "Professional Growth",
                  description: "Continuously expanding my skills, working on real-world projects and building my portfolio.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center"
                  style={{ zIndex: 10 }}
                >
                  {/* Circle with year */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-32 h-32 rounded-full flex items-center justify-center mb-6 border-4 border-primary"
                    style={{
                      background: 'radial-gradient(circle, #0a1f1a 0%, #001010 100%)',
                      boxShadow: "0 0 30px rgba(78, 203, 113, 0.5)",
                    }}
                  >
                    <span className="text-3xl font-black text-primary">
                      {item.year}
                    </span>

                    {/* Animated glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
                        filter: 'blur(20px)',
                        zIndex: -1,
                      }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div className="max-w-xs p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subtle glow effects */}
      <div 
        className="fixed top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
        }}
      />
      <div 
        className="fixed bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
        }}
      />

      <Footer />
    </main>
  )
}

