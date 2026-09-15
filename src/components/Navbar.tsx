
import { useState } from "react"
import {
  House,
  User,
  Folder,
  BriefcaseBusiness,
  Mail,
} from "lucide-react"

const navItems = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-ink-deep/10 bg-ink/90 px-2 py-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`group flex items-center gap-2 rounded-full px-3 py-2 transition-all ${
                isActive
                  ? "bg-accent-blue/70 text-white"
                  : "text-ink-deep/50 hover:bg-accent-blue/40 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />

              <span className="hidden font-mono text-[9px] font-bold uppercase tracking-[0.12em] md:block">
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

