"use client"

import { motion } from "framer-motion"
import LogoLoop from "./LogoLoop"

const technologies = [
  { node: <span style={{ fontSize: '42px' }}>⚛️</span>, title: "React" },
  { node: <span style={{ fontSize: '42px' }}>⚡</span>, title: "Next.js" },
  { node: <span style={{ fontSize: '42px' }}>📘</span>, title: "TypeScript" },
  { node: <span style={{ fontSize: '42px' }}>🎨</span>, title: "Tailwind CSS" },
  { node: <span style={{ fontSize: '42px' }}>💻</span>, title: "VS Code" },
  { node: <span style={{ fontSize: '42px' }}>📦</span>, title: "Git" },
  { node: <span style={{ fontSize: '42px' }}>🟢</span>, title: "Node.js" },
  { node: <span style={{ fontSize: '42px' }}>🎨</span>, title: "Figma" },
]

export function Technologies() {
  return (
    <section className="py-2 -mt-2" style={{ background: '#000000' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ height: '70px', position: 'relative', overflow: 'hidden' }}
        >
          <LogoLoop
            logos={technologies}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={50}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technologies I use"
          />
        </motion.div>
      </div>
      {/* Green accent line */}
      <div className="w-full h-px mt-2" style={{ background: 'linear-gradient(to right, transparent, rgba(78, 203, 113, 0.4), transparent)' }} />
    </section>
  )
}
