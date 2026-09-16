import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaShieldAlt,
  FaCode,
  FaImages,
  FaBasketballBall,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-ink px-6 py-16 text-ink-deep md:px-10 lg:px-16">

      {/* Section divider */}
      <div className="mx-auto flex w-full max-w-4xl items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-deep/40 sm:text-xs">
        <span className="flex shrink-0 items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          About
        </span>

        <div className="h-px flex-1 bg-ink-deep/10" />

        <span className="hidden sm:block">
          Profile
        </span>
      </div>

      {/* Main About */}
      <div className="mx-auto mt-8 w-full max-w-4xl">

        {/* Intro */}
        <div className="rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-5 sm:p-7">

          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">

            {/* Main statement */}
            <div>
              <div className="mb-5 flex items-start justify-between gap-6">

                {/* Content */}
                <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Beyond the code
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold text-ink-deep sm:text-3xl">
                    Building with curiosity.
                    <br />
                    Learning with purpose.
                    </h2>
                </div>

                <div className="relative shrink-0">
                    <img
                        src="/src/assets/samrin-dark.png"
                        alt="Samrin Jaji"
                        className="h-14 w-14 rounded-full border-2 border-accent-blue object-cover"
                    />

                    <div className="pointer-events-none absolute right-0 top-full z-10 mt-2 whitespace-nowrap rounded-md border border-ink-deep/10 bg-ink-deep px-3 py-1.5 text-xs font-medium text-ink shadow-sm animate-profile-greeting">
                        Hey there! 👋
                    </div>
                </div>
            </div>

                <p className="mt-5 max-w-xl text-sm leading-6 text-ink-deep/60 sm:text-base">
                    I'm interested in understanding how applications work as a
                    whole — from the interface people interact with to the logic,
                    data, and systems behind it. Most of my learning happens by
                    building, experimenting, and turning ideas into working
                    software.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-ink-deep/50 sm:text-base">
                    My focus is growing toward full stack development while
                    exploring cybersecurity alongside it. That combination has
                    made me more interested in creating applications that are
                    structured, maintainable, and built with security in mind.
                </p>
                
            </div>

            {/* Profile */}
            <div className="border-t border-ink-deep/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">

              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-deep/30">
                Profile
              </span>

              <div className="mt-5 space-y-5">

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 h-5 w-5 shrink-0 " />

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink-deep/30">
                      Based in
                    </span>

                    <p className="mt-1 text-xs font-semibold sm:text-sm">
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaGraduationCap className="mt-0.5 h-5 w-5 shrink-0 " />

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink-deep/30">
                      Education
                    </span>

                    <p className="mt-1 text-xs font-semibold sm:text-sm">
                      BS in Information Technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaShieldAlt className="mt-0.5 shrink-0 h-5 w-5" />

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink-deep/30">
                      Exploring
                    </span>

                    <p className="mt-1 text-xs font-semibold sm:text-sm">
                      Cybersecurity
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Interests / Approach */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">

          {/* Development */}
          <div className="rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30">

            <div className="flex items-center justify-between">
              <FaCode className="h-5 w-5" />

              <span className="font-mono text-[9px] text-ink-deep/25">
                01
              </span>
            </div>

            <p className="mt-6 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink-deep/30">
              Development
            </p>

            <h3 className="mt-2 text-base font-bold">
              Build useful things
            </h3>

            <p className="mt-2 text-xs leading-5 text-ink-deep/50">
              I learn best by turning ideas into applications that solve
              practical problems.
            </p>

          </div>

          {/* Gallery */}
            <div className="relative overflow-hidden rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30">
            <div className="flex items-center justify-between">
                <FaImages className="h-5 w-5 " />

                <span className="font-mono text-[9px] text-ink-deep/25">
                02
                </span>
            </div>

            <p className="mt-6 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink-deep/30">
                Gallery
            </p>

            <h3 className="mt-2 text-base font-bold">
                A glimpse behind the screen
            </h3>

            {/* Photo stack */}
            <div className="relative mt-4 h-10 overflow-visible">
                {/* Photo 1 */}
                <div className="absolute left-0 top-0 z-10 w-[45%] -rotate-6 overflow-hidden rounded-lg border border-ink-deep/10 bg-ink shadow-md transition-all duration-300 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-105 hover:shadow-xl">
                <img
                    src="/src/assets/office.jpg"
                    alt="Coding setup"
                    className="h-40 w-full object-cover"
                />
                </div>

                {/* Photo 2 */}
                <div className="absolute left-1/2 top-0 z-20 w-[45%] -translate-x-1/2 rotate-2 overflow-hidden rounded-lg border border-ink-deep/10 bg-ink shadow-md transition-all duration-300 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-105 hover:shadow-xl">
                <img
                    src="/src/assets/cat.jpg"
                    alt="Development project"
                    className="h-40 w-full object-cover"
                />
                </div>

                {/* Photo 3 */}
                <div className="absolute right-0 top-0 z-10 w-[45%] rotate-6 overflow-hidden rounded-lg border border-ink-deep/10 bg-ink shadow-md transition-all duration-300 hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-105 hover:shadow-xl">
                <img
                    src="/src/assets/samrinjaji.jpeg"
                    alt="Workspace"
                    className="h-40 w-full object-cover"
                />
                </div>
            </div>
            </div>

            {/* Outside */}
            <div className="rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30">

                <div className="flex items-center justify-between">
                <FaBasketballBall className="h-5 w-5" />

                <span className="font-mono text-[9px] text-ink-deep/25">
                    03
                </span>
                </div>

                <p className="mt-6 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink-deep/30">
                Outside Code
                </p>

                <h3 className="mt-2 text-base font-bold">
                Stay active
                </h3>

                <p className="mt-2 text-xs leading-5 text-ink-deep/50">
                Running and Chess give me a reason to step away from the
                screen and reset.
                </p>

            </div>

            </div>

        {/* Bottom metadata */}
        <div className="mt-3 flex flex-col gap-3 rounded-xl border border-ink-deep/10 bg-ink-deep/4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink-deep/30">
            Always learning / always building
          </span>

          <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent-blue">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-blue" />
            Open to opportunities
          </span>

        </div>

      </div>

    </section>
  )
}

export default About