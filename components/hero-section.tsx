"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter, Rocket, MousePointer2, Move, RotateCcw } from "lucide-react"

function InteractiveFloatingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Pixel Perfect",
      subtitle: "Every detail crafted",
      x: 0,
      y: 0,
      rotation: -12,
      scale: 1,
      z: 1,
      color: "#0ae448",
    },
    {
      id: 2,
      title: "Lightning Fast",
      subtitle: "60fps smooth",
      x: 0,
      y: 0,
      rotation: 8,
      scale: 1,
      z: 2,
      color: "#f7c948",
    },
    {
      id: 3,
      title: "Responsive",
      subtitle: "Any device, any size",
      x: 0,
      y: 0,
      rotation: -5,
      scale: 1,
      z: 3,
      color: "#ff6b35",
    },
    {
      id: 4,
      title: "Interactive",
      subtitle: "Try dragging me!",
      x: 0,
      y: 0,
      rotation: 15,
      scale: 1,
      z: 4,
      color: "#abff84",
    },
  ])
  const [dragging, setDragging] = useState<number | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [maxZ, setMaxZ] = useState(4)

  useEffect(() => {
    // Initialize positions in a scattered pattern
    setCards((prev) =>
      prev.map((card, i) => ({
        ...card,
        x: (i % 2 === 0 ? -1 : 1) * (80 + Math.random() * 40),
        y: (i < 2 ? -1 : 1) * (40 + Math.random() * 30),
      })),
    )
  }, [])

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.preventDefault()
    const card = cards.find((c) => c.id === id)
    if (!card) return

    setDragging(id)
    setOffset({
      x: e.clientX - card.x,
      y: e.clientY - card.y,
    })

    // Bring to front
    const newZ = maxZ + 1
    setMaxZ(newZ)
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, z: newZ, scale: 1.1 } : c)))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging === null) return

    setCards((prev) =>
      prev.map((card) => (card.id === dragging ? { ...card, x: e.clientX - offset.x, y: e.clientY - offset.y } : card)),
    )
  }

  const handleMouseUp = () => {
    if (dragging !== null) {
      setCards((prev) => prev.map((c) => (c.id === dragging ? { ...c, scale: 1 } : c)))
    }
    setDragging(null)
  }

  const resetPositions = () => {
    setCards((prev) =>
      prev.map((card, i) => ({
        ...card,
        x: (i % 2 === 0 ? -1 : 1) * (80 + Math.random() * 40),
        y: (i < 2 ? -1 : 1) * (40 + Math.random() * 30),
        rotation: [-12, 8, -5, 15][i],
        z: i + 1,
        scale: 1,
      })),
    )
    setMaxZ(4)
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 mb-8">
      {/* Instruction */}
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
        <Move className="w-4 h-4" />
        <span>Drag the cards around</span>
        <button onClick={resetPositions} className="ml-4 flex items-center gap-1 text-[#0ae448] hover:underline">
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Interactive Area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative h-[300px] rounded-3xl border border-border/50 bg-gradient-to-br from-card/50 to-transparent overflow-hidden cursor-default"
      >
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,228,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,228,72,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Center indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-dashed border-[#0ae448]/20" />

        {/* Floating Cards */}
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseDown={(e) => handleMouseDown(e, card.id)}
            className="absolute top-1/2 left-1/2 w-40 cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translate(calc(-50% + ${card.x}px), calc(-50% + ${card.y}px)) rotate(${card.rotation}deg) scale(${card.scale})`,
              zIndex: card.z,
              transition: dragging === card.id ? "none" : "transform 0.3s ease-out",
            }}
          >
            <div
              className="p-4 rounded-xl border-2 bg-card shadow-2xl backdrop-blur-sm"
              style={{
                borderColor: card.color,
                boxShadow: `0 20px 40px ${card.color}20, 0 0 0 1px ${card.color}10`,
              }}
            >
              <div
                className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center"
                style={{ backgroundColor: `${card.color}20` }}
              >
                <MousePointer2 className="w-4 h-4" style={{ color: card.color }} />
              </div>
              <h4 className="font-bold text-foreground text-sm">{card.title}</h4>
              <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LiveBrowserDemo() {
  const [activeDemo, setActiveDemo] = useState(0)

  const demos = [
    { name: "Animations", color: "#0ae448" },
    { name: "Interactions", color: "#f7c948" },
    { name: "Transitions", color: "#ff6b35" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [demos.length])

  return (
    <div className="w-full max-w-xl mx-auto mt-8 mb-12">
      {/* Browser chrome */}
      <div className="rounded-t-xl border border-b-0 border-border bg-card/80 p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff6b35]" />
          <div className="w-3 h-3 rounded-full bg-[#f7c948]" />
          <div className="w-3 h-3 rounded-full bg-[#0ae448]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-secondary rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
            your-awesome-website.com
          </div>
        </div>
      </div>

      {/* Browser content */}
      <div className="rounded-b-xl border border-border bg-background/50 p-8 relative overflow-hidden h-48">
        {/* Demo selector tabs */}
        <div className="flex gap-2 mb-6">
          {demos.map((demo, i) => (
            <button
              key={demo.name}
              onClick={() => setActiveDemo(i)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeDemo === i ? "text-background" : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                backgroundColor: activeDemo === i ? demo.color : "transparent",
                border: `1px solid ${activeDemo === i ? demo.color : "var(--border)"}`,
              }}
            >
              {demo.name}
            </button>
          ))}
        </div>

        {/* Animation demos */}
        <div className="relative h-20">
          {/* Bouncing balls */}
          {activeDemo === 0 && (
            <div className="flex items-end gap-4 h-full">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full animate-bounce"
                  style={{
                    backgroundColor: demos[0].color,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: "0.8s",
                  }}
                />
              ))}
            </div>
          )}

          {/* Scaling cards */}
          {activeDemo === 1 && (
            <div className="flex gap-3 h-full items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-16 h-12 rounded-lg flex items-center justify-center text-background font-bold animate-pulse"
                  style={{
                    backgroundColor: demos[1].color,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
          )}

          {/* Sliding bar */}
          {activeDemo === 2 && (
            <div className="h-full flex flex-col justify-center gap-3">
              {[100, 75, 50].map((width, i) => (
                <div key={i} className="h-4 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full animate-[slideIn_1.5s_ease-out_infinite]"
                    style={{
                      width: `${width}%`,
                      backgroundColor: demos[2].color,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function AnimatedStats() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0ae448] to-[#abff84]">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#0ae448]/15 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-[#abff84]/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b35]/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ae448]/10 border border-[#0ae448]/30 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ae448] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ae448]"></span>
          </span>
          <span className="text-sm text-[#0ae448]">Available for new projects</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">You've Found Your</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
          >
            Perfect Developer
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
          Lightning Fast <span className="text-[#0ae448]">•</span> Stunning <span className="text-[#0ae448]">•</span> Built to
          Impress
        </p>

        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready for a website that makes visitors say <span className="text-[#f7c948] font-medium">"wow"</span>? Get
          sleek, modern designs that convert visitors into customers and leave your competitors behind.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="px-8 h-12 text-base text-background font-semibold group"
            style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              <Rocket className="w-4 h-4 group-hover:animate-bounce" />
              Start Your Project
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#0ae448]/50 hover:bg-[#0ae448]/10 hover:border-[#0ae448] px-8 bg-transparent h-12 text-base"
            asChild
          >
            <a href="#projects">See What's Possible</a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-[#0ae448]/20 text-muted-foreground hover:text-[#0ae448] transition-all hover:scale-110 border border-transparent hover:border-[#0ae448]/50"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <AnimatedStats />

        <InteractiveFloatingCards />

        <LiveBrowserDemo />

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <a
            href="#about"
            className="inline-flex p-3 rounded-full bg-secondary/50 hover:bg-[#0ae448]/20 transition-colors border border-border hover:border-[#0ae448]/50"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  )
}
