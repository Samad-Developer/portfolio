"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter, Sparkles, Zap, Palette, Rocket } from "lucide-react"

function InteractiveShowcase() {
  const [activeCard, setActiveCard] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const showcaseItems = [
    {
      title: "Pixel Perfect",
      description: "Every detail matters",
      icon: Sparkles,
      color: "#0ae448",
      demo: (
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-md bg-gradient-to-br from-[#0ae448] to-[#abff84] animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Lightning Fast",
      description: "Performance obsessed",
      icon: Zap,
      color: "#f7c948",
      demo: (
        <div className="flex items-end gap-1 h-20">
          {[90, 75, 95, 60, 85, 70, 98].map((h, i) => (
            <div
              key={i}
              className="w-4 rounded-t-sm bg-gradient-to-t from-[#f7c948] to-[#ff6b35] transition-all duration-500"
              style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Modern Design",
      description: "Stunning interfaces",
      icon: Palette,
      color: "#ff6b35",
      demo: (
        <div className="relative w-full h-20">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0ae448] via-[#f7c948] to-[#ff6b35] opacity-20" />
          <div className="absolute top-2 left-2 w-12 h-3 rounded-full bg-[#0ae448]" />
          <div className="absolute top-7 left-2 right-2 h-2 rounded-full bg-foreground/20" />
          <div className="absolute top-11 left-2 right-8 h-2 rounded-full bg-foreground/10" />
          <div className="absolute bottom-2 right-2 w-8 h-6 rounded bg-[#ff6b35]" />
        </div>
      ),
    },
  ]

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % showcaseItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovering, showcaseItems.length])

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {showcaseItems.map((item, idx) => (
          <div
            key={item.title}
            onMouseEnter={() => {
              setActiveCard(idx)
              setIsHovering(true)
            }}
            onMouseLeave={() => setIsHovering(false)}
            className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer group ${
              activeCard === idx
                ? "bg-card border-[#0ae448]/50 scale-105 shadow-xl shadow-[#0ae448]/10"
                : "bg-card/50 border-border hover:border-[#0ae448]/30"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 ${
                activeCard === idx ? "opacity-10" : "group-hover:opacity-5"
              }`}
              style={{
                backgroundImage: `linear-gradient(135deg, ${item.color} 0%, transparent 60%)`,
              }}
            />
            <div className="relative z-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <div
                className={`transition-all duration-500 ${
                  "opacity-100 translate-y-0"
                }`}
              >
                {item.demo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



function TechOrbit() {
  const techs = [
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#ffffff" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "Tailwind", color: "#38bdf8" },
    { name: "Node.js", color: "#0ae448" },
    { name: "GraphQL", color: "#e535ab" },
  ]

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden xl:block">
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0 rounded-full border border-border/30 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute inset-8 rounded-full border border-[#0ae448]/20 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#0ae448] to-[#abff84] flex items-center justify-center shadow-lg shadow-[#0ae448]/30">
          <span className="text-2xl font-bold text-background">{"</>"}</span>
        </div>
        {techs.map((tech, i) => {
          const angle = (i / techs.length) * 360
          const radius = 120
          return (
            <div
              key={tech.name}
              className="absolute w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-xs font-medium shadow-lg transition-transform hover:scale-125"
              style={{
                left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px - 20px)`,
                top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px - 20px)`,
                color: tech.color,
              }}
              title={tech.name}
            >
              {tech.name.slice(0, 2)}
            </div>
          )
        })}
      </div>
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

      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <TechOrbit />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ae448]/10 border border-[#0ae448]/30 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ae448] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ae448]"></span>
          </span>
          <span className="text-sm text-[#0ae448]">Ready to bring your vision to life</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Your Next Website</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
          >
            Will Be Unforgettable
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
          Stunning <span className="text-[#0ae448]">•</span> Lightning Fast <span className="text-[#0ae448]">•</span>{" "}
          Built to Convert
        </p>

        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          You've just found the developer who transforms ideas into{" "}
          <span className="">jaw-dropping digital experiences</span>. Modern, sleek, and built to make
          your competitors jealous.
        </p>



        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 mb-8">
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
          {/* <Button
            size="lg"
            variant="outline"
            className="border-[#0ae448]/50 hover:bg-[#0ae448]/10 hover:border-[#0ae448] px-8 bg-transparent h-12 text-base"
            asChild
          >
            <a href="#projects">See What's Possible</a>
          </Button> */}
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

        <InteractiveShowcase />

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <a
            href="#about"
            className="inline-flex p-3 rounded-full bg-secondary/50 hover:bg-[#0ae448]/20 transition-colors border border-border hover:border-[#0ae448]/50"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
