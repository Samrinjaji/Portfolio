function Hero() {
  return (
    <section className="min-h-screen bg-ink px-6 py-6 text-ink-deep md:px-10 lg:px-16">
      {/* Terminal */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-stretch font-mono text-xs font-bold sm:text-sm">
  
            <span
              className="flex items-center bg-ink-deep py-3 pl-5 pr-8 text-ink"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%)" }}
            >
              0
            </span>
  
            <span
              className="-ml-3.5 flex items-center bg-accent-blue py-3 pl-9 pr-8 text-white"
              style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)" }}
            >
              whoami ~
            </span>
  
            <span
              className="-ml-3.5 flex items-center bg-accent-blue/90 py-3 pl-9 pr-8 text-white"
              style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)" }}
            >
              Samrin  ~
            </span>
  
            <span
              className="-ml-3.5 flex items-center bg-ink-deep/10 py-3 pl-9 pr-8 text-ink-deep/70"
              style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 14px 100%, 0 50%)" }}
            >
              Full Stack Developer ~
            </span>
  
          </div>
        </div>
    </section>
  )
}

export default Hero