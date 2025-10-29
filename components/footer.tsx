"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About me", href: "/about" },
    { label: "Projects", href: "/projects" },
  ]

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
      href: "mailto:thijn.opperman@outlook.com",
    },
  ]

  return (
    <footer id="contact" className="relative py-12 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #0a1f1a 0%, #001010 100%)',
    }}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                Navigatie
              </h3>
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:t.opperman@student.fontys.nl"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  t.opperman@student.fontys.nl
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                Social
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all group"
                      style={{
                        background: 'rgba(78, 203, 113, 0.1)',
                        borderColor: 'rgba(78, 203, 113, 0.3)',
                      }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t mb-6" style={{ borderColor: 'rgba(78, 203, 113, 0.2)' }} />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          >
            {/* Copyright */}
            <p className="text-white/50">
              © {new Date().getFullYear()} Thijn Opperman. Alle rechten voorbehouden.
            </p>
            
            {/* Humoristische notitie */}
            <p className="text-white/40 text-xs italic">
              Built with love, way too many errors, and an unhealthy amount of coffee
            </p>
          </motion.div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px" 
        style={{ background: 'linear-gradient(to right, transparent, #4ecb71, #39a6cd, #4ecb71, transparent)' }} 
      />
    </footer>
  )
}
