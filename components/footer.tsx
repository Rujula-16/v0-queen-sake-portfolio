"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-accent/20 bg-gradient-to-b from-card/50 to-background py-16 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-accent/20">
          <div>
            <a
              href="#"
              className="text-2xl font-serif font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent hover:from-accent hover:to-accent/70 transition-all duration-300"
            >
              Queen Sake
            </a>
            <p className="text-sm text-muted-foreground mt-3">Digital Artist & Concept Illustrator</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Queen Sake. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">
              Crafted with artistic precision and digital excellence.
            </p>
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          <p>Designed & Developed with passion | Built with Next.js, React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
