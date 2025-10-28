"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const skillCategories = {
  Core: ["JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Vue.js"],
  "UX/UI Design": ["Figma", "Adobe XD", "User Research"],
  Development: ["Git", "Testing", "Performance Optimization"],
  "Soft Skills": ["Communication", "Problem Solving", "Teamwork"],
}

const programs = ["Figma", "VS Code", "GitHub", "Slack", "Git"]

export function Skills() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Skills & Tools
            </h2>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-muted rounded-full text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-16"
          >
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Programs
              </h3>
              <div className="flex flex-wrap gap-2">
                {programs.map((program) => (
                  <span
                    key={program}
                    className="px-3 py-1.5 text-sm bg-muted rounded-full text-foreground/80"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <Quote className="w-8 h-8 text-primary" />
              <p className="text-lg italic text-foreground/80 max-w-2xl">
                "This is my opinion but if you watch the projects, you can see it
                by yourself."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
