import { Hero } from "@/components/hero"
import { Technologies } from "@/components/technologies"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import PillNav from "@/components/PillNav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main>
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
          activeHref="/"
          baseColor="#000"
          pillColor="#4ecb71"
          hoveredPillTextColor="#000"
          pillTextColor="#000"
        />
      </div>

      <Hero />
      <Technologies />
      <About />
      <Services />
      <Skills />
      <Footer />
    </main>
  )
}