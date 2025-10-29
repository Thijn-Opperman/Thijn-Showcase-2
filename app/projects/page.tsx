"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PillNav from "@/components/PillNav"
import { Footer } from "@/components/footer"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non eleifend ipsum, quis venenatis eros. Ut scelerisque odio nisl, ut pretium est sodales ac. Praesent tempus mauris in aliquam egestas. Curabitur non tempus massa. Nulla at est et turpis convallis feugiat. Morbi vestibulum metus quam, vitae pretium dolor eleifend id. Maecenas suscipit diam a diam mollis semper. Vestibulum vitae nulla convallis, commodo urna sed, aliquam ante. Ut tristique arcu ullamcorper augue ullamcorper efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tincidunt tellus id quam eleifend, ut congue ipsum placerat. Vestibulum eleifend mollis sem.",
      image: "/image.png",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non eleifend ipsum, quis venenatis eros. Ut scelerisque odio nisl, ut pretium est sodales ac. Praesent tempus mauris in aliquam egestas. Curabitur non tempus massa. Nulla at est et turpis convallis feugiat. Morbi vestibulum metus quam, vitae pretium dolor eleifend id. Maecenas suscipit diam a diam mollis semper. Vestibulum vitae nulla convallis, commodo urna sed, aliquam ante. Ut tristique arcu ullamcorper augue ullamcorper efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tincidunt tellus id quam eleifend, ut congue ipsum placerat. Vestibulum eleifend mollis sem.",
      image: "/image.png",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non eleifend ipsum, quis venenatis eros. Ut scelerisque odio nisl, ut pretium est sodales ac. Praesent tempus mauris in aliquam egestas. Curabitur non tempus massa. Nulla at est et turpis convallis feugiat. Morbi vestibulum metus quam, vitae pretium dolor eleifend id. Maecenas suscipit diam a diam mollis semper. Vestibulum vitae nulla convallis, commodo urna sed, aliquam ante. Ut tristique arcu ullamcorper augue ullamcorper efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tincidunt tellus id quam eleifend, ut congue ipsum placerat. Vestibulum eleifend mollis sem.",
      image: "/image.png",
      imagePosition: "right",
      hasButton: true
    }
  ]

  return (
    <main className="min-h-screen dark:bg-[#0a1f1a] bg-gray-50" style={{ 
      background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
    }}>
      {/* Theme Toggle */}
      <ThemeToggle />

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
          activeHref="/projects"
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black mb-6"
            style={{
              color: "#4ecb71",
              textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
              letterSpacing: "2px",
            }}
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Explore a collection of my recent work and creative projects
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                project.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Text Content */}
                <div className={`space-y-6 ${
                  project.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  {/* Project Title with special styling for Project 2 */}
                  {project.id === 2 ? (
                    <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-4xl lg:text-5xl font-black"
                      style={{
                        background: 'linear-gradient(135deg, #4ecb71 0%, #39a6cd 50%, #4ecb71 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '1px',
                      }}
                    >
                      {project.title}
                    </motion.h2>
                  ) : (
                    <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-4xl lg:text-5xl font-black text-primary"
                      style={{
                        textShadow: "0 0 20px rgba(78, 203, 113, 0.3)",
                        letterSpacing: '1px',
                      }}
                    >
                      {project.title}
                    </motion.h2>
                  )}

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white/80 text-base lg:text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* View Project Button for Project 3 */}
                  {project.hasButton && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(78, 203, 113, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold transition-all relative overflow-hidden group"
                      style={{ 
                        background: 'linear-gradient(135deg, #4ecb71 0%, #39a6cd 100%)',
                        borderRadius: '8px',
                        boxShadow: "0 4px 20px rgba(78, 203, 113, 0.4)",
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Project
                        <ExternalLink className="h-5 w-5" />
                      </span>
                      <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" 
                        style={{ background: 'linear-gradient(135deg, #39a6cd 0%, #4ecb71 100%)' }} 
                      />
                    </motion.button>
                  )}

                  {/* Project Number */}
                  <div className="absolute -left-4 lg:-left-12 top-0 text-8xl lg:text-9xl font-black opacity-5 text-primary pointer-events-none">
                    0{project.id}
                  </div>
                </div>

                {/* Image with hover effect for Project 1 */}
                <motion.div
                  className={`relative ${
                    project.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Glow effect */}
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

                    {/* Image with special hover for Project 1 */}
                    <motion.div
                      whileHover={project.id === 1 ? { 
                        scale: 1.08,
                        boxShadow: "0 25px 50px rgba(78, 203, 113, 0.5)"
                      } : {}}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-2xl border-2 border-primary/30"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/50" />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/50" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Project 3 */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="relative max-w-2xl w-full p-8 rounded-2xl border-2 border-primary/30"
            style={{
              background: 'linear-gradient(135deg, #0a1f1a 0%, #001010 50%, #0a1f1a 100%)',
              boxShadow: '0 25px 50px rgba(78, 203, 113, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-black text-primary mb-4">
              Project {selectedProject} Details
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Here you can add more detailed information about the project, including technologies used, challenges faced, and outcomes achieved.
            </p>
            <button
              onClick={() => setSelectedProject(null)}
              className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

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

