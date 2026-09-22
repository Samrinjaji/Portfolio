import { useEffect, useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import type { IconType } from "react-icons"
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
  FaDiscord,
  FaGithub,
  FaCheck,
  FaTimes,
  FaExclamation,
} from "react-icons/fa"


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

  { label: "Discord", href: "https://discord.com/channels/@me", icon: FaDiscord },
].filter((s) => s.href)

const DIALOG_CONTENT = {
  success: {
    icon: FaCheck,
    eyebrow: "Message sent",
    title: "Thanks for reaching out!",
    body: "Your message has been sent. I'll get back to you as soon as possible.",
    action: "Done",
    tag: "// message.delivered",
    iconWrap: "bg-accent-blue/10 text-accent",
    eyebrowText: "text-doom",
    button:
      "bg-accent hover:shadow-accent/20 focus-visible:ring-accent",
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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches


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

const reveal = (visible: boolean, hidden: string, duration = "duration-700") =>
  `transition-all ${duration} motion-reduce:transition-none ${
    visible ? "translate-x-0 translate-y-0 opacity-100" : `${hidden} opacity-0`
  }`

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"

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
  
  const control =
  "w-full bg-transparent text-base text-ink outline-none placeholder:text-ink/40 sm:text-sm"

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-widest text-ink/60"
      >
        {label}
      </label>

      <div
        className={`flex gap-2.5 rounded-xl border border-ink/10 bg-ink/2.5 px-3.5 py-3 transition-colors focus-within:border-accent ${
          multiline ? "items-start" : "items-center"
        }`}
      >
        {Icon && (
          <Icon
            aria-hidden="true"
            className={`h-3.5 w-3.5 shrink-0 text-ink/35 ${
              multiline ? "mt-1" : ""
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
        if (e.target === e.currentTarget) onClose()
      }}
      aria-labelledby="contact-dialog-title"
      aria-describedby="contact-dialog-desc"
      className="m-auto w-[calc(100%-2rem)] max-w-xs bg-transparent p-0 backdrop:bg-black/30 backdrop:backdrop-blur-sm"
    >
      {content && Icon && (
          <div className="relative rounded-2xl border border-ink/10 bg-ink-deep p-4 text-ink shadow-2xl">
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink ${focusRing}`}
          >
            <FaTimes className="h-3 w-3" aria-hidden="true" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-3 pr-6">
            {/* Status Icon */}
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${content.iconWrap}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <span
                className={`font-mono text-[10px] font-bold uppercase tracking-[0.15em] ${content.eyebrowText}`}
              >
                {content.eyebrow}
              </span>

              <h3
                id="contact-dialog-title"
                className="mt-1 text-sm font-bold tracking-tight"
              >
                {content.title}
              </h3>

              <p
                id="contact-dialog-desc"
                className="mt-1 text-xs leading-5 text-ink/55"
              >
                {content.body}
              </p>
            </div>
          </div>

          {/* Action */}
          <button
            type="button"
            autoFocus
            onClick={onClose}
            className={`mt-4 w-full rounded-lg px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing} ${content.button}`}
          >
            {content.action}
          </button>
        </div>
      )}
    </dialog>
  )
}



export default 

function Contact() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>()
  const [status, setStatus] = useState<Status>("idle")

  const isSending = status === "sending"
  const dialogStatus: DialogStatus | null =
    status === "success" || status === "error" ? status : null

  useEffect(() => {
    if (status !== "success") return
    const id = window.setTimeout(() => setStatus("idle"), 4000)
    return () => window.clearTimeout(id)
  }, [status])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSending) return

    const form = e.currentTarget

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
      <div
        ref={sectionRef}
        id="contact"
        aria-labelledby="contact-heading"
        className="relative overflow-hidden px-5 py-16 text-ink sm:px-8 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/4 blur-3xl"
        />

        

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
            Contact
          </span>

          <div className="h-1 flex-1 bg-accent/10" />
        </div>

        {/* Heading */}
        <div
          className={`relative mx-auto mt-8 max-w-lg text-center ${reveal(
            isVisible,
            "translate-y-4"
          )}`}
        >
          <h2
            id="contact-heading"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            Get In Touch
          </h2>

          <p className="mt-3 text-sm leading-6 text-ink/60">
            Have a project in mind or just want to say hello? Feel free to
            reach out.
          </p>
        </div>


        {/* Compact form card */}
        <div
          className={`relative mx-auto mt-8 w-full max-w-lg delay-100 ${reveal(
            isVisible,
            "translate-y-6"
          )}`}
        >
          <div className="rounded-3xl border border-ink/10 bg-ink/2.5 p-6 sm:p-7">
            <form
              onSubmit={handleSubmit}
              aria-busy={isSending}
              className="space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
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
                  placeholder="Your email"
                  autoComplete="email"
                  icon={FaEnvelope}
                  maxLength={254}
                />
              </div>

              <Field
                id="subject"
                label="Subject"
                placeholder="Subject of your message"
                maxLength={150}
              />

              <Field
                id="message"
                label="Message"
                placeholder="Your message"
                multiline
                maxLength={2000}
              />

              <button
                type="submit"
                disabled={isSending}
                className={`flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
              >
                <FaPaperPlane className="h-2.5 w-2.5" aria-hidden="true" />
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* Honeypot (hidden from people and screen readers) */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
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

          {/* Social links */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink/50">
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
                    className={`flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 text-ink/55 hover:-translate-y-1 hover:border-accent/30 hover:text-accent motion-reduce:hover:translate-y-0 ${focusRing} ${reveal(
                      isVisible,
                      "translate-y-3",
                      "duration-500"
                    )}`}
                    style={{ transitionDelay: `${450 + i * 100}ms` }}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <StatusDialog status={dialogStatus} onClose={() => setStatus("idle")} />
    </>
  )
}