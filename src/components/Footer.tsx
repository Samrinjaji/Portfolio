function Footer() {
  return (
    <footer className="border-t border-ink-deep/10 bg-ink px-5 py-8 text-ink-deep sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">

        {/* Main footer row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight">
                SJ<span className="text-accent-blue">.</span>
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-deep/30">
                Full Stack Developer
              </span>
            </div>

            <p className="mt-2 text-[11px] text-ink-deep/40">
              Building reliable web applications with purpose.
            </p>
          </div>

          {/* Navigation + Back to top */}
          <div className="flex items-center gap-4">

            <nav className="flex flex-wrap items-center gap-4 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-ink-deep/40">
              <a
                href="#home"
                className="transition-colors hover:text-accent-blue"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-accent-blue"
              >
                About
              </a>

              <a
                href="#projects"
                className="transition-colors hover:text-accent-blue"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-accent-blue"
              >
                Contact
              </a>
            </nav>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-blue text-white transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-blue/20"
            >
              ↑
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-7 flex flex-col gap-2 border-t border-ink-deep/10 pt-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink-deep/25">
            © {new Date().getFullYear()} Samrin Jaji
          </p>

          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-ink-deep/25">
            <span className="text-accent-blue/60">//</span> system.online
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer

