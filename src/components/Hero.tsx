function Hero() {
  return (
    <section className="min-h-screen bg-ink px-6 py-6 text-ink-deep md:px-10 lg:px-16">

      {/* Terminal */}
      <div className="mx-auto mb-8 w-full hidden md:max-w-5xl md:block">
        <div className="flex w-full items-stretch overflow-hidden font-mono text-xs font-bold sm:text-sm">

          <span className="flex shrink-0 items-center bg-ink-deep py-3 pl-5 pr-8 text-ink" style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%)", }} > 0 </span>

          <span className="-ml-3.5 flex shrink-0 items-center bg-accent-blue py-3 pl-9 pr-8 text-white" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > whoami ~ </span>

          <span className="-ml-3.5 flex shrink-0 items-center bg-accent-blue/90 py-3 pl-9 pr-8 text-white" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > Samrin ~ </span>

          <span className="-ml-3.5 flex min-w-0 flex-1 items-center bg-ink-deep/6 py-3 pl-9 pr-8 text-ink-deep/70" style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)", }} > Full Stack Developer ~ </span>

          <span className="ml-3 w-0.75 shrink-0 animate-pulse bg-accent-blue" />

        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
 
        {/* Profile */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="relative aspect-square w-40 overflow-hidden rounded-xl border-2 border-accent-blue lg:w-48">
            <img src="/src/assets/samrin-dark.png" alt="Samrin Jaji" className="h-full w-full object-cover" />
          </div>
 
          <a
            href="https://ko-fi.com/samrinjaji"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-40 items-center justify-center gap-2 rounded-lg bg-ink-deep/6 py-2 text-xs font-bold text-ink-deep/70 transition-transform hover:-translate-y-0.5 lg:w-48 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.575-.048 2.596-2.306 2.596-2.306s.043-1.454.049-3.15c1.153.076 2.483-.062 3.15-.62.968-.812 1.612-2.622.512-4.574zm-6.25 4.577c-.043.015-1.283.015-3.183.001-.019-1.453-.023-2.995-.003-4.4h3.2c.005.004.013.024.02.049.116.446.135 1.043.135 1.043s-.001 2.36-.169 3.307z" />
            </svg>
            Buy me a Ko-fi
          </a>
        </div>
 
        {/* Content */}
        <div className="min-w-0">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue sm:text-sm"> Full Stack Developer </p>
 
          <h1 className="w-full text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-4xl lg:text-4xl"> Turning ideas into reliable web applications. </h1>
 
          <p className="mt-5 max-w-xl text-sm leading-6 text-ink-deep/60 sm:text-base"> I build modern, responsive web applications with clean interfaces, thoughtful architecture, and a focus on creating useful digital experiences. </p>
        </div>
      </div>

    </section>
  )
}

export default Hero