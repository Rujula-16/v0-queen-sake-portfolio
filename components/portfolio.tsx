"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Gabbie Fake Commission",
    category: "Commission",
    image: "/character-digital-art-commission.jpg",
    description: "A personalized digital artwork created for a client",
  },
  {
    id: 2,
    title: "Fantasy Landscape",
    category: "Concept Art",
    image: "/fantasy-landscape-concept-art.jpg",
    description: "Epic fantasy world environment design",
  },
  {
    id: 3,
    title: "Character Design Study",
    category: "Illustration",
    image: "/character-design-digital-illustration.jpg",
    description: "Character development and design exploration",
  },
  {
    id: 4,
    title: "Royal Portrait",
    category: "Portrait",
    image: "/royal-portrait-digital-art.jpg",
    description: "High-detail portrait study in digital medium",
  },
  {
    id: 5,
    title: "Conceptual Creature",
    category: "Concept Art",
    image: "/creature-design-concept-art.jpg",
    description: "Original creature design and visualization",
  },
  {
    id: 6,
    title: "Ethereal Fantasy",
    category: "Illustration",
    image: "/ethereal-fantasy-art.png",
    description: "Magical atmospheric digital illustration",
  },
]

const categories = ["All", "Commission", "Concept Art", "Illustration", "Portrait"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-blue-950"></div>
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full"></div>
            <p className="text-accent text-xs tracking-widest uppercase font-semibold">Creative Showcase</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance">Featured Works</h2>
          <p className="text-muted-foreground text-lg mt-4">
            A curated selection of recent projects and commissioned pieces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/40 scale-105"
                  : "bg-card border border-accent/20 text-muted-foreground hover:border-accent/50 hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-card rounded-2xl border-2 border-accent/20 overflow-hidden hover:border-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-card to-card/50">
                <img
                  src={project.image || "/placeholder.svg?height=320&width=400&query=digital art"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                {/* View Project Link */}
                <div
                  className={`pt-2 flex items-center gap-2 text-accent font-medium text-sm transition-all duration-300 ${
                    hoveredId === project.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Interested in seeing more work?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent/10 border border-accent/30 text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Get Custom Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
