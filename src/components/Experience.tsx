import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Experience() {
  const experience = [
    {
      role: "Junior Front end Developer",
      company: "Upstaff Virtual Pro",
      period: "Mar 2024 — July 2024",
      location: "Onsite",
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
        `Diagnosed and resolved 10+ hardware and software issues for staff workstations, restoring systems
to full working order with minimal downtime.`,
      stack: ["Linux", "Windows"],
    },
  ]

  return (
    <section id="experience" className="relative isolate overflow-hidden bg-ink px-6 py-16 text-ink-deep md:px-10 lg:px-16">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-105 w-105 -translate-x-1/2 translate-y-1/3 rounded-full bg-accent-blue/6 blur-3xl" />

      {/* Section divider */}
      <div className="mx-auto flex w-full max-w-4xl items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-deep/40 sm:text-xs">
        <span className="flex shrink-0 items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          Experience
        </span>

        <div className="h-px flex-1 bg-ink-deep/10" />

        <span className="hidden sm:block">
          Career
        </span>
      </div>

      {/* Intro */}
      <div className="mx-auto mt-8 w-full max-w-4xl">
        <h2 className="max-w-xl text-1xl font-extrabold tracking-tight sm:text-3xl">
          Where I've worked
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-ink-deep/50 sm:text-base">A timeline of my professional journey and the skills I've developed along the way.</p>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-10 w-full max-w-4xl">
        {experience.map((job, i) => (
          <div key={job.role + job.period} className="relative flex gap-5 sm:gap-6">

            {/* Timeline rail */}
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink-deep/15 bg-ink-deep/3 text-ink-deep/50">
                <FaBriefcase className="h-4 w-4" />
              </div>

              {i !== experience.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-ink-deep/10" />
              )}
            </div>

            {/* Card */}
            <div className="mb-8 flex-1 border-b border-ink-deep/10 pb-8">

              {/* Header */}
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold sm:text-lg">
                      {job.role}
                    </h3>

                    {job.present && (
                      <span className="rounded-full border border-accent-blue/30 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-accent-blue">
                        Present
                      </span>
                    )}
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-deep/50">
                    <FaBuilding className="h-3 w-3" />
                    {job.company}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-1 font-mono text-sm text-ink-deep/40 sm:items-end">
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
              <p className="mt-3 text-sm leading-6 text-ink-deep/60">
                {job.description}
              </p>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-ink-deep/6 px-2 py-1 text-[10px] font-bold uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Experience