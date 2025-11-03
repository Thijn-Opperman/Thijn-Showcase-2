"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PillNav from "@/components/PillNav"
import { Footer } from "@/components/footer"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Quality Lodgings",
      description: "Ik verbeterde de gebruikerservaring van Quality Lodgings, een platform voor luxe, onafhankelijke hotels in Europa. Mijn focus lag op de zoek- en hotelpagina’s: ik maakte informatie overzichtelijker en de website intuïtiever, zonder de exclusieve uitstraling van het merk te verliezen.",
      longDescription: `Bij dit project werkte ik aan het verbeteren van de gebruikerservaring van Quality Lodgings, een platform voor luxe, onafhankelijke hotels in Europa. Het huidige platform had een aantal uitdagingen: de zoekfunctionaliteit was niet intuïtief, en belangrijke informatie zoals reviews en hotelopties was moeilijk vindbaar. Dit zorgde ervoor dat bezoekers soms overstapten naar andere websites.

Mijn rol binnen het team van vier was het ontwerpen van een vernieuwde hotelpagina. Om tot een goed ontwerp te komen, begon ik met gebruikersonderzoek: ik deed observaties, stelde interviewvragen op en voerde gesprekken met echte gebruikers. Deze inzichten verwerkte ik in user stories, waarmee we de belangrijkste knelpunten konden identificeren.

Vervolgens maakte ik paper prototypes om snel verschillende oplossingen te testen. Op basis van feedback voegde ik elementen toe zoals reviews, vergelijkingsopties, extra foto’s en een uitklapbare beschrijving, zodat alle relevante informatie overzichtelijk beschikbaar was zonder dat de luxe uitstraling van het merk verloren ging. Daarna werkte ik het ontwerp uit in Figma, inclusief interactieve elementen die de gebruikservaring realistischer maakten.

Het resultaat was een hotelpagina die zowel functioneel als visueel aansluit bij het merk. Het ontwerp kreeg positieve feedback van gebruikers, medestudenten en de opdrachtgever, die aangaf de inzichten te willen gebruiken voor toekomstige verbeteringen van de website.

Dit project leerde mij hoe belangrijk gebruikersonderzoek, iteratief ontwerpen en het vinden van de balans tussen functionaliteit en esthetiek zijn. Het was een waardevolle ervaring in het vertalen van echte gebruikersbehoeften naar concrete ontwerpkeuzes.`,
      image: "/projects/qualitylodgings.png",
      images: [
        "/projects/qualitylodgings/Hotelpagina 1.png",
        "/projects/qualitylodgings/Hotelpagina 2.png",
        "/projects/qualitylodgings/Hotelpagina 3.png",
        "/projects/qualitylodgings/Juiste paperprototype.jpg",
        "/projects/qualitylodgings.png"
      ],
      imagePosition: "right",
      github: "https://github.com/jouwrepo/project1",
      figma: "https://www.figma.com/design/QbTLSUu7nLg4ucJ7FT0cOQ/Quality-Lodgings?node-id=0-1&m=dev&t=EmCtCRFtOJWL4T8d-1"
    },
    {
      id: 2,
      title: "Paturain naturel",
      description: "Korte introductie project 2.",
      longDescription: "Gedetailleerde omschrijving van project 2. Hier kun je dieper ingaan op de projectdetails, gebruikte tools, features en resultaten.",
      image: "/projects/paturain.png",
      images: ["/projects/paturain.png", "/projects/paturain.png", "/projects/paturain.png", "/projects/paturain.png", "/projects/paturain.png"],
      imagePosition: "left",
      github: "https://github.com/jouwrepo/project2"
    },
    {
      id: 3,
      title: "Rosh/Lenovo Legion",
      description: "Intro voor project drie.",
      longDescription: "Een flink stuk extra tekst rondom dit unieke project. Hier kun je een mooi verhaal kwijt over het proces, de tech-stack en de ervaringen.",
      image: "/projects/rosh.png",
      images: ["/projects/rosh.png", "/projects/rosh.png", "/projects/rosh.png", "/projects/rosh.png", "/projects/rosh.png"],
      imagePosition: "right",
      github: "https://github.com/jouwrepo/project3"
    } 
  ]

  return (
    <main className="min-h-screen dark:bg-[#0a1f1a] bg-gray-50" style={{ 
      background: 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%, var(--tw-gradient-from) 100%)',
    }}>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Sticky Navigation */}
      <div className="fixed top-6 left-1/2" style={{ zIndex: 100, transform: 'translateX(-50%)' }}>
        <PillNav
          logo="/logos/t-logo.png"
          logoAlt="Thijn Opperman"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About me', href: '/about' },
            { label: 'Projects', href: '/projects' }
          ]}
          activeHref="/projects"
          baseColor="#000"
          pillColor="#4ecb71"
          hoveredPillTextColor="#000"
          pillTextColor="#000"
        />
      </div>

      {/* Grid Background Pattern */}
      <div className="fixed inset-0 opacity-8 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(78, 203, 113, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 203, 113, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black mb-6"
            style={{
              color: "#4ecb71",
              textShadow: "0 0 30px rgba(78, 203, 113, 0.3)",
              letterSpacing: "2px",
            }}
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Explore a collection of my recent work and creative projects
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#162824]/60 border-2 border-primary/20 rounded-2xl overflow-hidden shadow-lg relative flex flex-col transition-transform hover:scale-105 cursor-pointer group min-h-[380px]"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedProject(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full aspect-5/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-2xl" />
              </div>
              <div className="flex-1 flex flex-col py-6 px-5 gap-3">
                <h2 className="text-xl font-black text-primary mb-1 truncate-2-lines" style={{minHeight:'2.3em'}}>{project.title}</h2>
                <p className="text-white/80 text-base leading-relaxed mb-3 min-h-[5.7em] line-clamp-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-primary text-black rounded-md font-semibold shadow hover:bg-primary/90 transition-colors w-fit mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.36.5 0 5.86 0 12.42c0 5.25 3.44 9.7 8.22 11.27.6.13.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.82 1.33 3.51 1.02.11-.78.42-1.33.76-1.63-2.66-.3-5.46-1.35-5.46-6.02 0-1.33.47-2.42 1.24-3.27-.12-.3-.54-1.48.12-3.09 0 0 1-.33 3.28 1.24a11.2 11.2 0 013-.41c1.02 0 2.06.14 3.03.41 2.27-1.57 3.27-1.24 3.27-1.24.66 1.61.24 2.79.12 3.09.78.85 1.24 1.94 1.24 3.27 0 4.68-2.81 5.71-5.48 6.01.43.37.81 1.12.81 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.71.83.59C20.56 22.12 24 17.67 24 12.42 24 5.86 18.63.5 12 .5z"/></svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal voor projectdetails */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-200 flex items-center justify-center p-4" style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="relative max-w-4xl lg:max-w-5xl w-full p-8 rounded-2xl border-2 border-primary/30 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-primary/30 scrollbar-thumb-rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #0a1f1a 0%, #001010 50%, #0a1f1a 100%)',
              boxShadow: '0 25px 50px rgba(78, 203, 113, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Duidelijke, zichtbare kruis sluitknop */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-5 w-10 h-10 flex items-center justify-center bg-primary/90 text-black text-2xl hover:bg-red-500 hover:text-white transition-colors rounded-full shadow-lg z-10 border-2 border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              title="Sluiten"
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' /></svg>
            </button>
            {projects.filter(p => p.id === selectedProject).map((project) => (
              <div key={project.id}>
                <h3 className="text-3xl font-black text-primary mb-3">{project.title}</h3>
                <p className="text-white/70 text-base mb-3">{project.description}</p>
                <p className="text-white/90 text-lg mb-6" style={{whiteSpace:'pre-line'}}>{project.longDescription}</p>
                {/* Hoofdafbeelding groot */}
                <div className="w-full aspect-video relative rounded-2xl overflow-hidden border-2 border-primary/30 mb-6">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                {/* Fotogalerij */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-video relative rounded-xl overflow-hidden border border-primary/20 min-h-[130px] md:min-h-[140px] lg:min-h-[160px] bg-[#162824]">
                      <Image src={img} alt={`${project.title} extra afbeelding ${i+1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                {/* Github knop */}
                <div className="flex justify-end mt-4 gap-3 flex-wrap">
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 text-black rounded-lg font-semibold shadow hover:bg-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor"><path d="M136 24H96a40 40 0 0 0 0 80h8a40 40 0 0 0 0 80h8v24a40 40 0 1 0 40-40h-16a40 40 0 0 0 0-80h16a40 40 0 0 0 0-80Zm-40 64a24 24 0 0 1 0-48h40v48Zm8 80a24 24 0 0 1 0-48h16v48Zm48 40a24 24 0 1 1-48 0v-24h24a24 24 0 0 1 24 24Zm16-64h-40V88h40a24 24 0 0 1 0 48Zm0-64h-40V40h40a24 24 0 0 1 0 48Z"/></svg>
                      Bekijk Figma
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-black rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.36.5 0 5.86 0 12.42c0 5.25 3.44 9.7 8.22 11.27.6.13.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.82 1.33 3.51 1.02.11-.78.42-1.33.76-1.63-2.66-.3-5.46-1.35-5.46-6.02 0-1.33.47-2.42 1.24-3.27-.12-.3-.54-1.48.12-3.09 0 0 1-.33 3.28 1.24a11.2 11.2 0 013-.41c1.02 0 2.06.14 3.03.41 2.27-1.57 3.27-1.24 3.27-1.24.66 1.61.24 2.79.12 3.09.78.85 1.24 1.94 1.24 3.27 0 4.68-2.81 5.71-5.48 6.01.43.37.81 1.12.81 2.26 0 1.63-.01 2.94-.01 3.34 0 .32.22.71.83.59C20.56 22.12 24 17.67 24 12.42 24 5.86 18.63.5 12 .5z"/></svg>
                    Bekijk op GitHub
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Subtle glow effects */}
      <div 
        className="fixed top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
        }}
      />
      <div 
        className="fixed bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4ecb71 0%, transparent 70%)',
        }}
      />

      <Footer />
    </main>
  )
}

