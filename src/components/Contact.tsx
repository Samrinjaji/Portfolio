import { useState, type ChangeEvent, type FormEvent } from "react"

import emailjs from "@emailjs/browser"

import {
  FaUser,
  FaEnvelope,
  FaArrowRight,
  FaPaperPlane,
  FaLinkedin,
  FaDiscord,
  FaGithub,
  FaCheck,
  FaTimes,
  FaExclamation,
} from "react-icons/fa"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [modal, setModal] = useState<"success" | "error" | null>(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setModal("success")

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Automatically close success modal
      setTimeout(() => {
        setModal(null)
      }, 4000)
    } catch (error) {
      console.error("Failed to send message:", error)

      setModal("error")
    }
  }

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-ink px-5 py-16 text-ink-deep sm:px-8 lg:px-12"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent-blue/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent-blue/4 blur-3xl" />

        {/* Section header */}
        <div className="relative mx-auto flex w-full max-w-4xl items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-ink-deep/35 sm:text-[10px]">
          <span className="flex shrink-0 items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
            Contact
          </span>

          <div className="h-px flex-1 bg-ink-deep/10" />

          <span className="hidden sm:block">Get in touch</span>
        </div>

        {/* Contact card */}
        <div className="relative mx-auto mt-7 w-full max-w-4xl">
          <div className="grid overflow-hidden rounded-xl border border-ink-deep/10 bg-ink-deep/[0.025] lg:grid-cols-[0.75fr_1.25fr]">

            {/* Left panel */}
            <div className="border-b border-ink-deep/10 p-6 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="relative z-10">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent-blue">
                  Let's talk
                </span>

                <h2 className="mt-2.5 max-w-xs text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  Have a project in mind?
                </h2>

                <p className="mt-3 max-w-sm text-xs leading-5 text-ink-deep/50 sm:text-sm">
                  Tell me what you're working on and let's see how I can help
                  bring it to life.
                </p>

                {/* Availability */}
                <div className="mt-6 flex items-start gap-2.5">
                  <span className="relative mt-1 flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
                  </span>

                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-accent-blue">
                      Available for work
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-ink-deep/45">
                      Freelance projects, collaborations, and development
                      opportunities.
                    </p>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-7 border-t border-ink-deep/10 pt-5">
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-deep/30">
                    Find me online
                  </p>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Samrinjaji"
                      aria-label="GitHub"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-deep/10 text-ink-deep/45 transition-colors hover:border-accent-blue/30 hover:text-accent-blue"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/samrinjaji/"
                      aria-label="LinkedIn"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-deep/10 text-ink-deep/45 transition-colors hover:border-accent-blue/30 hover:text-accent-blue"
                    >
                      <FaLinkedin className="h-3.5 w-3.5" />
                    </a>

                    <a
                      href="#"
                      aria-label="Discord"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-deep/10 text-ink-deep/45 transition-colors hover:border-accent-blue/30 hover:text-accent-blue"
                    >
                      <FaDiscord className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="p-5 sm:p-7">

              {/* Form header */}
              <div className="mb-5 flex items-center justify-between border-b border-ink-deep/10 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                  <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                </div>

                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-ink-deep/25">
                  contact.tsx
                </span>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-ink-deep/40"
                    >
                      Name
                    </label>

                    <div className="group flex items-center gap-2 border-b border-ink-deep/15 py-2 transition-colors focus-within:border-accent-blue">
                      <FaUser className="h-2.5 w-2.5 text-ink-deep/25 group-focus-within:text-accent-blue" />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-transparent text-xs outline-none placeholder:text-ink-deep/25"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-ink-deep/40"
                    >
                      Email
                    </label>

                    <div className="group flex items-center gap-2 border-b border-ink-deep/15 py-2 transition-colors focus-within:border-accent-blue">
                      <FaEnvelope className="h-2.5 w-2.5 text-ink-deep/25 group-focus-within:text-accent-blue" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-transparent text-xs outline-none placeholder:text-ink-deep/25"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-ink-deep/40"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What can I help you with?"
                    required
                    className="w-full border-b border-ink-deep/15 bg-transparent py-2 text-xs outline-none transition-colors placeholder:text-ink-deep/25 focus:border-accent-blue"
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-ink-deep/40"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full resize-none border-b border-ink-deep/15 bg-transparent py-2 text-xs leading-5 outline-none transition-colors placeholder:text-ink-deep/25 focus:border-accent-blue"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-5 flex w-full items-center justify-between rounded-md bg-accent-blue px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-blue/20"
                >
                  <span className="flex items-center gap-2">
                    <FaPaperPlane className="h-2.5 w-2.5" />
                    Send message
                  </span>

                  <FaArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-deep/25">
            <span>I'll get back to you as soon as possible.</span>

            <span className="hidden text-accent-blue/50 sm:block">
              // connection.ready
            </span>
          </div>
        </div>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm overflow-hidden rounded-xl border border-ink-deep/10 bg-ink p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal top bar */}
            <div className="mb-5 flex items-center justify-between border-b border-ink-deep/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
              </div>

              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Close modal"
                className="flex h-6 w-6 items-center justify-center rounded-md text-ink-deep/30 transition-colors hover:bg-ink-deep/5 hover:text-ink-deep"
              >
                <FaTimes className="h-2.5 w-2.5" />
              </button>
            </div>

            {/* Modal content */}
            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  modal === "success"
                    ? "bg-accent-blue/10 text-accent-blue"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {modal === "success" ? (
                  <FaCheck className="h-5 w-5" />
                ) : (
                  <FaExclamation className="h-5 w-5" />
                )}
              </div>

              {/* Title */}
              <span
                className={`mt-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] ${
                  modal === "success"
                    ? "text-accent-blue"
                    : "text-red-500"
                }`}
              >
                {modal === "success" ? "Message sent" : "Send failed"}
              </span>

              {/* Message */}
              <h3 className="mt-2 text-lg font-extrabold tracking-tight">
                {modal === "success"
                  ? "Thanks for reaching out!"
                  : "Something went wrong."}
              </h3>

              <p className="mt-2 max-w-xs text-xs leading-5 text-ink-deep/50">
                {modal === "success"
                  ? "Your message has been sent successfully. I'll get back to you as soon as possible."
                  : "Your message couldn't be sent right now. Please try again in a moment."}
              </p>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setModal(null)}
                className={`mt-5 w-full rounded-md px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide text-white transition-all ${
                  modal === "success"
                    ? "bg-accent-blue hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-blue/20"
                    : "bg-red-500 hover:-translate-y-0.5 hover:shadow-md hover:shadow-red-500/20"
                }`}
              >
                {modal === "success" ? "Done" : "Try again"}
              </button>

              {/* Status */}
              <span className="mt-3 font-mono text-[7px] uppercase tracking-[0.15em] text-ink-deep/20">
                {modal === "success"
                  ? "// message.delivered"
                  : "// connection.error"}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact

