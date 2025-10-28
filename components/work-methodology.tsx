"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Research",
    description:
      "Grondige analyse van de doelgroep, doelstellingen en best practices om de beste oplossing te bepalen.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Het creëren van intuïtieve en visueel aantrekkelijke ontwerpen met focus op gebruikerservaring.",
  },
  {
    icon: Code,
    title: "Code",
    description:
      "Schone, geoptimaliseerde en onderhoudbare code met moderne best practices en frameworks.",
  },
  {
    icon: TestTube,
    title: "Test",
    description:
      "Uitgebreid testen op verschillende apparaten en browsers om kwaliteit te garanderen.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Professionele deploy en monitoring om ervoor te zorgen dat alles perfect werkt.",
  },
]

export function WorkMethodology() {
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
              The way I work
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Een gestructureerde aanpak om het beste resultaat te garanderen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="h-full p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all hover:border-primary/50">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
