import React from 'react'
import { motion } from 'framer-motion'
import '../public/photo/retratoia.png'

const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
]

export default function App() {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-gradient-to-b from-black/40 to-transparent backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <a href="#home" className="text-lg font-semibold">Vicente Montiel</a>
            <div className="text-xs text-slate-300">Ingeniería Civil Informática</div>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} className="text-sm hover:text-cyan-300 transition">{n.label}</a>
            ))}
            <a href="mailto:vicenmontiel@gmail.com" className="ml-4 inline-block px-3 py-1.5 rounded-md border border-cyan-500 text-xs">Contacto</a>
          </nav>

          <div className="md:hidden">
            <details className="text-right">
              <summary className="cursor-pointer">Menu</summary>
              <div className="mt-2 flex flex-col items-end gap-2">
                {navItems.map(n => (
                  <a key={n.id} href={`#${n.id}`} className="text-sm hover:text-cyan-300">{n.label}</a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* HERO */}
        <section id="home" className="min-h-[80vh] flex items-center">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hola, soy <br/><span className="text-cyan-300">Vicente Montiel</span>
              </h1>
              <p className="mt-4 text-slate-300 max-w-xl">
                Estudiante de Ingeniería Civil Informática en la PUCV. <br/>Me interesa el mundo del desarrollo de software, gestión de proyectos y aplicar tecnologías emergentes, como inteligencia artificial, a proyectos innovadores. <br/>Busco oportunidades de práctica y proyectos donde pueda aplicar todo mi potencial y crecer como profesional.
              </p>

              <div className="mt-6 flex gap-4">
                <a href="#projects" className="px-4 py-2 rounded-md bg-cyan-600/20 border border-cyan-500 hover:bg-cyan-600 hover:text-slate-900 transition">Ver proyectos</a>
                <a href="#contact" className="px-4 py-2 rounded-md border border-slate-600 hover:border-cyan-400 transition">Contactar</a>
              </div>

              <div className="mt-6 text-sm text-slate-400">
                <div>📧 vicenmontiel@gmail.com</div>
                <div>🔗 <a href="http://linkedin.cl" className="underline">linkedin.cl</a></div>
              </div>
            </motion.div>

            <motion.div className="flex justify-center md:justify-end" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}>
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-gradient-to-br from-[#0b1726] to-[#12203a]">
                <img src="../public/photo/retratoia.png" alt="Vicente" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 className="text-2xl font-semibold" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>Sobre mí</motion.h2>
            <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
              Soy estudiante de Ingeniería Civil Informática (PUCV), he participado en proyectos de innovación tecnológica dentro de la universidad con el objetivo de levantar fondos e inversión. 
              <br/>En estos proyectos pongo todo mi conocimiento sobre las tecnologías que domino y aplico metodologías de desarrollo que beneficien al equipo y al producto final.
              <br/> 
            </motion.p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card title="Áreas" content="Desarrollo de Software, Gestión de Proyectos, Inteligencia Artificial" />
              <Card title="Herramientas" content="React, Node.js, Express, Python, LLMs, MediaPipe" />
              <Card title="Metodologías" content="Scrum, Kanban, PMBoK" />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 bg-gradient-to-b from-transparent via-[#071a2f20] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 className="text-2xl font-semibold" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>Proyectos destacados</motion.h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Fitcheck — Project Manager & Desarrollador IA"
                desc={`Lideré un equipo en el desarrollo de un sistema de corrección de ejercicios basado en visión computacional. 1er lugar LiftMeUp 2025, 2do Talento Innovador Santander PUCV 2025.`}
                tech={["React","MediaPipe","Python","IA"]}
              />

              <ProjectCard
                title="Sistema de Recomendación de Videojuegos (Tesis)"
                desc={`Sistema semántico basado en LLM para resolver cold-start en catálogos de videojuegos. Embeddings y pipeline de recomendación.`}
                tech={["Python","LLM","Embeddings"]}
              />

              <ProjectCard
                title="Cocina Altoke (Seremi Valparaíso)"
                desc={`Levantamiento de requisitos para app móvil enfocada en hábitos alimenticios saludables. Presentado en Expo Software PUCV 2025.`}
                tech={["Requisitos","UX","Coordinación Pública"]}
              />

              <ProjectCard
                title="Prototipo Gestión Emergencias (SERNAGEOMIN)"
                desc={`Analicé, diseñé y desarrollé un prototipo web para gestión de emergencias con tickets. Tecnologías: React (Vite), Bootstrap, Node.js, Express, MySQL.`}
                tech={["React","Node.js","MySQL"]}
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 className="text-2xl font-semibold" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>Experiencia</motion.h2>

            <div className="mt-6 space-y-4">
              <ExperienceItem
                company="SERNAGEOMIN"
                role="Práctica Ingeniería de Software"
                period="Dic. 2024 – Ene. 2025"
                desc={`Desarrollo de prototipo web para gestión de emergencias (tickets). Reduciendo tiempos de reporte y generación de incidentes.`}
                tech="React, Vite, Bootstrap, Node.js, Express, MySQL"
              />

              <ExperienceItem
                company="PUCV"
                role="Ayudante de Estructuras de Datos"
                period="Mar. 2023 – Dic. 2023"
                desc={`Diseñé ejercicios prácticos y apoyé clases orientadas al uso eficiente de estructuras de datos. Lenguajes: C, Python.`}
                tech="C, Python"
              />

              <ExperienceItem
                company="DSIC, PUCV"
                role="Inventarista de Servicios Tecnológicos"
                period="Oct. 2023 – Nov. 2023"
                desc={`Inventarios de infraestructura tecnológica, consolidando datos de más de 200 equipos.`}
                tech="Inventario, Gestión"
              />
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-12 bg-slate-900/20">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-xl font-semibold">Certificaciones</h3>
            <div className="mt-3 flex gap-4 flex-wrap text-sm text-slate-300">
              <span className="px-3 py-1 rounded-full border">CCNA v7 (Dic. 2024)</span>
              <span className="px-3 py-1 rounded-full border">Bootcamp Lift Me Up (Oct. 2025)</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <motion.h2 className="text-2xl font-semibold" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>Contacto</motion.h2>
              <p className="mt-4 text-slate-300">¿Interesado en colaborar o necesitas más información? Escríbeme.</p>

              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <div>📧 <a href="mailto:vicenmontiel@gmail.com" className="underline">vicenmontiel@gmail.com</a></div>
                <div>🔗 <a href="http://linkedin.cl" className="underline">linkedin.cl</a></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-slate-800 mt-6">
          <div className="max-w-5xl mx-auto px-6 text-sm text-slate-400">© {new Date().getFullYear()} Vicente Montiel • Ingeniería Civil Informática • PUCV</div>
        </footer>
      </main>
    </div>
  )
}

function Card({ title, content }) {
  return (
    <motion.div className="p-4 rounded-xl border border-slate-700 bg-slate-900/30" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <div className="text-sm text-slate-300 font-semibold">{title}</div>
      <div className="mt-2 text-xs text-slate-400">{content}</div>
    </motion.div>
  )
}

function ProjectCard({ title, desc, tech }) {
  return (
    <motion.article className="p-4 rounded-xl border border-slate-700 bg-gradient-to-br from-[#081226] to-[#0d203a] shadow-lg" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border text-slate-300">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

function ExperienceItem({ company, role, period, desc, tech }) {
  return (
    <motion.div className="p-4 rounded-xl border border-slate-700 bg-slate-900/20" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{company}</div>
          <div className="text-sm text-slate-300">{role}</div>
        </div>
        <div className="text-xs text-slate-400">{period}</div>
      </div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      {tech && <div className="mt-3 text-xs text-slate-400">{tech}</div>}
    </motion.div>
  )
}
