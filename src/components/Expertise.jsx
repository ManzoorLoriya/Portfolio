import React from "react"
import { useInView } from "./useInView"

const skills = [
  { title: "NGS Data Processing", desc: "From raw FASTQ to variant calling pipelines." },
  { title: "Genomic Data Analysis", desc: "Clustering, phylogenetics, and annotations." },
  { title: "Computational Biology", desc: "Drug repurposing, docking, and simulations." },
]

export default function Expertise() {
  const { ref, isInView } = useInView()
  return (
    <section id="expertise" ref={ref} className="py-20 bg-transparent text-white">
      <h2 className="text-3xl text-center font-bold mb-10">Areas of Expertise</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((s, idx) => (
          <div key={idx} className={`bg-black/60 border border-gray-800 p-6 rounded-lg shadow-lg transition ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: `${idx * 120}ms` }}>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
