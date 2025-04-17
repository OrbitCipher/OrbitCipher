"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="inspira-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-3">
                <Image
                  src="/images/logo.png"
                  alt="Orbit Cipher Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Orbit Cipher</h3>
            </div>
            <p className="text-white/70 mb-4">
              A decentralized science platform for space medical data, powered by blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/OrbitCipher/OrbitCipher"
                className="text-white/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/GeniaRubi38410"
                className="text-white/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="inspira-nav-link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="inspira-nav-link">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#technical-details" className="inspira-nav-link">
                  Technical Details
                </Link>
              </li>
              <li>
                <Link href="#fram2" className="inspira-nav-link">
                  Fram2 Experiments
                </Link>
              </li>
              <li>
                <Link href="#research" className="inspira-nav-link">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="inspira-nav-link">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Partners</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.nasa.gov/trish/"
                  className="inspira-nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NASA TRISH
                </a>
              </li>
              <li>
                <a href="https://www.esa.int/" className="inspira-nav-link" target="_blank" rel="noopener noreferrer">
                  European Space Agency
                </a>
              </li>
              <li>
                <a href="https://www.jaxa.jp/" className="inspira-nav-link" target="_blank" rel="noopener noreferrer">
                  JAXA
                </a>
              </li>
              <li>
                <a href="https://www.utmb.edu/" className="inspira-nav-link" target="_blank" rel="noopener noreferrer">
                  University of Texas Medical Branch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} Orbit Cipher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
