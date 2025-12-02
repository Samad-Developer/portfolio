"use client"

import { useState } from "react"
import { Monitor, Rocket, Code2, Globe, Palette, ArrowRight, Sparkles, Layers, Zap } from "lucide-react"

const allServices = {
  "Core Frontend Services": [
    {
      id: "landing",
      icon: Rocket,
      title: "Landing Page Development",
      tagline: "Convert visitors into customers",
      description: "High-impact pages that capture attention and drive action",
      highlights: ["Next.js or React", "Responsive", "Fast"],
      color: "#0ae448",
      number: "01",
    },
    {
      id: "ui-dev",
      icon: Palette,
      title: "Website UI Development",
      tagline: "Business, Startup, Corporate",
      description: "Clean and modern UI tailored to your business needs",
      highlights: ["Responsive", "Brand Aligned", "Pixel Perfect"],
      color: "#ff6b35",
      number: "02",
    },
    {
      id: "figma-react",
      icon: Code2,
      title: "Figma to React / HTML/CSS",
      tagline: "From design to code",
      description: "Convert your designs into fully functional React apps",
      highlights: ["Reusable Components", "Responsive", "Clean Code"],
      color: "#f7c948",
      number: "03",
    },
    {
      id: "dashboard",
      icon: Globe,
      title: "Dashboard UI Development",
      tagline: "SaaS & Admin Panels",
      description: "Interactive dashboards with reusable components",
      highlights: ["React Components", "Clean Architecture", "Fast Loading"],
      color: "#abff84",
      number: "04",
    },
  ],

  "Premium Services (Highly Paid)": [
    {
      id: "next-seo",
      icon: Rocket,
      title: "Next.js Website with SEO",
      tagline: "High-paying projects",
      description: "Fully optimized, SEO-ready Next.js websites",
      highlights: ["SEO Ready", "Performance Optimized", "Scalable"],
      color: "#0ae448",
      number: "01",
    },
    {
      id: "tailwind-shadcn",
      icon: Palette,
      title: "Tailwind CSS / ShadCN UI",
      tagline: "Modern UI frameworks",
      description: "Beautifully styled UI using Tailwind or ShadCN",
      highlights: ["Scalable", "Modern Design", "Fast Development"],
      color: "#ff6b35",
      number: "02",
    },
    {
      id: "frontend-migration",
      icon: Code2,
      title: "Frontend Migration",
      tagline: "Vue → React, HTML → React",
      description: "Migrate your frontend with clean architecture",
      highlights: ["No Downtime", "Clean Code", "Responsive"],
      color: "#f7c948",
      number: "03",
    },
  ],

  "Small Tasks (Easy to Sell)": [
    {
      id: "navbar-redesign",
      icon: Rocket,
      title: "Navbar Redesign",
      tagline: "Quick fixes",
      description: "Improve navigation and user experience",
      highlights: ["Fast", "Clean", "Modern"],
      color: "#0ae448",
      number: "01",
    },
    {
      id: "landing-hero",
      icon: Palette,
      title: "Landing Section Hero Redesign",
      tagline: "Make the first impression count",
      description: "Eye-catching landing sections for better conversion",
      highlights: ["Responsive", "Attractive", "Conversion Focused"],
      color: "#ff6b35",
      number: "02",
    },
    {
      id: "ui-bugs",
      icon: Code2,
      title: "UI Bug Fixing / CSS Issues",
      tagline: "Small but important tasks",
      description: "Fix UI bugs and small frontend issues quickly",
      highlights: ["Fast", "Reliable", "Clean"],
      color: "#f7c948",
      number: "03",
    },
  ],
}

export function ServicesSection() {
  const tabs = Object.keys(allServices) as (keyof typeof allServices)[]
  const [activeTab, setActiveTab] = useState<keyof typeof allServices>(tabs[0])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const services = allServices[activeTab]

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0ae448]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ae448]/10 border border-[#0ae448]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#0ae448]" />
            <span className="text-[#0ae448] text-sm font-medium">Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            What I Can
            <span className="relative mx-4">
              <span className="bg-gradient-to-r from-[#0ae448] to-[#abff84] bg-clip-text text-transparent">Create</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="#0ae448" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From pixel-perfect landing pages to complex React applications
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl cursor-pointer font-medium border transition ${
                activeTab === tab
                  ? "bg-[#0ae448] text-black border-[#0ae448]"
                  : "bg-card/30 text-foreground border-border hover:border-[#0ae448]/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-8 transition-all duration-500 hover:border-[${service.color}]/50 overflow-hidden`}
              style={{
                boxShadow: hoveredId === service.id ? `0 0 60px ${service.color}20` : "none",
              }}
            >
              <span
                className="absolute -right-4 -top-8 text-[180px] font-black opacity-[0.03] select-none transition-opacity duration-500 group-hover:opacity-[0.08]"
                style={{ color: service.color }}
              >
                {service.number}
              </span>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${service.color}08 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{service.number}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-[#0ae448] transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border transition-colors"
                      style={{
                        borderColor: `${service.color}30`,
                        color: service.color,
                        backgroundColor: `${service.color}10`,
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground group/link"
                >
                  <span className="group-hover/link:text-[#0ae448] transition-colors">Get Started</span>
                  <ArrowRight
                    className="w-4 h-4 transition-all group-hover/link:translate-x-1"
                    style={{ color: service.color }}
                  />
                </a>
              </div>

              <div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${service.color}10 100%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 rounded-2xl border border-border bg-card/20">
            {[{ icon: Layers, text: "Clean Code Architecture" }, { icon: Zap, text: "Performance Optimized" }, { icon: Monitor, text: "Pixel Perfect Design" }].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0ae448]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#0ae448]" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              )
            )}
          </div>
        </div>

   {/* Bottom CTA - centered */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-border bg-card/30">
            <p className="text-foreground font-medium">Not sure what you need?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0ae448] to-[#abff84] text-background font-semibold hover:scale-105 transition-transform"
            >
              Let's Discuss
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
