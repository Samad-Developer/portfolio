"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Rocket } from "lucide-react"


export function HeroSection() {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[#0ae448]/15 rounded-full blur-[100px] animate-pulse" />
<div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-[#abff84]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#ff6b35]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />


      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />


      {/* Tech orbit decoration */}
      {/* <TechOrbit /> */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-10 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ae448]/10 border border-[#0ae448]/30 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ae448] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ae448]"></span>
          </span>
          <span className="text-sm text-[#0ae448]">Available for new projects</span>
        </div>

        <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">

            Beautiful Interfaces
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
          >
            That Boosts Your Brand
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
          Lightning Fast <span className="text-[#0ae448]">/</span> Stunning <span className="text-[#0ae448]">/</span> Relentlessly Optimized
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
            className="border border-white hover:bg-[#0ae448]/10 hover:border-[#0ae448] px-8 bg-transparent h-12 text-base"
            asChild
          >
            <a href="#projects">{`Let's Talk`}</a>
          </Button>
        </div>


        {/* <InteractiveFloatingCards /> */}


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
