"use client"

import { useState } from "react"
import { Monitor, Rocket, Code2, Zap, Globe, Palette, ArrowRight, CheckCircle2 } from "lucide-react"

const services = [
  {
    id: "landing",
    icon: Rocket,
    title: "Landing Pages",
    tagline: "First impressions that convert",
    description:
      "High-converting landing pages that capture attention and drive action. Perfect for product launches, campaigns, and lead generation.",
    features: ["Conversion Optimized", "Mobile First", "Fast Loading", "SEO Ready"],
    gradient: "from-[#0ae448] to-[#abff84]",
  },
  {
    id: "portfolio",
    icon: Palette,
    title: "Portfolio Websites",
    tagline: "Showcase your best work",
    description:
      "Stunning portfolio sites that make you stand out. For creatives, developers, photographers, and professionals who want to impress.",
    features: ["Unique Designs", "Interactive Elements", "Project Galleries", "Contact Forms"],
    gradient: "from-[#ff6b35] to-[#f7c948]",
  },
  {
    id: "react",
    icon: Code2,
    title: "React Applications",
    tagline: "Complex UIs made simple",
    description:
      "Custom React applications with seamless API integrations. From dashboards to complex web apps, I bring your ideas to life.",
    features: ["API Integration", "State Management", "Real-time Updates", "Scalable Code"],
    gradient: "from-[#0ae448] to-[#00d4ff]",
  },
  {
    id: "business",
    icon: Globe,
    title: "Business Websites",
    tagline: "Professional online presence",
    description:
      "Clean, professional websites for businesses. Static sites that load fast, look great, and represent your brand perfectly.",
    features: ["Brand Aligned", "Multi-page Sites", "Responsive Design", "Easy Updates"],
    gradient: "from-[#f7c948] to-[#ff6b35]",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState("landing")
  const active = services.find((s) => s.id === activeService) || services[0]

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,228,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,228,72,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Center Aligned */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full border border-[#0ae448]/30 text-[#0ae448] text-sm font-medium mb-6">
            What I Build
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Websites That
            <span className="block bg-gradient-to-r from-[#0ae448] to-[#abff84] bg-clip-text text-transparent">
              Work For You
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From simple landing pages to complex React applications. I create digital experiences that help your
            business grow.
          </p>
        </div>

        {/* Service Selector Pills - Center Aligned */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeService === service.id
                  ? "bg-[#0ae448] border-[#0ae448] text-black"
                  : "border-border hover:border-[#0ae448]/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Display - Center Aligned */}
        <div className="max-w-4xl mx-auto">
          <div
            key={active.id}
            className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${active.gradient}`} />

            {/* Glow effect */}
            <div
              className={`absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-gradient-to-r ${active.gradient} opacity-10 blur-3xl rounded-full`}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${active.gradient} mb-6`}
              >
                <active.icon className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <span className="text-[#0ae448] text-sm font-medium uppercase tracking-wider">{active.tagline}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{active.title}</h3>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">{active.description}</p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {active.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ae448]/10 border border-[#0ae448]/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0ae448]" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${active.gradient} text-black font-semibold hover:scale-105 transition-transform`}
              >
                Get a {active.title.split(" ")[0]} Website
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Monitor, label: "Websites Built", value: "50+" },
            { icon: Zap, label: "Avg Load Time", value: "<2s" },
            { icon: Globe, label: "Countries Reached", value: "12+" },
            { icon: Code2, label: "Lines of Code", value: "100K+" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <stat.icon className="w-5 h-5 text-[#0ae448] mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
