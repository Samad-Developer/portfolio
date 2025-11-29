"use client"

import { ArrowUpRight, Briefcase } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    companyUrl: "#",
    description:
      "Lead frontend development for the core product. Mentoring junior developers and establishing best practices.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    highlight: true,
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "StartupXYZ",
    companyUrl: "#",
    description: "Built and maintained multiple client-facing applications with seamless user experiences.",
    skills: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    period: "2019 — 2020",
    role: "Junior Web Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Developed responsive websites for various clients. Learned modern frameworks and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
  {
    period: "2018 — 2019",
    role: "Web Development Intern",
    company: "Tech Startup",
    companyUrl: "#",
    description: "Built UI components and learned collaborative coding practices from experienced developers.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#ff6b35]/3 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#ff6b35] font-mono text-sm mb-4 tracking-wider">04. EXPERIENCE</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Where I've
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #ff6b35 0%, #f7c948 100%)" }}
            >
              Worked
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff6b35] via-[#f7c948] to-[#0ae448]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-[#ff6b35] z-10">
                  {exp.highlight && (
                    <div className="absolute inset-0 rounded-full bg-[#ff6b35] animate-ping opacity-50" />
                  )}
                </div>

                {/* Content card */}
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div
                    className={`group p-6 rounded-2xl bg-card border border-border hover:border-[#ff6b35]/50 transition-all duration-300 ${
                      exp.highlight ? "border-[#ff6b35]/30" : ""
                    }`}
                  >
                    {/* Period */}
                    <span className="text-sm font-mono text-[#ff6b35] mb-2 inline-block">{exp.period}</span>

                    {/* Role & Company */}
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                    <a
                      href={exp.companyUrl}
                      className="text-muted-foreground hover:text-[#f7c948] transition-colors inline-flex items-center gap-1 mb-3 group/link"
                    >
                      <Briefcase className="w-3 h-3" />
                      {exp.company}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-mono rounded-md bg-[#0ae448]/10 text-[#0ae448] border border-[#0ae448]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(10,228,72,0.3)]"
            style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
          >
            <span>Download Resume</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
