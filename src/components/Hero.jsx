import React from "react"
import { useInView } from "./useInView"
import { useMouseParallax } from "./useParallax"

export default function Hero() {
  const { ref, isInView } = useInView()
  const { onMouseMove, style } = useMouseParallax(10)
  return (
    <section ref={ref} onMouseMove={onMouseMove} className="relative overflow-hidden bg-transparent text-white text-center py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(6,182,212,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div style={style} className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500 blur-3xl"></div>
        <div style={style} className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500 blur-3xl"></div>
      </div>
      <h1 className={`relative text-4xl font-bold mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>Hello, I’m Manjur Mahamad 👋</h1>
      <p className={`text-lg max-w-2xl mx-auto ${isInView ? 'animate-fade-in-up [animation-delay:120ms]' : 'opacity-0 translate-y-4'}`}>
        A passionate <span className="text-cyan-400">Bioinformatician</span> who loves working with genomics, proteomics, and computational biology.
      </p>
      <blockquote className={`italic mt-6 ${isInView ? 'animate-fade-in-up [animation-delay:240ms]' : 'opacity-0 translate-y-4'}`}>
        “Science is the poetry of reality.” – Richard Dawkins
      </blockquote>
      <div className={`mt-8 space-x-4 ${isInView ? 'animate-fade-in-up [animation-delay:360ms]' : 'opacity-0 translate-y-4'}`}>
        <a href="mailto:manjurloriya58@gmail.com" className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded">Email Me</a>
        <a href="https://github.com/ManzoorLoriya" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">GitHub</a>
        <a href="https://linkedin.com/in/manzoor-loriya" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">LinkedIn</a>
      </div>
    </section>
  )
}
