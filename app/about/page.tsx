"use client"

import { motion } from "framer-motion"
import PillNav from "@/components/PillNav"
import { Footer } from "@/components/footer"
import TiltedCard from "@/components/TiltedCard"
import { WorkMethodology } from "@/components/work-methodology"
import CircularGallery from "@/components/CircularGallery"

export default function AboutPage() {

  return (
    <main className="min-h-screen dark:bg-[#0a1f1a] bg-gray-50 overflow-x-hidden" style={{ 
      background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
    }}>
      {/* Sticky Navigation */}
      <div className="fixed top-6 left-1/2" style={{ zIndex: 100, transform: 'translateX(-50%)' }}>
        <PillNav
          logo="/logos/t-logo.png"
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
            className="grid lg:grid-cols-2 gap-12 items-center"
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
                Een 20-jarige front-end developer uit Gilze/Rijen, 
                momenteel studerend ICT met focus op Media en Front-End Development aan Fontys. 
                Ik ben gepassioneerd over het leren van nieuwe technologieën en het constant verbeteren van mijn vaardigheden, 
                altijd bereid om nieuwe ideeën te verkennen en toe te passen.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/90 text-lg leading-relaxed"
              >
                In mijn vrije tijd geniet ik van DJ-en, wat mij de mogelijkheid geeft om creativiteit en technische 
                vaardigheden te combineren door een publiek te 'lezen' en het juiste nummer op het juiste moment te kiezen. Ik ben een 
                sociaal, gemotiveerd en nieuwsgierig persoon, klaar om nieuwe uitdagingen aan te pakken en 
                continu te groeien als developer.
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
                  <div className="text-sm text-white/70 mt-1">Jaar</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">1</div>
                  <div className="text-sm text-white/70 mt-1">Jaar Code</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-white/70 mt-1">Projecten</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personality Gallery Section */}
      <section className="relative py-8 overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-3"
          >
            <motion.h2
              className="text-2xl lg:text-4xl font-black mb-1"
              style={{
                color: "#4ecb71",
                textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
                letterSpacing: "2px",
              }}
            >
              PERSONALITY GALLERY
            </motion.h2>
            <p className="text-white/70 text-xs md:text-sm">
              Scroll of sleep om momenten te verkennen die mij definiëren
            </p>
          </motion.div>
        </div>

        <div 
          className="relative overflow-hidden"
          style={{ 
            height: '550px',
            width: '100vw',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <CircularGallery 
            bend={3} 
            textColor="#4ecb71" 
            borderRadius={0.05} 
            scrollEase={0.02}
            height="550px"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <WorkMethodology 
        title="Timeline"

      />

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

