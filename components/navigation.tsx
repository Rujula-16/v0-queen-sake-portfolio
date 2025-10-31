"use client"

import { useState, useEffect } from "react"

export default function Navigation({ scrollY }: { scrollY: number }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-accent/20 shadow-lg shadow-accent/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={() => setActiveSection("hero")}
          className="text-2xl font-serif font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent hover:from-accent hover:to-accent/70 transition-all duration-300"
        >
          QS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveSection(item.href.substring(1))}
              className="relative text-sm text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-accent hover:text-accent/80 transition-colors"
        >
          <span
            className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`}></span>
          <span
            className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-accent/20">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.substring(1))
                  setIsMobileOpen(false)
                }}
                className="block px-4 py-2 text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
