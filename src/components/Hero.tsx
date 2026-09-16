import { useState } from "react"

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiPhp,
} from "react-icons/si";

import { GitHubContributionGraph } from "github-contrib-graph/react"
import "github-contrib-graph/styles.css"

function Hero() {

  {/*const [darkMode, setDarkMode] = useState(false)*/}
  
  const [githubMonths, setGithubMonths] = useState<
    { name: string; totalWeeks: number }[]
  >([])

  {/*
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }*/}
  
  return (
    
    <section id="home" className="relative min-h-screen bg-ink px-6 py-6 text-ink-deep md:px-10 lg:px-16">

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
      <div className="mx-auto mb-8 w-full hidden md:max-w-5xl md:block">
        <div className="flex w-full items-stretch overflow-hidden font-mono text-xs font-bold sm:text-sm">

          <span className="flex shrink-0 items-center bg-ink-deep py-3 pl-5 pr-8 text-ink" style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%)", }} > 0 </span>

          <span className="-ml-3.5 flex shrink-0 items-center bg-accent-blue py-3 pl-9 pr-8 text-white" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > whoami ~ </span>

          <span className="-ml-3.5 flex shrink-0 items-center bg-accent-blue/90 py-3 pl-9 pr-8 text-white" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > Samrin ~ </span>

          <span className="-ml-3.5 flex min-w-0 flex-1 items-center bg-ink-deep/6 py-3 pl-9 pr-8 text-ink-deep/70" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > Full Stack Developer / CyberSecurity ~ </span>

          <span className="ml-3 w-0.75 shrink-0 animate-pulse bg-accent-blue" />

        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center  md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
 
        {/* Profile */}
        <div className="flex flex-col items-center gap-3 md:items-start">

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
          <div></div>
        </div>
 
        {/* Content */}
        <div className="min-w-0">
          
          <p className="mb-4 mt-4 flex justify-center text-xs font-bold uppercase tracking-[0.2em] text-accent-blue sm:text-sm md:justify-start"> Full Stack Developer
          </p>
 
          <h1 className="w-full text-3xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-4xl lg:text-4xl"> Turning ideas into reliable web applications. 
          </h1>
 
          <p className="mt-5 max-w-xl text-sm leading-6 text-ink-deep/60 sm:text-base"> I build modern, responsive web applications with clean interfaces, thoughtful architecture, and a focus on creating useful digital experiences.
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
        <div className="rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-4 lg:col-span-3">

          {/* Bento heading */}
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-deep/40">
              Featured Project
            </span>

            <span className="text-xs text-ink-deep/30">
              01
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
                <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase text-accent-blue transition-transform hover:translate-x-1" >View project 
                  <span>↗</span>
                </a> 

                {/* GitHub */}
                <a href="https://github.com/Samrinjaji/owwa-scholarship-system" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub" className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-deep/10 text-ink-deep/50 transition-all hover:border-accent-blue hover:bg-accent-blue hover:text-white" > <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" > <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /> </svg>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Projects */}
        <a href="#projects" className="group flex min-h-64 flex-col justify-between rounded-xl bg-accent-blue p-5 text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-1" > 
          <div className="flex items-center justify-between"> 
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60"> Projects </span> 
            <span className="text-xs text-white/40"> 02 </span> 
            </div> 

            <div> 
              <span className="text-5xl font-extrabold leading-none"> 10+ </span> 
              <p className="mt-2 text-xs font-bold uppercase text-white/60"> Projects built </p> 
            </div> 

            <div className="flex items-end justify-between"> 
              <p className="max-w-40 text-xs leading-5 text-white/50"> Websites, applications, experiments, and personal projects. </p> <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"> ↗ </span>
            </div>

        </a>

        {/* Stack */}
<div className="rounded-xl border border-ink-deep/10 bg-ink-deep/6 p-4 lg:col-span-1">

  {/* Header */}
  <div className="flex items-center justify-between">
    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink-deep/40">
      Stack
    </span>

    <span className="text-[10px] text-ink-deep/30">
      03
    </span>
  </div>

  {/* Tech icons */}
  <div className="mt-4 grid grid-cols-2 gap-2">

    {/* React */}
    <div className="group flex flex-col items-center justify-center rounded-md bg-ink-deep/4 py-2 transition-all hover:-translate-y-0.5 hover:bg-accent-blue">
      <div className="flex h-10 w-10 items-center justify-center rounded-md  transition-colors group-hover:bg-white/10">
        <SiReact className="h-8 w-8 text-[#61DAFB] group-hover:text-white" />
      </div>

      <span className="mt-1.5 font-mono text-[8px] font-bold uppercase text-ink-deep/50 group-hover:text-white">
        React
      </span>
    </div>

    {/* TypeScript */}
    <div className="group flex flex-col items-center justify-center rounded-md bg-ink-deep/4 py-2 transition-all hover:-translate-y-0.5 hover:bg-accent-blue">
      <div className="flex h-10 w-10 items-center justify-center rounded-md  transition-colors group-hover:bg-white/10">
        <SiTypescript className="h-8 w-8 text-[#3178C6] group-hover:text-white" />
      </div>

      <span className="mt-1.5 font-mono text-[8px] font-bold uppercase text-ink-deep/50 group-hover:text-white">
        TypeScript
      </span>
    </div>

    {/* Tailwind */}
    <div className="group flex flex-col items-center justify-center rounded-md bg-ink-deep/4 py-2 transition-all hover:-translate-y-0.5 hover:bg-accent-blue">
      <div className="flex h-10 w-10 items-center justify-center rounded-md  transition-colors group-hover:bg-white/10">
        <SiTailwindcss className="h-8 w-8 text-[#06B6D4] group-hover:text-white" />
      </div>

      <span className="mt-1.5 font-mono text-[8px] font-bold uppercase text-ink-deep/50 group-hover:text-white">
        Tailwind
      </span>
    </div>

    {/* JavaScript */}
    <div className="group flex flex-col items-center justify-center rounded-md bg-ink-deep/4 py-2 transition-all hover:-translate-y-0.5 hover:bg-accent-blue">
      <div className="flex h-10 w-10 items-center justify-center rounded-md  transition-colors group-hover:bg-white/10">
        <SiJavascript className="h-8 w-8 text-[#F7DF1E] group-hover:text-white" />
      </div>

      <span className="mt-1.5 font-mono text-[8px] font-bold uppercase text-ink-deep/50 group-hover:text-white">
        JavaScript
      </span>
    </div>

    {/* Node.js */}
    <div className="group flex flex-col items-center justify-center rounded-md bg-ink-deep/4 py-2 transition-all hover:-translate-y-0.5 hover:bg-accent-blue">
      <div className="flex h-10 w-10 items-center justify-center rounded-md  transition-colors group-hover:bg-white/10">
        <SiNodedotjs className="h-8 w-8 text-[#5FA04E] group-hover:text-white" />
      </div>

      <span className="mt-1.5 font-mono text-[8px] font-bold uppercase text-ink-deep/50 group-hover:text-white">
        Node.js
      </span>
    </div>

    {/* PHP */}
    <div className="group flex flex-col items-center justify-center rounded-md bg-ink-deep/4 py-2 transition-all hover:-translate-y-0.5 hover:bg-accent-blue">
      <div className="flex h-10 w-10 items-center justify-center rounded-md  transition-colors group-hover:bg-white/10">
        <SiPhp className="h-8 w-8 text-[#777BB4] group-hover:text-white" />
      </div>

      <span className="mt-1.5 font-mono text-[8px] font-bold uppercase text-ink-deep/50 group-hover:text-white">
        PHP
      </span>
    </div>

  </div>
</div>

        {/* GitHub Contribution */}
        <div className="rounded-xl border border-ink-deep/10 bg-ink-deep/4 p-5 lg:col-span-3">

          {/* Bento heading */}
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink-deep/40"> 
             GitHub Contributions 
            </span> 
            <span className="text-xs text-ink-deep/30">
             04 
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
                            <span className={`whitespace-nowrap font-mono text-[9px] uppercase tracking-widest ${ isCurrentMonth ? "font-bold text-accent-blue" :     "font-medium text-ink-deep/30" }`} >
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