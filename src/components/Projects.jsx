import React from "react"
import { useInView } from "./useInView"

const projects = [
  {
    title: "Restriction Enzyme Digestion Mapping",
    description:
      "Restriction Enzyme Digestion of DNA sequences.",
    technologies: ["Biopython/python", "HTML", "CSS"],
    link: "https://github.com/ManzoorLoriya/Restriction-digestion.git",
  },
  {
    title: "PCR primer designing",
    description:
      "A modern web application for designing PCR primers, checking their specificity, and simulating PCR reactions.",
    technologies: ["Biopython/python", "HTML", "CSS", "Javascript"],
    link: "https://github.com/ManzoorLoriya/primer-pcr-app.git",
  },
]

export default function Projects() {
  const { ref, isInView } = useInView()
  return (
    <section id="projects" ref={ref} className="py-20 bg-transparent text-white">
      <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`bg-black/60 border border-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between transition ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs bg-black/40 rounded px-2 py-1 border border-gray-800"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded"
              >
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


