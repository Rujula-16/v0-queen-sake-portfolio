"use client"

import { useState } from "react"

const skills = [
  { name: "Digital Art", icon: "🎨", description: "Creating stunning digital artwork" },
  { name: "Concept Art", icon: "✨", description: "Visualizing ideas into reality" },
  { name: "Illustration", icon: "🖌️", description: "Detailed illustrations and designs" },
  { name: "Commissions", icon: "👑", description: "Custom bespoke artworks" },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full"></div>
            <p className="text-accent text-xs tracking-widest uppercase font-semibold">Core Expertise</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Specialized capabilities across multiple artistic disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative p-8 bg-card rounded-2xl border-2 border-accent/20 hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 space-y-4">
                <div
                  className={`text-5xl transition-transform duration-300 ${
                    hoveredSkill === idx ? "scale-125 rotate-12" : ""
                  }`}
                >
                  {skill.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>

              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
