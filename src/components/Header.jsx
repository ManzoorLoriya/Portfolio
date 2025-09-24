import React from "react"
import resumePdf from "./Manjur_Loriya_Bioinformatician.pdf"

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur text-white p-4 border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-cyan-400">Manjur Mahamad</span>
        <nav className="space-x-6" aria-label="Primary Navigation">
          <a href="#projects" className="relative hover:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">Projects</a>
          <a href="#expertise" className="relative hover:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">Expertise</a>
          <a href="#contact" className="relative hover:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">Contact</a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="relative hover:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">Resume</a>
        </nav>
      </div>
    </header>
  )
}
