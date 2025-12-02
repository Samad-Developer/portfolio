"use client"

import { Lightbulb, Search, PenTool, Code2, Rocket, RefreshCw } from "lucide-react"

const approaches = [
  {
    step: "1",
    icon: Search,
    title: "Discovery",
    description: "Deep dive into understanding the problem, users, and goals.",
  },
  {
    step: "2",
    icon: Lightbulb,
    title: "Strategy",
    description: "Creating a clear roadmap with tech stack and architecture.",
  },
  {
    step: "3",
    icon: PenTool,
    title: "Design",
    description: "Wireframes to high-fidelity prototypes with perfect UX.",
  },
  {
    step: "4",
    icon: Code2,
    title: "Develop",
    description: "Clean, maintainable code with rigorous testing.",
  },
  {
    step: "5",
    icon: Rocket,
    title: "Launch",
    description: "Optimized deployment with CI/CD and monitoring.",
  },
  {
    step: "6",
    icon: RefreshCw,
    title: "Iterate",
    description: "Continuous improvement based on feedback.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#f7c948]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#0ae448]/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#f7c948] font-mono text-sm mb-4 tracking-wider">03. MY APPROACH</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            How I Build
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #f7c948 0%, #ff6b35 100%)" }}
            >
              Great Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured yet flexible process that transforms ideas into exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {approaches.map((item, index) => (
            <div key={item.step} className={`group relative ${index === 1 || index === 4 ? "md:translate-y-12" : ""}`}>
              <div className="relative p-6 sm:p-8 rounded-3xl bg-card border border-border hover:border-[#f7c948]/50 transition-all duration-500 text-center h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#f7c948]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Step number */}
                  <span className="absolute -top-2 -left-2 text-6xl font-bold text-foreground/5 group-hover:text-[#f7c948]/10 transition-colors">
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${index % 2 === 0 ? "#f7c948" : "#ff6b35"}15` }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: index % 2 === 0 ? "#f7c948" : "#ff6b35" }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative text-center">
          <div className="inline-block p-10 rounded-[2rem] border border-[#0ae448]/30 bg-gradient-to-b from-[#0ae448]/5 to-transparent max-w-3xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-background border border-[#0ae448]/30">
              <span className="text-sm font-mono text-[#0ae448]">Philosophy</span>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed italic">
              "Great software is not just about writing code — it's about understanding people, solving real problems,
              and creating experiences that feel{" "}
              <span className="text-[#0ae448] font-semibold not-italic">intuitive</span> and{" "}
              <span className="text-[#abff84] font-semibold not-italic">delightful</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
