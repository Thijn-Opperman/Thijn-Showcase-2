"use client"

import { motion } from "framer-motion"
import { Target, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-background"
    >
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
              Nice to meet you!
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ik ben Thijn, een gepassioneerde front-end developer met een oog
              voor detail en een passie voor schone, gebruiksvriendelijke
              interfaces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30" style={{ height: '420px' }}>
                <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src="/thijnberg.png"
                    alt="Thijn Opperman bij zonsondergang"
                    width={400}
                    height={600}
                    className="w-full object-cover"
                    style={{ objectPosition: 'center bottom', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 flex flex-col justify-start"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                Mijn passie voor web development ontstond tijdens mijn studie,
                waar ik ontdekte hoe mooi design en technologie samen kunnen
                komen. Ik geniet ervan om complexe problemen op te lossen en
                gebruiksvriendelijke oplossingen te creëren.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Met een focus op groei, precisie en continue verbetering, streef
                ik er naar om elke dag een stapje beter te worden. Of het nu
                gaat om het perfectioneren van een animatie, het optimaliseren
                van performance of het ontwerpen van een intuïtieve
                gebruikerservaring - ik zet altijd mijn beste beentje voor.
              </p>

              {/* Key values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">Focus op groei</h3>
                    <p className="text-sm text-foreground/70">
                      Continue ontwikkeling
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-primary">Passie voor precisie</h3>
                    <p className="text-sm text-foreground/70">
                      Oog voor detail
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
