"use client"

import { motion } from "framer-motion"
import LogoLoop from "./LogoLoop"

const technologies = [
  { 
    src: "/logos/figma.svg",
    alt: "Figma",
    title: "Figma",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/photopea.svg",
    alt: "Photoshop",
    title: "Photoshop",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/vscode.svg",
    alt: "VS Code",
    title: "VS Code",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/chatgpt.svg",
    alt: "ChatGPT",
    title: "ChatGPT",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/react.svg",
    alt: "React",
    title: "React",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/nextdotjs.svg",
    alt: "Next.js",
    title: "Next.js",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/html5.svg",
    alt: "HTML",
    title: "HTML",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/css.svg",
    alt: "CSS",
    title: "CSS",
    width: 48,
    height: 48
  },
  { 
    src: "/logos/javascript.svg",
    alt: "JavaScript",
    title: "JavaScript",
    width: 48,
    height: 48
  },
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
          style={{ 
            height: '60px', 
            position: 'relative', 
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LogoLoop
            logos={technologies}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={50}
            pauseOnHover
            scaleOnHover
            fadeOut={false}
            ariaLabel="Technologies I use"
          />
        </motion.div>
      </div>
      {/* Green accent line */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(78, 203, 113, 0.4), transparent)' }} />
    </section>
  )
}
