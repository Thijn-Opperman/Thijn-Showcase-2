"use client"

import { motion } from "framer-motion"
import { ArrowRight, Layout, Globe, Code2 } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Het ontwerpen van intuïtieve en visueel aantrekkelijke interfaces die gebruikers raken en doelen bereiken.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Creatieve en moderne website-ontwerpen die de persoonlijkheid van je merk perfect weergeven.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    description:
      "Het bouwen van snelle, responsive en onderhoudbare websites en web applicaties met moderne technologieën.",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-background">
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
              What I can do for you
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Van concept tot realisatie, ik help je bij elke stap
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-2xl bg-muted/30 border border-border hover:shadow-lg transition-all hover:border-primary/50"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="#about"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium group"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg"
            >
              View all services
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
