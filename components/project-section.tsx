"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with Next.js, featuring real-time inventory management and Stripe integration.",
    image: "/modern-ecommerce-dashboard-dark-theme.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    color: "cyan",
  },
  {
    title: "AI Dashboard",
    description:
      "An intelligent analytics dashboard that visualizes complex data sets with interactive charts and AI-powered insights.",
    image: "/ai-analytics-dashboard-purple-theme.jpg",
    tags: ["React", "D3.js", "Python", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
    color: "magenta",
  },
  {
    title: "Design System",
    description:
      "A comprehensive design system and component library used across multiple products, ensuring consistency.",
    image: "/design-system-component-library.png",
    tags: ["React", "Storybook", "Figma", "a11y"],
    liveUrl: "#",
    githubUrl: "#",
    color: "lime",
  },
  {
    title: "Real-time Collab App",
    description:
      "A collaborative workspace application with real-time editing, video conferencing, and project management.",
    image: "/collaboration-app-workspace-dark.jpg",
    tags: ["Next.js", "WebSocket", "WebRTC", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    color: "orange",
  },
  {
    title: "Crypto Portfolio Tracker",
    description:
      "Track cryptocurrency investments with real-time price updates, portfolio analytics, and market insights.",
    image: "/crypto-portfolio-tracker-dark-theme.jpg",
    tags: ["React", "Web3", "Chart.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
    color: "cyan",
  },
  {
    title: "Task Management App",
    description: "A productivity app with drag-and-drop boards, team collaboration features, and automated workflows.",
    image: "/task-management-kanban-board-dark.jpg",
    tags: ["Next.js", "DnD Kit", "Zustand", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    color: "magenta",
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
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
