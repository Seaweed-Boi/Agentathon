"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function DynamicIslandHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#info", label: "Agentathon Info" },
    { href: "#timeline", label: "Timeline" },
    { href: "#prizes", label: "Prizes" },
    { href: "#contact", label: "Contact Us" },
  ]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav
        className={`liquid-glass rounded-full px-6 py-3 transition-all duration-300 border-primary/30 ${scrolled ? "shadow-2xl shadow-primary/20" : ""}`}
      >
        <ul className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors duration-200 hover:scale-105 inline-block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
