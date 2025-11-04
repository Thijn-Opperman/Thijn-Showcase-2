import { Hero } from "@/components/hero"
import { Technologies } from "@/components/technologies"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WorkProcess } from "@/components/work-process"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import PillNav from "@/components/PillNav"

export default function Home() {
  return (
    <main>
      {/* Navigation - Logo links, Nav rechts */}
      <PillNav
        logo="/logos/t-logo.png"
        logoAlt="Thijn Opperman"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About me', href: '/about' },
          { label: 'Projects', href: '/projects' }
        ]}
        activeHref="/"
        baseColor="#000"
        pillColor="#4ecb71"
        hoveredPillTextColor="#000"
        pillTextColor="#000"
      />

      <Hero />
      <Technologies />
      <About />
      <WorkProcess />
      <Services />
      <Skills />
      <Footer />
    </main>
  )
}