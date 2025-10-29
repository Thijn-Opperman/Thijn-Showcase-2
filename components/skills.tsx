"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { 
  Code, 
  Heart, 
  Mic,
  FileText,
  Presentation,
  UserSearch,
  TrendingUp,
  GitCompare,
  Brain,
  Sparkles,
  Users,
  Calendar,
  Handshake,
} from "lucide-react"
import Image from "next/image"

// Technical skills without levels - pure visual showcase
const technicalSkills = {
  "Programming Languages": [
    { name: "JavaScript", icon: "/logos/javascript.svg" },
    { name: "HTML", icon: "/logos/html5.svg" },
    { name: "CSS", icon: "/logos/css.svg" },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: "/logos/react.svg" },
    { name: "Next.js", icon: "/logos/nextdotjs.svg" },
  ],
  "Design Tools": [
    { name: "Figma", icon: "/logos/figma.svg" },
  ],
  "Development Tools": [
    { name: "VS Code", icon: "/logos/vscode.png" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Cursor AI", icon: "/logos/cursor.png" },
  ],
}

// Soft skills without levels - pure visual showcase
const softSkills = {
  "Communication": [
    { name: "Verbal Communication", icon: Mic },
    { name: "Written Communication", icon: FileText },
    { name: "Presentation", icon: Presentation },
  ],
  "Research & Analysis": [
    { name: "User Research", icon: UserSearch },
    { name: "Market Research", icon: TrendingUp },
    { name: "Competitor Analysis", icon: GitCompare },
  ],
  "Problem Solving": [
    { name: "Analytical Thinking", icon: Brain },
    { name: "Creative Solutions", icon: Sparkles },
  ],
  "Collaboration": [
    { name: "Teamwork", icon: Users },
    { name: "Project Coordination", icon: Calendar },
    { name: "Client Relations", icon: Handshake },
  ],
}

type SkillType = "technical" | "soft"

interface TechnicalSkill {
  name: string
  icon: string | null
  isMonochrome?: boolean
  fallbackIcon?: string
}

interface SoftSkill {
  name: string
  icon: typeof Mic
}


export function Skills() {
  const [activeType, setActiveType] = useState<SkillType>("technical")
  const currentSkills = activeType === "technical" ? technicalSkills : softSkills

  return (
    <section className="relative py-24 overflow-hidden dark:bg-[#0a1f1a] bg-gray-50" style={{
      background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
    }}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[300px] rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[250px] rounded-full blur-3xl opacity-8"
        style={{ background: 'radial-gradient(circle, #5dd39e 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-black mb-6"
              style={{
                color: "#4ecb71",
                textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
                letterSpacing: "1px",
              }}
            >
              Skills & Tools
            </motion.h2>
            
            {/* Interactive Toggle Switch */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 p-1.5 rounded-full border"
              style={{
                background: 'rgba(78, 203, 113, 0.05)',
                borderColor: 'rgba(78, 203, 113, 0.3)',
                boxShadow: '0 0 20px rgba(78, 203, 113, 0.1)',
              }}
            >
              <motion.button
                onClick={() => setActiveType("technical")}
                className="relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{
                  color: activeType === "technical" ? "#000" : "#4ecb71",
                }}
              >
                {activeType === "technical" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: '#4ecb71',
                      boxShadow: '0 0 20px rgba(78, 203, 113, 0.5)',
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
                <Code className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Technical</span>
              </motion.button>

              <motion.button
                onClick={() => setActiveType("soft")}
                className="relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{
                  color: activeType === "soft" ? "#000" : "#4ecb71",
                }}
              >
                {activeType === "soft" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: '#4ecb71',
                      boxShadow: '0 0 20px rgba(78, 203, 113, 0.5)',
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
                <Heart className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Soft Skills</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Animated Skills Content - Pure Visual Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeType}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="grid md:grid-cols-2 gap-6"
            >
              {Object.entries(currentSkills).map(([category, skills], categoryIndex) => {
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1, 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="relative rounded-2xl border p-6 overflow-hidden group"
                    style={{
                      background: 'rgba(78, 203, 113, 0.05)',
                      borderColor: 'rgba(78, 203, 113, 0.2)',
                    }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: 'rgba(78, 203, 113, 0.4)',
                    }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at top right, rgba(78, 203, 113, 0.15), transparent 70%)`,
                      }}
                    />

                    {/* Category Header */}
                    <div className="mb-6">
                      <h3 
                        className="font-bold text-lg uppercase tracking-wide" 
                        style={{ color: '#4ecb71' }}
                      >
                        {category}
                      </h3>
                    </div>

                    {/* Skills Grid - Large Visual Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {skills.map((skill: TechnicalSkill | SoftSkill, skillIndex: number) => {
                        const isTechnical = activeType === "technical"
                        const technicalSkill = skill as TechnicalSkill
                        const softSkill = skill as SoftSkill
                        const SkillIcon = isTechnical ? null : softSkill.icon
                        
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ 
                              delay: categoryIndex * 0.1 + skillIndex * 0.06,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="relative group/skill"
                            whileHover={{ y: -5 }}
                          >
                            <motion.div
                              className="relative rounded-xl p-5 border overflow-hidden cursor-pointer h-full flex flex-col items-center justify-center text-center"
                              style={{
                                background: 'rgba(78, 203, 113, 0.03)',
                                borderColor: 'rgba(78, 203, 113, 0.2)',
                              }}
                              whileHover={{
                                borderColor: 'rgba(78, 203, 113, 0.5)',
                                boxShadow: '0 12px 32px rgba(78, 203, 113, 0.25)',
                                background: 'rgba(78, 203, 113, 0.08)',
                              }}
                            >
                              {/* Icon/Logo - Large and Centered */}
                              <div className="relative z-10 mb-3 flex items-center justify-center">
                              {isTechnical && technicalSkill.icon ? (
                                  <div className="relative w-16 h-16 flex items-center justify-center">
                                    {technicalSkill.icon.startsWith('http') ? (
                                      <img
                                        src={technicalSkill.icon}
                                        alt={technicalSkill.name}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                        style={{ 
                                          filter: technicalSkill.isMonochrome 
                                            ? 'brightness(0) saturate(100%)' 
                                            : 'none' 
                                        }}
                                      />
                                    ) : (
                                      <Image
                                        src={technicalSkill.icon}
                                        alt={technicalSkill.name}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                        style={{
                                          filter: technicalSkill.isMonochrome
                                            ? 'brightness(0) saturate(100%)'
                                            : undefined
                                        }}
                                      />
                                    )}
                                  </div>
                                ) : isTechnical && technicalSkill.fallbackIcon ? (
                                  <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                                    style={{
                                      background: 'rgba(78, 203, 113, 0.15)',
                                      border: '2px solid rgba(78, 203, 113, 0.3)',
                                    }}
                                  >
                                    <Code className="w-8 h-8" style={{ color: '#4ecb71' }} />
                                  </div>
                                ) : !isTechnical && SkillIcon ? (
                                  <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                                    style={{
                                      background: 'rgba(78, 203, 113, 0.15)',
                                      border: '2px solid rgba(78, 203, 113, 0.3)',
                                    }}
                                  >
                                    <SkillIcon className="w-8 h-8" style={{ color: '#4ecb71' }} />
                                  </div>
                                ) : null}
                              </div>

                              {/* Skill Name */}
                              <span 
                                className="text-xs font-semibold relative z-10 block"
                                style={{ color: '#4ecb71' }}
                              >
                                {skill.name}
                              </span>

                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Animated corner decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
                      style={{
                        background: 'radial-gradient(circle, #4ecb71, transparent)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
