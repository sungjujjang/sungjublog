"use client"

import { useEffect, useRef } from "react"
import "@/app/globals.css" // devicon import 위치 (또는 layout.tsx 에도 가능)

const skills = [
  "devicon-python-plain",
  "devicon-javascript-plain",
  "devicon-github-original",
  "devicon-flutter-plain",
  "devicon-java-plain",
  "devicon-django-plain",
  "devicon-flask-original",
  "devicon-typescript-original",
  "devicon-express-original",
  "devicon-tailwindcss-plain",
]

export default function SkillCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let position = 0
    const totalItems = skills.length
    const interval = setInterval(() => {
      position = (position + 1) % totalItems
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${position * 100}%)`
      }
    }, 2000) // 2초 간격

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* devicon CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="w-full max-w-xs mx-auto overflow-hidden mt-16 rounded-xl border border-zinc-300 dark:border-zinc-700">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {skills.map((icon, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center py-6 bg-white dark:bg-zinc-900"
            >
              <i
                className={`${icon} text-6xl grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}