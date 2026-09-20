import { useState, useEffect } from "react"
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaShieldAlt,
  FaCode,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

import officeImage from "../assets/office.jpg"
import catImage from "../assets/cat.jpg"
import samrinImage from "../assets/samrinjaji.jpeg"
import samrinDark from "../assets/samrin-dark.png"

function About() {
  const galleryImages = [
  { src: officeImage, alt: "Coding setup" },
  { src: catImage, alt: "Development project" },
  { src: samrinImage, alt: "Workspace" },
]

  const [activeSlide, setActiveSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Auto-advance every 3.5s, cleans up on unmount
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [galleryImages.length])

  // Trigger About animations when the section enters the viewport
  useEffect(() => {
    const section = document.getElementById("about")

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

  const goPrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    )
  }

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % galleryImages.length)
  }

  return (
    <div className="px-6 py-16 text-ink md:px-10 lg:px-16">

      {/* Section divider */}
      <div
          className={`mx-auto flex w-full max-w-4xl items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/40 sm:text-xs ${
            isVisible
              ? "animate-[heroFadeDown_0.7s_ease-out_both]"
              : "opacity-0"
          }`}
        >
        <span className="flex shrink-0 items-center gap-2 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          About
        </span>

        <div className="h-1 flex-1 bg-accent/10" />

        <span className="hidden sm:block">
          Profile
        </span>
      </div>

      {/* Main About */}
      <div className="mx-auto mt-8 w-full max-w-4xl">

        {/* Intro */}
        <div
            className={`rounded-xl border border-ink/10 bg-ink/4 p-5 sm:p-7 ${
              isVisible
                ? "animate-[heroFadeUp_0.7s_ease-out_0.15s_both]"
                : "opacity-0"
            }`}
          >

          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">

            {/* Main statement */}
            <div>
              <div className="mb-5 flex items-start justify-between gap-6">

                {/* Content */}
                <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Beyond the code
                    </p>

                    <h2 className="mt-2 font-extrabold text-ink/90 sm:text-3xl">
                    Transforming Ideas Into
                    <br />
                    Digital Excellence
                    </h2>
                </div>

                <div className="relative shrink-0">
                    <img
                      src={samrinDark}
                      alt="Samrin Jaji"
                      className="h-14 w-14 rounded-full border-2 border-ink object-cover"
                    />

                    <div className="pointer-events-none absolute right-0 top-full z-10 mt-2 whitespace-nowrap rounded-md border border-ink/10 bg-doom px-3 py-1.5 text-xs font-medium text-ink shadow-sm animate-profile-greeting">
                        Hey there! 👋
                    </div>
                </div>
            </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-ink/60 sm:text-base">
                    I'm interested in understanding how applications work as a
                    whole — from the interface people interact with to the logic,
                    data, and systems behind it. Most of my learning happens by
                    building, experimenting, and turning ideas into working
                    software.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-ink/50 sm:text-base">
                    My focus is growing toward full stack development while
                    exploring cybersecurity alongside it. That combination has
                    made me more interested in creating applications that are
                    structured, maintainable, and built with security in mind.
                </p>
                
            </div>

            {/* Profile */}
            <div className="border-t border-accent/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">

              <div className="mt-5 space-y-5">

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 h-5 w-5 shrink-0 " />

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
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
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
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
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">
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
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

          {/* Development */}
          <div
              className={`group relative isolate overflow-hidden rounded-xl border border-ink/10 bg-ink/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30 ${
                isVisible
                  ? "animate-[heroFadeUp_0.7s_ease-out_0.35s_both]"
                  : "opacity-0"
              }`}
            >

            {/* Decorative background*/}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-accent/8 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-36 w-36 rounded-full bg-accent/20 blur-xl transition-opacity duration-300 group-hover:opacity-90" />

            <div className="flex items-center justify-between">
              <FaCode className="h-5 w-5" />
            </div>

            <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30">
              Development
            </p>

            <h3 className="mt-2 text-base font-bold">
              Build useful things
            </h3>

            <p className="mt-2 text-xs md:text-sm leading-5 text-ink/50">
              I learn best by turning ideas into applications that solve
              practical problems.
            </p>

          </div>

          {/* Gallery */}
          <div
            className={`group relative isolate overflow-hidden rounded-xl border border-ink/10 bg-ink/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30 ${
              isVisible
                ? "animate-[heroFadeUp_0.7s_ease-out_0.5s_both]"
                : "opacity-0"
            }`}
          >

            {/* Decorative background: gradient wash + blurred circle */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-bl from-accent/8 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-32 w-32 rounded-full bg-accent/20 blur-xl transition-opacity duration-300 group-hover:opacity-90" />

            <div className="flex items-center justify-between">
                <FaImages className="h-5 w-5 " />
            </div>

            <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/30">
                Gallery
            </p>

            <h3 className="mt-2 text-base font-bold">
                A glimpse behind the screen
            </h3>

            {/* Carousel */}
            <div className="group/carousel relative mt-4 h-40 overflow-hidden rounded-lg border border-ink/10 bg-ink">

              {galleryImages.map((image, i) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Prev / next arrows — visible on hover only */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-ink-deep/50 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/carousel:opacity-100"
              >
                <FaChevronLeft className="h-3 w-3" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-ink-deep/50 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/carousel:opacity-100"
              >
                <FaChevronRight className="h-3 w-3" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {galleryImages.map((image, i) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeSlide ? "w-4 bg-ink" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>

            </div>
            </div>

            </div>

          {/* Bottom metadata */}
          <div
            className={`mt-3 flex flex-col gap-3 rounded-xl border border-ink/10 bg-ink/4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
              isVisible
                ? "animate-[heroFadeUp_0.7s_ease-out_0.65s_both]"
                : "opacity-0"
            }`}
          >

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink/30">
              Always learning / always building
            </span>

            <span className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Open to opportunities
            </span>

          </div>

        </div>

    </div>
  )
}

export default About