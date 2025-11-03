"use client"

import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

export default function CVPage() {
  const componentRef = useRef<HTMLDivElement>(null)
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  })

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Print Button */}
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-[#4ecb71] text-white rounded-lg font-semibold hover:bg-[#45b865] transition-colors shadow-lg"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* CV Content */}
      <div ref={componentRef} className="max-w-4xl mx-auto bg-white p-12 text-gray-900 print:p-8">
        
        {/* Header */}
        <div className="text-center mb-8 border-b-4 border-[#4ecb71] pb-6">
          <h1 className="text-4xl font-black text-[#4ecb71] mb-2">THIJN OPPERMAN</h1>
          <p className="text-xl font-semibold text-gray-700">Front-End Developer</p>
          <div className="flex justify-center gap-4 mt-3 text-sm">
            <span>Gilze/Rijen, Nederland</span>
            <span>•</span>
            <a href="mailto:t.opperman@student.fontys.nl" className="text-[#4ecb71] hover:underline">
              t.opperman@student.fontys.nl
            </a>
            <span>•</span>
            <a href="https://github.com/Thijn-Opperman" target="_blank" className="text-[#4ecb71] hover:underline">
              GitHub
            </a>
          </div>
        </div>

        {/* About Me */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#4ecb71] mb-3 border-b-2 border-gray-300 pb-2">
            Over Mij
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Een 20-jarige front-end developer uit Gilze/Rijen, momenteel studerend ICT met focus op Media en Front-End Development aan Fontys. Ik ben gepassioneerd over het leren van nieuwe technologieën en het constant verbeteren van mijn vaardigheden, altijd bereid om nieuwe ideeën te verkennen en toe te passen.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            In mijn vrije tijd geniet ik van DJ-en, wat mij de mogelijkheid geeft om creativiteit en technische vaardigheden te combineren. Ik ben een sociaal, gemotiveerd en nieuwsgierig persoon, klaar om nieuwe uitdagingen aan te pakken en continu te groeien als developer.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#4ecb71] mb-3 border-b-2 border-gray-300 pb-2">
            Opleiding
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">Fontys Hogeschool - ICT Media</h3>
            <p className="text-gray-700 font-semibold">Front-End Development Specialisatie</p>
            <p className="text-gray-600 text-sm">2024 - Heden | Eindhoven, Nederland</p>
            <p className="text-gray-700 mt-1">
              Propedeuse behaald • Focus op digitale media, content creatie en multimedia toepassingen
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">HAVO Diploma</h3>
            <p className="text-gray-700 font-semibold">Technasium - Natuur & Techniek / Natuur & Gezondheid</p>
            <p className="text-gray-600 text-sm">2018 - 2024</p>
            <p className="text-gray-700 mt-1">
              Ervaring met technisch en onderzoekend denken, samenwerking en het ontwikkelen van out-of-the-box oplossingen
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#4ecb71] mb-3 border-b-2 border-gray-300 pb-2">
            Projecten
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">Quality Lodgings</h3>
            <p className="text-gray-600 text-sm">UI/UX Design | 2024</p>
            <p className="text-gray-700">
              Verbeterde de gebruikerservaring van een platform voor luxe, onafhankelijke hotels in Europa. Focus op gebruikersonderzoek, iteratief ontwerpen en het vinden van de balans tussen functionaliteit en esthetiek.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">Paturain Naturel</h3>
            <p className="text-gray-600 text-sm">Campagne Concept | 2024</p>
            <p className="text-gray-700">
              Ontwikkelde een digitaal campagneconcept voor Paturain met interactieve elementen zoals recepten en spellen. Leerzame ervaring in gebruikersonderzoek, strategisch ontwerpen en het vertalen van inzichten naar concrete digitale concepten.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">Rosh/Lenovo Legion</h3>
            <p className="text-gray-600 text-sm">Toernooitool | 2025</p>
            <p className="text-gray-700">
              Ontwierp een volledig customizable online toernooitool voor Twitch-integratie met mini-games en dashboards. Combinatie van user-centered design, prototyping en AI-ondersteuning met eigen creatieve keuzes.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#4ecb71] mb-3 border-b-2 border-gray-300 pb-2">
            Vaardigheden
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Technisch:</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• JavaScript, TypeScript, React, Next.js</li>
                <li>• HTML5, CSS3, Tailwind CSS</li>
                <li>• Framer Motion, WebGL, OGL</li>
                <li>• Git, Figma, VS Code, Cursor AI</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Soft Skills:</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Gebruikersonderzoek & UX Design</li>
                <li>• Iteratief ontwerpen & Prototyping</li>
                <li>• Teamwork & Samenwerking</li>
                <li>• Probleemoplossen & Creativiteit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="text-2xl font-bold text-[#4ecb71] mb-3 border-b-2 border-gray-300 pb-2">
            Tools & Methoden
          </h2>
          <p className="text-gray-700 text-sm">
            <strong>Werkprocessen:</strong> Research → Design → Code → Test • <strong>Tools:</strong> Figma, Adobe Photoshop, GitHub, Vercel • <strong>Focus:</strong> Performance Optimization, Responsive Design, Animation & Interactions
          </p>
        </section>
      </div>
    </div>
  )
}
