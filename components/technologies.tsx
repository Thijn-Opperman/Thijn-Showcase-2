"use client"

import { motion } from "framer-motion"
import LogoLoop from "./LogoLoop"
import { 
  SiFigma, 
  SiAdobephotoshop,
  SiOpenai,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si"

export function Technologies() {
  const technologies = [
    { 
      node: <SiFigma size={48} style={{ color: '#4ecb71' }} />,
      alt: "Figma",
      title: "Figma"
    },
    { 
      node: <SiAdobephotoshop size={48} style={{ color: '#4ecb71' }} />,
      alt: "Photoshop",
      title: "Photoshop"
    },
    { 
      src: "/logos/vscode.svg",
      alt: "VS Code",
      title: "VS Code",
      width: 48,
      height: 48
    },
    { 
      node: <SiOpenai size={48} style={{ color: '#4ecb71' }} />,
      alt: "ChatGPT",
      title: "ChatGPT"
    },
    { 
      node: <SiReact size={48} style={{ color: '#4ecb71' }} />,
      alt: "React",
      title: "React"
    },
    { 
      node: <SiNextdotjs size={48} style={{ color: '#4ecb71' }} />,
      alt: "Next.js",
      title: "Next.js"
    },
    { 
      node: <SiHtml5 size={48} style={{ color: '#4ecb71' }} />,
      alt: "HTML",
      title: "HTML"
    },
    { 
      node: <SiCss3 size={48} style={{ color: '#4ecb71' }} />,
      alt: "CSS",
      title: "CSS"
    },
    { 
      node: <SiJavascript size={48} style={{ color: '#4ecb71' }} />,
      alt: "JavaScript",
      title: "JavaScript"
    },
  ]

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
