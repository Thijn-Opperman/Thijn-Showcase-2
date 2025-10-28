"use client"

import { Github, Linkedin, Mail, Coffee, Code2, Music } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/thijnopperman",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/thijnopperman",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:thijnopperman@example.com",
    },
  ]

  const funFacts = [
    { icon: Coffee, text: "Powered by coffee ☕", color: "#4ecb71" },
    { icon: Code2, text: "Built with React & Next.js", color: "#39a6cd" },
    { icon: Music, text: "DJ by night 🎧", color: "#4ecb71" },
  ]

  return (
    <footer id="contact" className="relative py-12 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0a1f1a 0%, #001010 100%)',
    }}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-black"
              style={{
                background: 'linear-gradient(135deg, #4ecb71 0%, #39a6cd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let's Build Something Epic! 🚀
            </h2>
            <p className="text-base lg:text-lg text-white/80">
              Got a cool project? <span className="text-primary font-semibold">Let's chat!</span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-primary/30 hover:border-primary transition-all relative group"
                  aria-label={social.label}
                  style={{
                    background: 'linear-gradient(135deg, rgba(78, 203, 113, 0.1), rgba(57, 166, 205, 0.1))',
                    boxShadow: '0 4px 15px rgba(78, 203, 113, 0.2)',
                  }}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Fun Facts Section - Inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-6 text-xs text-white/60"
          >
            {funFacts.map((fact, index) => {
              const Icon = fact.icon
              return (
                <span key={index} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4" style={{ color: fact.color }} />
                  {fact.text}
                </span>
              )
            })}
          </motion.div>

          {/* Divider with heart */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-xl" style={{ background: 'linear-gradient(180deg, #0a1f1a 0%, #001010 100%)' }}>
                💚
              </span>
            </div>
          </div>

          {/* Bottom Section with humor */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center space-y-2"
          >
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Thijn Opperman. 
              <span className="text-primary"> Made with ☕ and Stack Overflow</span>
            </p>
            <motion.p
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white/40 text-xs italic"
            >
              "Debugging is like being the detective and the murderer" 🕵️
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px" 
        style={{ background: 'linear-gradient(to right, transparent, #4ecb71, transparent)' }} 
      />
    </footer>
  )
}
