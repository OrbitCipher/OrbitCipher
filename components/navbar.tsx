"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Github, Twitter } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        })
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="inspira-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/images/logo.png" alt="Orbit Cipher Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xl font-semibold text-white">Orbit Cipher</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link href="#features" className="inspira-nav-link" onClick={(e) => handleNavClick(e, "#features")}>
            Platform
          </Link>
          <Link href="#architecture" className="inspira-nav-link" onClick={(e) => handleNavClick(e, "#architecture")}>
            Technology
          </Link>
          <Link
            href="#technical-details"
            className="inspira-nav-link"
            onClick={(e) => handleNavClick(e, "#technical-details")}
          >
            Details
          </Link>
          <Link href="#fram2" className="inspira-nav-link" onClick={(e) => handleNavClick(e, "#fram2")}>
            Fram2
          </Link>
          <Link href="#research" className="inspira-nav-link" onClick={(e) => handleNavClick(e, "#research")}>
            Research
          </Link>
          <Link href="#roadmap" className="inspira-nav-link" onClick={(e) => handleNavClick(e, "#roadmap")}>
            Roadmap
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/OrbitCipher/OrbitCipher"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/GeniaRubi38410"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="inspira-container py-4 flex flex-col space-y-4">
            <Link href="#features" className="inspira-nav-link py-2" onClick={(e) => handleNavClick(e, "#features")}>
              Platform
            </Link>
            <Link
              href="#architecture"
              className="inspira-nav-link py-2"
              onClick={(e) => handleNavClick(e, "#architecture")}
            >
              Technology
            </Link>
            <Link
              href="#technical-details"
              className="inspira-nav-link py-2"
              onClick={(e) => handleNavClick(e, "#technical-details")}
            >
              Details
            </Link>
            <Link href="#fram2" className="inspira-nav-link py-2" onClick={(e) => handleNavClick(e, "#fram2")}>
              Fram2
            </Link>
            <Link href="#research" className="inspira-nav-link py-2" onClick={(e) => handleNavClick(e, "#research")}>
              Research
            </Link>
            <Link href="#roadmap" className="inspira-nav-link py-2" onClick={(e) => handleNavClick(e, "#roadmap")}>
              Roadmap
            </Link>
            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/OrbitCipher/OrbitCipher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/GeniaRubi38410"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
