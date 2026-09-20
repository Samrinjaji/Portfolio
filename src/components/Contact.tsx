import { useEffect, useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import type { IconType } from "react-icons"
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

/* -------------------------------------------------------------------------- */
/*  Config                                                                    */
/* -------------------------------------------------------------------------- */

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
}

const SOCIALS: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: "https://github.com/Samrinjaji", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samrinjaji/",
    icon: FaLinkedin,
  },
  // Add your real Discord profile/invite URL. Empty links are filtered out,
  // so nothing dead is rendered until you do.
  { label: "Discord", href: "", icon: FaDiscord },
].filter((s) => s.href)

const DIALOG_CONTENT = {
  success: {
    icon: FaCheck,
    eyebrow: "Message sent",
    title: "Thanks for reaching out!",
    body: "Your message has been sent. I'll get back to you as soon as possible.",
    action: "Done",
    tag: "// message.delivered",
    iconWrap: "bg-accent-blue/10 text-accent-blue",
    eyebrowText: "text-accent-blue",
    button:
      "bg-accent-blue hover:shadow-accent-blue/20 focus-visible:ring-accent-blue",
  },
  error: {
    icon: FaExclamation,
    eyebrow: "Send failed",
    title: "Your message didn't send.",
    body: "Check your connection and try again. Your message is still in the form.",
    action: "Try again",
    tag: "// connection.error",
    iconWrap: "bg-red-500/10 text-red-500",
    eyebrowText: "text-red-500",
    button: "bg-red-500 hover:shadow-red-500/20 focus-visible:ring-red-500",
  },
} as const

type DialogStatus = keyof typeof DIALOG_CONTENT
type Status = "idle" | "sending" | DialogStatus

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Flips to true once the element scrolls into view. Move to hooks/useInView.ts
 *  and reuse it in About, Projects, Experience, etc. */
function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(prefersReducedMotion)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, inView])

  return [ref, inView] as const
}

/** Shared reveal transition. `hidden` is the pre-reveal offset class. */
const reveal = (visible: boolean, hidden: string, duration = "duration-700") =>
  `transition-all ${duration} motion-reduce:transition-none ${
    visible ? "translate-x-0 translate-y-0 opacity-100" : `${hidden} opacity-0`
  }`

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ink"

/* -------------------------------------------------------------------------- */
/*  Small components                                                          */
/* -------------------------------------------------------------------------- */

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
      <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
      <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
    </div>
  )
}

type FieldProps = {
  id: string
  label: string
  placeholder: string
  type?: string
  autoComplete?: string
  icon?: IconType
  multiline?: boolean
  maxLength?: number
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
  icon: Icon,
  multiline = false,
  maxLength,
}: FieldProps) {
  // text-base on mobile prevents iOS Safari from zooming in on focus
  const control =
    "w-full bg-transparent text-base outline-none placeholder:text-ink-deep/40 sm:text-sm"

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink-deep/60"
      >
        {label}
      </label>

      <div
        className={`group flex gap-2 border-b border-ink-deep/15 py-2 transition-colors focus-within:border-accent-blue ${
          multiline ? "items-start" : "items-center"
        }`}
      >
        {Icon && (
          <Icon
            aria-hidden="true"
            className={`h-2.5 w-2.5 shrink-0 text-ink-deep/30 group-focus-within:text-accent-blue ${
              multiline ? "mt-1.5" : ""
            }`}
          />
        )}

        {multiline ? (
          <textarea
            id={id}
            name={id}
            rows={4}
            required
            maxLength={maxLength}
            placeholder={placeholder}
            className={`${control} resize-none leading-5`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            required
            maxLength={maxLength}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className={control}
          />
        )}
      </div>
    </div>
  )
}

/** Uses the native <dialog>: focus trap, Escape to close, inert background
 *  and focus restore all come for free. */
function StatusDialog({
  status,
  onClose,
}: {
  status: DialogStatus | null
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (status && !dialog.open) dialog.showModal()
    if (!status && dialog.open) dialog.close()
  }, [status])

  const content = status ? DIALOG_CONTENT[status] : null
  const Icon = content?.icon

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // Clicks on the backdrop hit the <dialog> itself (it has no padding)
        if (e.target === e.currentTarget) onClose()
      }}
      aria-labelledby="contact-dialog-title"
      aria-describedby="contact-dialog-desc"
      className="m-auto w-[calc(100%-2.5rem)] max-w-sm bg-transparent p-0 backdrop:bg-black/30 backdrop:backdrop-blur-sm"
    >
      {content && Icon && (
        <div className="overflow-hidden rounded-xl border border-ink-deep/10 bg-ink p-5 text-ink-deep shadow-2xl">
          <div className="mb-5 flex items-center justify-between border-b border-ink-deep/10 pb-3">
            <TrafficLights />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className={`flex h-7 w-7 items-center justify-center rounded-md text-ink-deep/50 transition-colors hover:bg-ink-deep/5 hover:text-ink-deep ${focusRing}`}
            >
              <FaTimes className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${content.iconWrap}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>

            <span
              className={`mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${content.eyebrowText}`}
            >
              {content.eyebrow}
            </span>

            <h3
              id="contact-dialog-title"
              className="mt-2 text-lg font-extrabold tracking-tight"
            >
              {content.title}
            </h3>

            <p
              id="contact-dialog-desc"
              className="mt-2 max-w-xs text-sm leading-5 text-ink-deep/60"
            >
              {content.body}
            </p>

            <button
              type="button"
              autoFocus
              onClick={onClose}
              className={`mt-5 w-full rounded-md px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing} ${content.button}`}
            >
              {content.action}
            </button>

            <span
              aria-hidden="true"
              className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-deep/35"
            >
              {content.tag}
            </span>
          </div>
        </div>
      )}
    </dialog>
  )
}

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

export default function Contact() {
  const [sectionRef, isVisible] = useInView<HTMLElement>()
  const [status, setStatus] = useState<Status>("idle")

  const isSending = status === "sending"
  const dialogStatus: DialogStatus | null =
    status === "success" || status === "error" ? status : null

  // Auto-close the success dialog. The cleanup cancels the timer if the user
  // closes it early or submits again, so it can't close a later dialog.
  useEffect(() => {
    if (status !== "success") return
    const id = window.setTimeout(() => setStatus("idle"), 4000)
    return () => window.clearTimeout(id)
  }, [status])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSending) return

    // Capture now: e.currentTarget is null after the first await
    const form = e.currentTarget

    // Honeypot: real users never see this field, bots fill it in.
    // Pretend it worked so bots get no signal.
    if (new FormData(form).get("website")) {
      form.reset()
      setStatus("success")
      return
    }

    setStatus("sending")

    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, {
        publicKey: EMAILJS.publicKey,
      })
      form.reset()
      setStatus("success")
    } catch (error) {
      console.error("Failed to send message:", error)
      setStatus("error")
    }
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        aria-labelledby="contact-heading"
        className="relative overflow-hidden bg-ink px-5 py-16 text-ink-deep sm:px-8 lg:px-12"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent-blue/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent-blue/4 blur-3xl"
        />

        {/* Section header */}
        <div
          className={`relative mx-auto flex w-full max-w-4xl items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-deep/50 ${reveal(
            isVisible,
            "translate-y-4"
          )}`}
        >
          <span className="flex shrink-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent-blue"
            />
            Contact
          </span>

          <div aria-hidden="true" className="h-px flex-1 bg-ink-deep/10" />

          <span className="hidden sm:block">Get in touch</span>
        </div>

        {/* Contact card */}
        <div
          className={`relative mx-auto mt-7 w-full max-w-4xl delay-100 ${reveal(
            isVisible,
            "translate-y-6"
          )}`}
        >
          <div className="grid overflow-hidden rounded-xl border border-ink-deep/10 bg-ink-deep/[0.025] lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left panel */}
            <div
              className={`border-b border-ink-deep/10 p-6 sm:p-7 lg:border-b-0 lg:border-r ${reveal(
                isVisible,
                "-translate-x-8"
              )}`}
              style={{ transitionDelay: "250ms" }}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-blue">
                Let&apos;s talk
              </span>

              <h2
                id="contact-heading"
                className="mt-2.5 max-w-xs text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl"
              >
                Have a project in mind?
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-ink-deep/60">
                Tell me what you&apos;re working on and let&apos;s see how I can
                help bring it to life.
              </p>

              {/* Availability */}
              <div className="mt-6 flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="relative mt-1 flex h-2 w-2 shrink-0"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-50 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
                </span>

                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-accent-blue">
                    Available for work
                  </p>

                  <p className="mt-1 text-xs leading-5 text-ink-deep/60">
                    Freelance projects, collaborations, and development
                    opportunities.
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-7 border-t border-ink-deep/10 pt-5">
                <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-deep/50">
                  Find me online
                </p>

                <ul className="flex items-center gap-2">
                  {SOCIALS.map(({ label, href, icon: Icon }, i) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} (opens in a new tab)`}
                        className={`flex h-9 w-9 items-center justify-center rounded-md border border-ink-deep/10 text-ink-deep/55 hover:-translate-y-1 hover:border-accent-blue/30 hover:text-accent-blue motion-reduce:hover:translate-y-0 ${focusRing} ${reveal(
                          isVisible,
                          "translate-y-3",
                          "duration-500"
                        )}`}
                        style={{ transitionDelay: `${650 + i * 100}ms` }}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right panel */}
            <div
              className={`p-5 sm:p-7 ${reveal(isVisible, "translate-x-8")}`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-ink-deep/10 pb-3">
                <TrafficLights />

                <span
                  aria-hidden="true"
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink-deep/40"
                >
                  contact.tsx
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                aria-busy={isSending}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Name"
                    placeholder="Your name"
                    autoComplete="name"
                    icon={FaUser}
                    maxLength={100}
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    icon={FaEnvelope}
                    maxLength={254}
                  />
                </div>

                <Field
                  id="subject"
                  label="Subject"
                  placeholder="What can I help you with?"
                  maxLength={150}
                />

                <Field
                  id="message"
                  label="Message"
                  placeholder="Tell me about your project..."
                  multiline
                  maxLength={2000}
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className={`group flex w-full items-center justify-between rounded-md bg-accent-blue px-4 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent-blue/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                >
                  <span className="flex items-center gap-2">
                    <FaPaperPlane className="h-2.5 w-2.5" aria-hidden="true" />
                    {isSending ? "Sending..." : "Send message"}
                  </span>

                  <FaArrowRight
                    className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </button>

                {/* Honeypot (hidden from people and screen readers) */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                >
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-deep/50">
            <span>I&apos;ll get back to you as soon as possible.</span>

            <span
              aria-hidden="true"
              className="hidden text-accent-blue/60 sm:block"
            >
              // connection.ready
            </span>
          </div>
        </div>
      </section>

      <StatusDialog status={dialogStatus} onClose={() => setStatus("idle")} />
    </>
  )
}