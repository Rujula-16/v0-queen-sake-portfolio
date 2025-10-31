"use client"

import { useState } from "react"

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: "Commissions",
      description:
        "Personalized digital artworks crafted with precision and artistic excellence for your unique vision.",
      features: ["Custom designs", "Unlimited revisions", "Fast turnaround", "High resolution files"],
      icon: "✨",
    },
    {
      title: "Prints",
      description: "High-quality reproductions of original art pieces available for purchase and home collection.",
      features: ["Premium quality", "Multiple sizes", "Free shipping", "Archival materials"],
      icon: "🖼️",
    },
    {
      title: "Consultation",
      description: "Expert guidance for your creative visual projects and artistic direction from concept to final.",
      features: ["Project planning", "Art direction", "Creative strategy", "Ongoing support"],
      icon: "💡",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-900 to-indigo-950"></div>
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full"></div>
            <p className="text-accent text-xs tracking-widest uppercase font-semibold">What I Offer</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance">Services</h2>
          <p className="text-muted-foreground text-lg mt-4">Tailored creative solutions designed for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative h-full p-8 bg-card rounded-2xl border-2 border-accent/20 hover:border-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 space-y-6 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <div
                    className={`text-3xl transition-transform duration-300 ${
                      hoveredService === idx ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    {service.icon}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 items-start transition-all duration-300 ${
                        hoveredService === idx ? "translate-x-2" : ""
                      }`}
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 w-full py-3 px-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1">
                  Learn More
                </button>
              </div>

              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
