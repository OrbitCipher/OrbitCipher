import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
// Import the FaviconGenerator component
import FaviconGenerator from "@/components/favicon-generator"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Orbit Cipher - Decentralized Space Medical Data Platform",
  description: "A decentralized science platform for space medical data, powered by blockchain technology",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <FaviconGenerator />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'