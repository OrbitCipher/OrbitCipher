"use client"

import { useEffect, useRef } from "react"

export default function FaviconGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const generateFavicon = async () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Load the logo image
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = "/images/logo.png"

      img.onload = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw a circular background
        ctx.fillStyle = "#7c3aed" // Primary color (purple)
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2)
        ctx.fill()

        // Calculate dimensions to maintain aspect ratio
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 0.8
        const x = canvas.width / 2 - (img.width / 2) * scale
        const y = canvas.height / 2 - (img.height / 2) * scale
        const width = img.width * scale
        const height = img.height * scale

        // Draw the logo
        ctx.drawImage(img, x, y, width, height)

        // Convert canvas to favicon
        const faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement
        if (faviconLink) {
          faviconLink.href = canvas.toDataURL("image/png")
        } else {
          const link = document.createElement("link")
          link.rel = "icon"
          link.href = canvas.toDataURL("image/png")
          document.head.appendChild(link)
        }
      }
    }

    generateFavicon()
  }, [])

  return <canvas ref={canvasRef} width={64} height={64} style={{ display: "none" }} />
}
