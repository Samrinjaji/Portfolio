import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"

import owwaImage from "../assets/owwa.png"
import portfolioImage from "../assets/portfolio.png"
import gasSmokeImage from "../assets/gas-smoke.jpeg"

function Projects() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const section = document.getElementById("projects")

      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        {
          threshold: 0.15,
        }
      )

      observer.observe(section)

      return () => observer.disconnect()
    }, [])

  const projects = [
    {
      index: "01",
      category: "Capstone Project",
      title: "OWWA Scholarship",
      description:
        "A Role Management System that lets administrators create and manage staff accounts with program-specific access controls.",
      background:
        "Built as my capstone. OWWA's internal process for granting staff access was manual and inconsistent, so I designed a role-based system to make access control predictable and auditable.",
      stack: ["HTML", "CSS3", "JavaScript", "PHP"],
      image: owwaImage,
      href: "https://example.com/",
      github: "https://github.com/Samrinjaji/owwa-scholarship-system",
    },
    {
      index: "02",
      category: "Side Project",
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills with a clean, modern design and smooth animations.",
      background:
        "Built it during to test my skills in front end development",
      stack: ["HTML", "CSS", "Javascript"],
      image: portfolioImage,
      href: "https://samrinjaji.github.io/my-portfolio/",
      github: "https://github.com/Samrinjaji/my-portfolio",
    },
    {
      index: "03",
      category: "Academic Project",
      title: "Gas & Smoke Detector",
      description:
        "Arduino gas and smoke detection with GPRS.",
      background:
        "Built it during my academic year project",
      stack: ["Arduino", "C++"],
      image: gasSmokeImage,
      href: "https://example.com/",
      github: "https://github.com/Samrinjaji/arduino-gas-and-smoke-detection-with-gprs",
    },
  ]

  return (
    <div
      className="px-6 py-16 text-ink md:px-10 lg:px-16"
    >
      {/* Section divider */}
      <div
        className={`mx-auto flex w-full max-w-5xl items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/40 sm:text-xs ${
          isVisible
            ? "animate-[heroFadeDown_0.7s_ease-out_both]"
            : "opacity-0"
        }`}
      >
        <span className="flex shrink-0 items-center gap-2 tetx-base">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Projects
        </span>

        <div className="h-1 flex-1 bg-accent/10" />

        <span className="hidden sm:block">
          Selected Work
        </span>
      </div>

      {/* Intro */}
      <div
        className={`mx-auto mt-8 w-full max-w-5xl ${
          isVisible
            ? "animate-[heroFadeUp_0.7s_ease-out_0.15s_both]"
            : "opacity-0"
        }`}
      >
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
          What I've built
        </p>

        <h2 className="mt-2 max-w-xl text-2xl font-extrabold tracking-tight sm:text-3xl">
          Turning ideas into
          <br />
          working software.
        </h2>
      </div>

      {/* card grid */}
      <div
        className={`mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
          isVisible
            ? "animate-[heroFadeUp_0.7s_ease-out_0.35s_both]"
            : "opacity-0"
        }`}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group relative flex flex-col overflow-hidden rounded-[28px] border-[5px] border-black bg-[#1c1c1c] shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Hover tooltip */}
            <span className="pointer-events-none absolute right-4 top-4 z-10 origin-top-right scale-75 rotate-6 rounded-full bg-accent px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink opacity-0 shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
              Check this out!
            </span>

            {/* Image */}
            <div className="relative h-36 w-full overflow-hidden sm:h-40">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/10" />
            </div>

            {/* Folder-tab title */}
            <div
              className="relative -mt-5 w-[70%] rounded-t-2xl bg-[#1c1c1c] px-5 pb-2 pt-4"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <p className="font-mono text-[9px] font-bold uppercase leading-tight tracking-wide text-accent">
                {project.category}
              </p>
              <h3 className="mt-0.5 truncate text-base font-extrabold uppercase tracking-tight text-white">
                {project.title}
              </h3>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between gap-4 bg-[#1c1c1c] px-5 pb-5 pt-1">
              <p className="text-xs leading-5 text-white/50">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/8 px-2 py-1 text-[9px] font-bold uppercase text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom actions row */}
              <div className="mt-1 flex items-center justify-end gap-2 border-t border-white/10 pt-3">
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()

                    window.open(
                      project.github,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }}
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                </span>

                <span
                  aria-label={`Visit ${project.title}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm text-white/50 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink"
                >
                  ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom marker */}
      <div
        className={`mx-auto mt-6 flex w-full max-w-5xl items-center justify-between rounded-xl border border-ink/10 bg-ink/4 px-5 py-4 ${
          isVisible
            ? "animate-[heroFadeUp_0.7s_ease-out_0.65s_both]"
            : "opacity-0"
        }`}
      >
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink/30">
          More projects in progress
        </span>

        <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Building
        </span>
      </div>
    </div>
  )
}

export default Projects