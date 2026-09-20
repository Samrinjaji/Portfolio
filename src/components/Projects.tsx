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
      stack: ["Arduino","C++"],
      image: gasSmokeImage,
      href: "https://example.com/",
      github: "https://github.com/Samrinjaji/arduino-gas-and-smoke-detection-with-gprs",
    },
  ]

  return (
    <div
      className="bg-ink px-6 py-16 text-ink-deep md:px-10 lg:px-16"
    >
      {/* Section divider */}
      <div
        className={`mx-auto flex w-full max-w-4xl items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-deep/40 sm:text-xs ${
          isVisible
            ? "animate-[heroFadeDown_0.7s_ease-out_both]"
            : "opacity-0"
        }`}
      >
        <span className="flex shrink-0 items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          Projects
        </span>

        <div className="h-px flex-1 bg-ink-deep/10" />

        <span className="hidden sm:block">
          Selected Work
        </span>
      </div>

      {/* Intro */}
      <div
        className={`mx-auto mt-8 w-full max-w-4xl ${
          isVisible
            ? "animate-[heroFadeUp_0.7s_ease-out_0.15s_both]"
            : "opacity-0"
        }`}
      >
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue">
          What I've built
        </p>

        <h2 className="mt-2 max-w-xl text-2xl font-extrabold tracking-tight sm:text-3xl">
          Turning ideas into
          <br />
          working software.
        </h2>
      </div>

      {/* Index list */}
      <div
        className={`mx-auto mt-8 w-full max-w-4xl divide-y divide-ink-deep/10 border-y border-ink-deep/10 ${
          isVisible
            ? "animate-[heroFadeUp_0.7s_ease-out_0.35s_both]"
            : "opacity-0"
        }`}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group relative isolate flex flex-col gap-3 py-6 sm:py-7"
          >

            {/* Decorative background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-accent-blue/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Project content */}
            <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 pl-9">
              
              {/* Main content */}
              <div className="min-w-0">

                {/* Title row */}
                <div className="flex items-baseline gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-accent-blue sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-deep/40">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 max-w-xl text-xs leading-5 text-ink-deep/50 sm:text-sm">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-ink-deep/6 px-2 py-1 text-[10px] font-bold uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Background */}
                <p className="mt-3 max-w-xl border-l-2 border-accent-blue/30 pl-3 text-xs italic leading-5 text-ink-deep/40 sm:text-sm">
                  {project.background}
                </p>

              </div>

              {/* Actions — right side */}
              <div className="flex items-end gap-2 pb-0">

                {/* GitHub */}
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
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-deep/10 text-ink-deep/40 transition-all duration-300 hover:border-accent-blue hover:bg-accent-blue hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                </span>

                {/* Visit project */}
                <span
                  aria-label={`Visit ${project.title}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-deep/10 text-sm text-ink-deep/40 transition-all duration-300 hover:border-accent-blue hover:bg-accent-blue hover:text-white"
                >
                  ↗
                </span>

              </div>

            </div>

            {/* Hover-reveal image preview, desktop only */}
            <div className="pointer-events-none absolute right-4 top-6 z-10 hidden w-48 translate-x-4 rotate-2 overflow-visible rounded-lg border border-ink-deep/10 opacity-0 shadow-xl shadow-black/20 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">

              <img
                src={project.image}
                alt=""
                className="h-32 w-full rounded-lg object-cover"
              />

              <span className="absolute -left-4 -top-4 origin-bottom-right scale-50 rotate-[-8deg] rounded-full bg-accent-blue px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide text-white opacity-0 shadow-lg shadow-black/20 transition-all delay-150 duration-300 group-hover:scale-100 group-hover:opacity-100">
                Check this out!
              </span>

            </div>

          </a>
        ))}
      </div>

      {/* Bottom marker */}
      <div
        className={`mx-auto mt-3 flex w-full max-w-4xl items-center justify-between rounded-xl border border-ink-deep/10 bg-ink-deep/4 px-5 py-4 ${
          isVisible
            ? "animate-[heroFadeUp_0.7s_ease-out_0.65s_both]"
            : "opacity-0"
        }`}
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink-deep/30">
          More projects in progress
        </span>

        <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent-blue">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-blue" />
          Building
        </span>
      </div>
    </div>
  )
}

export default Projects