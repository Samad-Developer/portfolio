"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AMFI — Web3 Landing Experience",
    description:
      "A high-performance landing page for a blockchain ecosystem, engineered with precision UI, optimized animations, and a scalable component architecture.",
    image: "/images/amfi.png",
    tags: ["React", "Next.js", "GSAP", "Design Systems"],
    liveUrl: "#",
    githubUrl: "#",
    color: "lime",
  },
  {
    title: "Restaurant Operations Dashboard",
    description:
      "A full-stack dashboard for online food ordering systems—featuring real-time order flow, operational analytics, customer insights, and role-based management.",
    image: "/images/dashboard.png",
    tags: ["Next.js", "WebSocket", "REST APIs", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    color: "orange",
  },
  {
    title: "SaaS Platform for Online Ordering",
    description:
      "A production-grade SaaS website for restaurants to manage menus, orders, and digital storefronts with a clean multi-tenant architecture.",
    image: "/images/food.png",
    tags: ["React", "Next.js", "TypeScript", "SaaS Architecture"],
    liveUrl: "https://hotnspicypk.com/",
    color: "magenta",
  },
  {
    title: "EatX — POS & Storefront Landing",
    description:
      "A conversion-focused landing page for a restaurant tech company offering POS systems and complete online storefront solutions.",
    image: "/images/eatx.png",
    tags: ["Next.js", "TypeScript", "Shadcn", "Framer Motion"],
    liveUrl: "https://eatx.vercel.app/",
    githubUrl: "#",
    color: "cyan",
  },  
]

const colorMap: Record<string, string> = {
  cyan: "group-hover:border-cyan/50 group-hover:shadow-cyan/10",
  magenta: "group-hover:border-magenta/50 group-hover:shadow-magenta/10",
  lime: "group-hover:border-lime/50 group-hover:shadow-lime/10",
  orange: "group-hover:border-orange/50 group-hover:shadow-orange/10",
}

const tagColorMap: Record<string, string> = {
  cyan: "bg-cyan/10 text-cyan border-cyan/20",
  magenta: "bg-magenta/10 text-magenta border-magenta/20",
  lime: "bg-lime/10 text-lime border-lime/20",
  orange: "bg-orange/10 text-orange border-orange/20",
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime font-mono text-sm">03.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl ${colorMap[project.color]}`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-video p-2">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary text-foreground border border-border hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-mono rounded-full border ${tagColorMap[project.color]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-transparent" asChild>
            <a href="#">
              View All Projects
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
