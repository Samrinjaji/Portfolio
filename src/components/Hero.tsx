import { useState } from "react"

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiPhp,
  SiGithub,
} from "react-icons/si";

import { GitHubContributionGraph } from "github-contrib-graph/react"
import "github-contrib-graph/styles.css"

function Hero() {

  {/*const [darkMode, setDarkMode] = useState(false)*/}
  
  const [githubMonths, setGithubMonths] = useState <
    { name: string; totalWeeks: number }[]
  >([])

  {/*
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }*/}
  
  return (
    
    <section id="home" className="relative min-h-screen bg-ink text-ink-deep px-6 py-6  md:px-10 lg:px-16">

      {/* Theme Toggle 
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="cursor-pointer absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-ink-deep/10 bg-ink-deep/5 text-sm transition-all hover:bg-accent-blue/60 hover:text-white md:right-10 lg:right-16"
      >
        {darkMode ? "☀" : "☾"}
      </button>
      */}

      {/* Terminal */}
      <div className="mx-auto mb-8 hidden w-full animate-[heroFadeDown_0.7s_ease-out_both] md:block md:max-w-5xl">
        <div className="flex w-full items-stretch overflow-hidden font-mono text-xs font-bold sm:text-sm">

          <span className="flex shrink-0 items-center bg-ink-deep py-3 pl-5 pr-8 text-ink" style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%)", }} > 0 </span>

          <span className="-ml-3.5 flex shrink-0 items-center bg-accent-blue py-3 pl-9 pr-8 text-white" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > whoami ~ </span>

          <span className="-ml-3.5 flex shrink-0 items-center bg-accent-blue/90 py-3 pl-9 pr-8 text-white" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > Samrin ~ </span>

          <span className="-ml-3.5 flex min-w-0 flex-1 items-center bg-ink-deep/6 py-3 pl-9 pr-8 text-ink-deep/70" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > Full Stack Developer ~ </span>

          <span className="ml-3 w-0.75 shrink-0 animate-pulse bg-accent-blue" />

        </div> 
      </div>

      {/* Hero */}
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center  md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
 
        {/* Profile */}
        <div className="flex animate-[heroScale_0.7s_ease-out_0.15s_both] flex-col items-center gap-3 md:items-start">
          <div className="relative aspect-square w-30 overflow-hidden rounded-xl border-2 border-accent-blue lg:w-38">
            <img src="/src/assets/samrin-dark.png" alt="Samrin Jaji" className="h-full w-full object-cover" />
          </div>
 
          <a
            href="https://ko-fi.com/samrinjaji"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-30 items-center justify-center gap-2 rounded-lg bg-ink-deep/6 py-2 text-xs font-bold text-ink-deep/70 transition-transform hover:-translate-y-0.5 lg:w-38 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.575-.048 2.596-2.306 2.596-2.306s.043-1.454.049-3.15c1.153.076 2.483-.062 3.15-.62.968-.812 1.612-2.622.512-4.574zm-6.25 4.577c-.043.015-1.283.015-3.183.001-.019-1.453-.023-2.995-.003-4.4h3.2c.005.004.013.024.02.049.116.446.135 1.043.135 1.043s-.001 2.36-.169 3.307z" />
            </svg>
            Buy me a Ko-fi
          </a>
        </div>
 
        {/* Content */}
        <div className="min-w-0 animate-[heroFadeUp_0.7s_ease-out_0.25s_both]">
          <p className="mb-4 mt-4 flex justify-center text-xs font-bold uppercase tracking-[0.2em] text-accent-blue sm:text-sm md:justify-start"> Full Stack Developer
          </p>
 
          <h1
            className="glitch-text relative w-full text-2xl font-extrabold uppercase leading-[0.95] tracking-tighter lg:text-3xl"
            data-text="Developer. Creator. Problem Solver."
          >
            Developer. Creator. Problem Solver.
          </h1>
 
          <p className="mt-5 max-w-xl text-sm leading-6 text-ink-deep/60 sm:text-base"> I build exceptional digital experiences that live at the intersection of design and technology.
          </p>
        </div>

      </div>

      <div className="mx-auto mt-5 flex w-full max-w-4xl items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-deep/40 sm:text-xs">
        <span className="flex shrink-0 items-center gap-2">
          <kbd className="rounded border border-ink-deep/10 bg-ink-deep/4 px-2 py-1"> ↓ </kbd>
          Scroll to explore
        </span>

        <div className="h-px flex-1 bg-ink-deep/10" />
      </div>

      {/* Bento grid */}
      <div className="mx-auto mt-5 grid w-full max-w-4xl grid-cols-1 gap-3 lg:grid-cols-4">

        {/* Featured Project */}
        <div className="animate-[heroFadeUp_0.7s_ease-out_0.55s_both] rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-4 lg:col-span-3">

          {/* Bento heading */}
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-deep/40 md:text-xs">
              Featured Project
            </span>
          </div>

          {/* Project content */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.1fr_0.9fr]">

            {/* Project image */}
            <div className="group relative min-h-40 overflow-hidden rounded-lg border border-ink-deep/20 cursor-pointer">

              <img
                src="/src/assets/owwa.png"
                alt="OWWA project preview"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Project information */}
            <div className="flex flex-col justify-between py-0">

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent-blue">
                  Capstone Project
                </p>

                <h2 className="mt-1.5 text-xl font-extrabold uppercase leading-none tracking-tight">
                  OWWA Scholarship
                </h2>

                <p className="mt-2 text-xs leading-4.5 text-ink-deep/50 sm:text-sm">
                  The OWWA Scholarship System includes a comprehensive Role
                  Management System that allows administrators to create and
                  manage staff accounts with program-specific access controls.
                </p>
              </div>

              {/* Project stack */}
              <div className="mt-4">

                <p className="mb-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-deep/40">
                  Stack
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-ink-deep/6 px-2 py-1 text-[10px] font-bold uppercase">
                    HTML
                  </span>

                  <span className="rounded-md bg-ink-deep/6 px-2 py-1 text-[10px] font-bold uppercase">
                    CSS3
                  </span>

                  <span className="rounded-md bg-ink-deep/6 px-2 py-1 text-[10px] font-bold uppercase">
                    JavaScript
                  </span>

                  <span className="rounded-md bg-ink-deep/6 px-2 py-1 text-[10px] font-bold uppercase">
                    PHP
                  </span>
                </div>

              </div>

              {/* Project links */}
              <div className="mt-3 flex items-center justify-between">

                {/* View project */}
                <a href="https://example.com/" className="flex items-center gap-2 text-xs font-bold uppercase text-accent-blue transition-transform hover:translate-x-1" >View project 
                  <span>↗</span>
                </a> 

                {/* GitHub */}
                <a href="https://github.com/Samrinjaji/owwa-scholarship-system" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub" className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-deep/10 text-ink-deep/50 transition-all hover:border-accent-blue hover:bg-accent-blue hover:text-white" >
                <SiGithub className="h-4 w-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Projects */}
        <a
          href="#projects"
          className="group flex min-h-64 animate-[heroFadeUp_0.7s_ease-out_0.7s_both] flex-col justify-between rounded-xl bg-accent-blue p-5 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-1"
        >
          <div className="flex items-center justify-between"> 
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60"> Projects </span> 
          </div> 

          <div> 
            <span className="text-5xl font-extrabold leading-none"> 10+ </span> 
            <p className="mt-2 text-xs font-bold uppercase text-white/60"> Projects built </p> 
          </div> 

          <div className="flex items-end justify-between"> 
            <p className="max-w-40 text-sm leading-5 text-white/50"> Websites, applications, experiments, and personal projects. </p> <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"> ↗ </span>
          </div>
        </a>

        {/* Stack */}
      <div className="animate-[heroFadeUp_0.7s_ease-out_0.85s_both] rounded-xl border border-ink-deep/10 bg-ink-deep/6 p-2 lg:col-span-1">

        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink-deep/40">
            Stack
          </span>
        </div>

        {/* Tech Stack */}
        <div className="relative mt-4 flex min-h-[190px] items-center justify-center">

          {/* React */}
          <div className="absolute left-2 top-3 z-10 w-[82px] rotate-[-6deg] rounded-lg border border-ink-deep/10 bg-ink p-2.5 shadow-sm transition-transform duration-300 hover:z-30 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <SiReact className="h-5 w-5 shrink-0 text-blue-500" />
              <span className="font-mono text-[8px] font-bold uppercase text-ink-deep/60">
                React
              </span>
            </div>
          </div>

          {/* TypeScript */}
          <div className="absolute right-2 top-1 z-20 w-[90px] rotate-[5deg] rounded-lg border border-ink-deep/10 bg-ink p-2.5 shadow-sm transition-transform duration-300 hover:z-30 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <SiTypescript className="h-5 w-5 shrink-0 text-[#3178C6]" />
              <span className="font-mono text-[8px] font-bold uppercase text-ink-deep/60">
                TypeScript
              </span>
            </div>
          </div>

          {/* Tailwind */}
          <div className="absolute left-6 top-16 z-30 w-[88px] rotate-[3deg] rounded-lg border border-ink-deep/10 bg-ink p-2.5 shadow-sm transition-transform duration-300 hover:z-40 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <SiTailwindcss className="h-5 w-5 shrink-0 text-[#06B6D4]" />
              <span className="font-mono text-[8px] font-bold uppercase text-ink-deep/60">
                Tailwind
              </span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="absolute right-5 top-14 z-20 w-[92px] rotate-[-4deg] rounded-lg border border-ink-deep/10 bg-ink p-2.5 shadow-sm transition-transform duration-300 hover:z-40 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <SiJavascript className="h-5 w-5 shrink-0 text-[#F7DF1E]" />
              <span className="font-mono text-[8px] font-bold uppercase text-ink-deep/60">
                JavaScript
              </span>
            </div>
          </div>

          {/* Node.js */}
          <div className="absolute bottom-4 left-4 z-10 w-[82px] rotate-[-4deg] rounded-lg border border-ink-deep/10 bg-ink p-2.5 shadow-sm transition-transform duration-300 hover:z-40 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <SiNodedotjs className="h-5 w-5 shrink-0 text-[#5FA04E]" />
              <span className="font-mono text-[8px] font-bold uppercase text-ink-deep/60">
                Node.js
              </span>
            </div>
          </div>

          {/* PHP */}
          <div className="absolute bottom-2 right-4 z-20 w-[76px] rotate-[7deg] rounded-lg border border-ink-deep/10 bg-ink p-2.5 shadow-sm transition-transform duration-300 hover:z-40 hover:rotate-0 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <SiPhp className="h-5 w-5 shrink-0 text-[#777BB4]" />
              <span className="font-mono text-[8px] font-bold uppercase text-ink-deep/60">
                PHP
              </span>
            </div>
          </div>

        </div>
      </div>

        {/* GitHub Contribution */}
        <div className="animate-[heroFadeUp_0.7s_ease-out_1s_both] rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-5 lg:col-span-3">

          {/* Bento heading */}
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-deep/40"> 
             GitHub Contributions 
            </span> 
            
          </div>

          <div className="-mx-6 w-[calc(100%+3rem)] overflow-x-auto overflow-y-visible px-6 scrollbar-none [&::-webkit-scrollbar]:hidden md:mx-0 md:w-full md:overflow-visible md:px-0">
            <div className="min-w-170 md:min-w-0">

              {githubMonths.length > 0 && (
                <div className="mt-1 flex w-full overflow-visible">
                  {githubMonths.map((month, index) => {
                      const isCurrentMonth = 
                        index === githubMonths.length - 1
                            return (

                      <div key={`${month.name}-${index}`} className="min-w-0" style={{ flexGrow: month.totalWeeks, flexBasis: 0, }} >
                            <span className={`whitespace-nowrap font-mono text-[10px] tracking-widest ${ isCurrentMonth ? "font-bold text-accent-blue" :     "font-medium text-ink-deep/30" }`} >
                          {month.name} 
                        </span> 
                      </div>
                    ) })}
                </div>
              )}
              
              {/* Contribution graph */}
              <div className="w-full overflow-visible">
                <GitHubContributionGraph
                  username="Samrinjaji"
                  
                  theme={{ 
                    bgColor: "transparent", 
                    textColor: "#171717", 
                    inactiveTextColor: "rgba(23, 23, 23, 0.35)", 
                    cellLevel0: "rgba(1, 75, 170, 0.07)", 
                    cellLevel1: "rgba(1, 75, 170, 0.22)", 
                    cellLevel2: "rgba(1, 75, 170, 0.42)", 
                    cellLevel3: "rgba(1, 75, 170, 0.68)", 
                    cellLevel4: "#014baa", 
                    borderColor: "transparent", 
                    cellBorderColor: "transparent", 
                    cardPadding: 0, 
                    cardPaddingBlock: 0, 
                    canvasPaddingTop: 0, 
                    canvasMarginInline: 0, 
                    cellSize: 10, 
                    cellGap: 3, 
                    cellRadius: 2, 
                    fontFamily: "JetBrains Mono, monospace", 
                  }}

                  showHeader={false} 
                  showFooter={false} 
                  showThumbnail={false}
                  showMonthLabels={false}
                  showWeekdayLabels={false}
                  showTooltips={true}
                  onDataLoaded={(data) => {
                    const calendar =
                      data.contributionsCollection.contributionCalendar

                      setGithubMonths(
                        calendar.months.map((month) => ({
                          name: month.name,
                        totalWeeks: month.totalWeeks,
                      }))
                    )
                  }}
                />
              </div>

            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-1.5">
            <span className="font-mono text-[9px] font-medium uppercase tracking-widest text-ink-deep/30"> 
              Less 
            </span>
            
            {[ "rgba(1, 75, 170, 0.07)", 
              "rgba(1, 75, 170, 0.22)", 
              "rgba(1, 75, 170, 0.42)", 
              "rgba(1, 75, 170, 0.68)", 
              "#014baa", 
            ].map((color) => (
              <span key={color} 
              className="h-2.5 w-2.5 rounded-xs" 
              style={{ backgroundColor: color }} 
              /> 
            ))}
            
            <span className="font-mono text-[9px] font-medium uppercase tracking-widest text-ink-deep/30"> 
              More 
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-ink-deep/10 pt-3">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ink-deep/30"> 
              github.com/Samrinjaji 
            </span>
            <a href="https://github.com/Samrinjaji" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-accent-blue transition-transform hover:translate-x-1" > 
              View profile ↗ 
            </a>
          </div>

        </div>
        
      </div>

    </section>

  )
}

export default Hero