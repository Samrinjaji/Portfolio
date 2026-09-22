import { useEffect, useRef, useState } from "react"
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const experience = [
    {
      role: "Junior Front end Developer",
      company: "Upstaff Virtual Pro",
      period: "Mar 2024 — July 2024",
      location: "Philippines",
      present: true,
      description:
        "Designing and building full stack applications end to end — from role-based access systems to client-facing tools — with a growing focus on writing code that holds up under security review.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      role: "IT Support / Helpdesk",
      company: "On-the-Job Training Program",
      period: "Jul 2024 — Sep 2024",
      location: "Philippines",
      present: false,
      description:
        "Diagnosed and resolved 10+ hardware and software issues for staff workstations, restoring systems to full working order with minimal downtime.",
      stack: ["Linux", "Windows"],
    },
  ]

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 py-16 text-ink md:px-10 lg:px-16"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-105 w-105 -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/6 blur-3xl" />

      {/* Section divider */}
      <div
        className={`mx-auto flex w-full max-w-5xl items-center gap-4 font-mono text-base font-bold uppercase tracking-wider text-ink/40 transition-all duration-700 sm:text-xs ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <span className="flex shrink-0 items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Experience
        </span>

        <div className="h-1 flex-1 bg-accent/10" />

        <span className="hidden sm:block">
          Career
        </span>
      </div>

      {/* Intro */}
      <div
        className={`mx-auto mt-8 w-full max-w-5xl transition-all delay-100 duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="max-w-xl text-base font-extrabold tracking-tight sm:text-2xl">
          Where I've worked
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-ink/50 sm:text-base">
          A timeline of my professional journey and the skills I've developed
          along the way.
        </p>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-10 w-full max-w-4xl">
        {experience.map((job, i) => (
          <div
            key={job.role + job.period}
            className={`relative flex gap-5 transition-all duration-700 sm:gap-6 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: `${250 + i * 180}ms`,
            }}
          >
            {/* Timeline rail */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink/15 bg-ink/3 text-ink/50 transition-all duration-700 ${
                  isVisible
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                }`}
                style={{
                  transitionDelay: `${350 + i * 180}ms`,
                }}
              >
                <FaBriefcase className="h-4 w-4" />
              </div>

              {i !== experience.length - 1 && (
                <div
                  className={`mt-1 w-px flex-1 origin-top bg-ink/10 transition-transform duration-1000 ${
                    isVisible ? "scale-y-100" : "scale-y-0"
                  }`}
                  style={{
                    transitionDelay: `${450 + i * 180}ms`,
                  }}
                />
              )}
            </div>

            {/* Card */}
            <div className="mb-8 flex-1 border-b border-ink/10 pb-8">
              {/* Header */}
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold sm:text-lg">
                      {job.role}
                    </h3>

                    {job.present && (
                      <span className="rounded-full border border-accent/30 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                        Present
                      </span>
                    )}
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/50">
                    <FaBuilding className="h-3 w-3" />
                    {job.company}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-1 font-mono text-sm text-ink/40 sm:items-end">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="h-3 w-3" />
                    {job.period}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="h-3 w-3" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-ink/60">
                {job.description}
              </p>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-ink/6 px-2 py-1 text-[10px] font-bold uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience