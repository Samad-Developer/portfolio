"use client"

import { useState } from "react"
import { Monitor, Rocket, Code2, Globe, Palette, ArrowRight, Sparkles, Layers, Zap, User, LayoutDashboard, Search, ShoppingCart, BookOpen, Wrench, Plug, ArrowRightLeft, Package, Smartphone, Accessibility } from "lucide-react"

const allServices = {
  "Website Development": [
    {
      id: "landing",
      icon: Rocket,
      title: "Landing Page Development",
      tagline: "Convert visitors into customers",
      description: "High-impact pages that capture attention and drive action",
      highlights: ["Next.js or React", "Responsive", "Fast Loading"],
      color: "#0ae448",
      number: "01",
    },
    {
      id: "portfolio",
      icon: User,
      title: "Portfolio Website Development",
      tagline: "Showcase your work professionally",
      description: "Personal portfolio sites that highlight your skills and projects",
      highlights: ["Modern Design", "Project Showcase", "Contact Forms"],
      color: "#ff6b35",
      number: "02",
    },
    {
      id: "business-site",
      icon: Globe,
      title: "Business Website Development",
      tagline: "Corporate & Startup websites",
      description: "Professional websites tailored to your business needs",
      highlights: ["Brand Aligned", "Multi-page", "Responsive"],
      color: "#f7c948",
      number: "03",
    },
    {
      id: "figma-react",
      icon: Code2,
      title: "Figma to React/Next.js",
      tagline: "From design to code",
      description: "Convert your Figma designs into pixel-perfect React applications",
      highlights: ["Reusable Components", "Clean Code", "Type-Safe"],
      color: "#abff84",
      number: "04",
    },
    {
      id: "dashboard",
      icon: LayoutDashboard,
      title: "Dashboard & Admin Panel",
      tagline: "SaaS & data visualization",
      description: "Interactive dashboards with charts, tables, and analytics",
      highlights: ["React Components", "Data Visualization", "User Management"],
      color: "#00d4ff",
      number: "05",
    },
    {
      id: "next-seo",
      icon: Search,
      title: "SEO-Optimized Website (Next.js)",
      tagline: "Rank higher on search engines",
      description: "Performance-focused Next.js websites with built-in SEO",
      highlights: ["SEO Ready", "Fast Performance", "Server-Side Rendering"],
      color: "#0ae448",
      number: "06",
    },
    {
      id: "ecommerce-frontend",
      icon: ShoppingCart,
      title: "E-Commerce Frontend",
      tagline: "Product catalogs & checkout UI",
      description: "Beautiful storefronts with cart, checkout, and product pages",
      highlights: ["Shopping Cart", "Product Filters", "Payment UI"],
      color: "#ff6b35",
      number: "07",
    },
    {
      id: "blog-cms",
      icon: BookOpen,
      title: "Blog/CMS Website",
      tagline: "Content-focused websites",
      description: "Blog platforms with markdown support and dynamic content",
      highlights: ["Content Management", "Blog Posts", "Categories & Tags"],
      color: "#f7c948",
      number: "08",
    },
  ],

  "Frontend Enhancement & Support": [
    {
      id: "redesign",
      icon: Sparkles,
      title: "UI/UX Redesign",
      tagline: "Modernize your existing site",
      description: "Refresh outdated designs with modern UI patterns and trends",
      highlights: ["Modern Look", "Better UX", "Brand Consistency"],
      color: "#0ae448",
      number: "01",
    },
    {
      id: "bug-fixing",
      icon: Wrench,
      title: "Bug Fixing & CSS Issues",
      tagline: "Quick fixes for UI problems",
      description: "Resolve layout issues, broken styles, and visual bugs",
      highlights: ["Fast Turnaround", "Cross-Browser", "Responsive Fixes"],
      color: "#ff6b35",
      number: "02",
    },
    {
      id: "optimization",
      icon: Zap,
      title: "Performance Optimization",
      tagline: "Speed up your website",
      description: "Improve load times, optimize images, and enhance performance",
      highlights: ["Faster Loading", "Better Lighthouse Score", "Image Optimization"],
      color: "#f7c948",
      number: "03",
    },
    {
      id: "api-integration",
      icon: Plug,
      title: "API Integration",
      tagline: "Connect your frontend to backend",
      description: "Integrate REST APIs, GraphQL, or third-party services",
      highlights: ["Clean Integration", "Error Handling", "Loading States"],
      color: "#abff84",
      number: "04",
    },
    {
      id: "migration",
      icon: ArrowRightLeft,
      title: "Frontend Migration",
      tagline: "Vue → React, HTML → React/Next.js",
      description: "Modernize your tech stack with minimal downtime",
      highlights: ["Zero Downtime", "Improved Architecture", "Better Maintainability"],
      color: "#00d4ff",
      number: "05",
    },
    {
      id: "component-library",
      icon: Package,
      title: "Component Library Setup",
      tagline: "Tailwind CSS, ShadCN UI, MUI",
      description: "Set up and customize modern UI component libraries",
      highlights: ["Design System", "Reusable Components", "Theme Customization"],
      color: "#0ae448",
      number: "06",
    },
    {
      id: "responsive-fixes",
      icon: Smartphone,
      title: "Responsive Design Fixes",
      tagline: "Mobile-first improvements",
      description: "Make your site look perfect on all devices and screen sizes",
      highlights: ["Mobile Optimized", "Tablet Support", "Cross-Device Testing"],
      color: "#ff6b35",
      number: "07",
    },
    {
      id: "accessibility",
      icon: Accessibility,
      title: "Accessibility Improvements",
      tagline: "WCAG compliance & screen reader support",
      description: "Make your website accessible to all users",
      highlights: ["WCAG Standards", "Keyboard Navigation", "Screen Reader Support"],
      color: "#f7c948",
      number: "08",
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
