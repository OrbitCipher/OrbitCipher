import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Orbit Cipher - Decentralized Space Medical Data Platform"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom right, #000000, #1e1b4b)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: 48,
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right, #7c3aed, #4fd1c5)",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: 24,
          fontWeight: "bold",
        }}
      >
        Orbit Cipher
      </div>
      <div
        style={{
          fontSize: 48,
          opacity: 0.8,
          maxWidth: "80%",
          textAlign: "center",
        }}
      >
        A decentralized science platform for space medical data
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
