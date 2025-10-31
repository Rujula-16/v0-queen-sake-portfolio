"use client"

import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("overview")

  const skills = [
    "Digital Illustration",
    "Concept Art",
    "Character Design",
    "Environment Design",
    "Visual Storytelling",
    "Adobe Creative Suite",
    "Procreate",
    "3D Rendering",
  ]

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"></div>
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-30"></div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full"></div>
            <p className="text-accent text-xs tracking-widest uppercase font-semibold">Get to know me</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-balance">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-card rounded-2xl border-2 border-accent/30 overflow-hidden h-full flex items-center justify-center shadow-xl shadow-accent/10 group-hover:border-accent/50 transition-all duration-500">
              <img
                src="/artist-workspace-digital-art-setup.jpg"
                alt="Queen Sake workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex gap-2 border-b border-accent/20">
              {[
                { id: "overview", label: "Overview" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Queen Sake is a digital artist with a passion for concept art and creative visual storytelling. A
                    graduate of VIT Chennai with an M.Tech Integrated in Data Science, Queen blends technical precision
                    with artistic flair to create visually stunning works.
                  </p>
                  <p>
                    With expertise in digital art, concept design, and illustration, I craft bespoke visual experiences
                    for clients across various industries. Each project is approached with meticulous attention to
                    detail and a commitment to exceeding expectations.
                  </p>
                </div>

                {/* Skills */}
                <div className="pt-4">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">Key Skills</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-card border border-accent/20 rounded-lg text-sm text-muted-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-serif text-lg font-bold text-foreground">
                        M.Tech Integrated in Data Science
                      </div>
                      <div className="text-sm text-accent mt-1">VIT Chennai</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    Comprehensive education combining data science fundamentals with technical expertise, providing a
                    unique perspective on data-driven creative solutions and analytical problem-solving in design.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-serif text-lg font-bold text-foreground">Discord Admin</div>
                      <div className="text-sm text-accent mt-1">2021 – 2022</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    Community management and creative collaboration, fostering engagement and building a thriving
                    creative community. Led initiatives for collaborative projects and maintained active member
                    engagement.
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 border-t border-accent/20">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
              >
                Let's work together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
