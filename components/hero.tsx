"use client"

import { useState } from "react"

export default function Hero() {
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center md:order-2">
          <div
            className="relative w-80 h-96 cursor-pointer group"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-accent via-accent/30 to-transparent rounded-2xl blur-2xl transition-all duration-500 ${
                isImageHovered ? "opacity-60 blur-3xl" : "opacity-30"
              }`}
            ></div>

            <div className="relative w-full h-full bg-gradient-to-br from-card to-card/50 rounded-2xl border-2 border-accent/40 overflow-hidden flex items-center justify-center shadow-2xl shadow-accent/20 transition-all duration-500 group-hover:border-accent/70">
              <img
                src="/digital-artist-portrait-professional-headshot.jpg"
                alt="Queen Sake - Digital Artist"
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isImageHovered ? "scale-105" : "scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
            </div>

            <div className="absolute -inset-4 border border-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Content */}
        <div className="md:order-1 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full"></div>
              <p className="text-accent text-xs tracking-widest uppercase font-semibold">Welcome to my portfolio</p>
            </div>

            <div>
              <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight text-balance mb-2">Queen Sake</h1>
              <p className="text-2xl text-accent font-light tracking-wide">Digital Artist & Concept Illustrator</p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              A passionate creator blending technical precision with artistic flair. Specializing in concept art,
              digital illustrations, and commissioned works that transform imagination into stunning visual reality.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap pt-2">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 group"
            >
              <span className="flex items-center gap-2">
                View Portfolio
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-accent/40 text-foreground rounded-lg font-medium hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-12 pt-8 border-t border-accent/20">
            <div className="group">
              <div className="text-3xl font-bold text-accent mb-1">200+</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                Happy Clients
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-xs text-muted-foreground uppercase tracking-widest">Scroll down</div>
        <svg className="w-5 h-5 mx-auto mt-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
