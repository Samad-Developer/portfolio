"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
]

const traits = [
  "Pixel Perfect",
  "Performance Obsessed",
  "Clean Code Advocate",
  "Problem Solver",
  "Team Player",
  "Always Learning",
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0ae448]/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#0ae448] font-mono text-sm mb-4 tracking-wider">01. ABOUT ME</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Crafting Digital
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
            >
              Experiences
            </span>
          </h2>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-8">
            I'm a <span className="text-[#0ae448] font-semibold">Frontend Developer</span> passionate about building
            beautiful, performant, and accessible web applications that make a difference.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            With expertise in React, Next.js, and TypeScript, I transform complex problems into elegant solutions. I
            believe great software is born from the intersection of technical excellence and thoughtful design.
          </p>
        </div>

        <div className="relative mb-20 py-6 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[...traits, ...traits, ...traits].map((trait, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="text-2xl sm:text-3xl font-bold text-foreground/10 whitespace-nowrap">{trait}</span>
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative text-center p-8 rounded-3xl bg-card/50 border border-border hover:border-[#0ae448]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#0ae448]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
