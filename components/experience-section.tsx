"use client"

import { ArrowUpRight, Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    location: "Remote",
    companyUrl: "#",
    description:
      "Lead frontend development for the core product. Mentoring junior developers and establishing best practices.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    highlight: true,
    color: "#0ae448",
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "StartupXYZ",
    location: "San Francisco",
    companyUrl: "#",
    description: "Built and maintained multiple client-facing applications with seamless user experiences.",
    skills: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    color: "#f7c948",
  },
  {
    period: "2019 — 2020",
    role: "Junior Web Developer",
    company: "Digital Agency",
    location: "New York",
    companyUrl: "#",
    description:
      "Developed responsive websites for various clients. Learned modern frameworks and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
    color: "#ff6b35",
  },
  {
    period: "2018 — 2019",
    role: "Web Development Intern",
    company: "Tech Startup",
    location: "Boston",
    companyUrl: "#",
    description: "Built UI components and learned collaborative coding practices from experienced developers.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    color: "#abff84",
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

      
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Connecting line */}
              {index !== experiences.length - 1 && (
                <div
                  className="absolute left-8 top-full w-0.5 h-6 z-0"
                  style={{ background: `linear-gradient(to bottom, ${exp.color}50, transparent)` }}
                />
              )}

              <div
                className="relative p-6 sm:p-8 rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
                style={{
                  borderColor: `${exp.color}20`,
                }}
              >
                {/* Left accent */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-full transition-all duration-300 group-hover:top-4 group-hover:bottom-4"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Current badge */}
                {exp.highlight && (
                  <div
                    className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: exp.color, color: "black" }}
                  >
                    Current Role
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left side - Period & Company */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                      style={{ backgroundColor: `${exp.color}15` }}
                    >
                      <Calendar className="w-3.5 h-3.5" style={{ color: exp.color }} />
                      <span className="text-sm font-medium" style={{ color: exp.color }}>
                        {exp.period}
                      </span>
                    </div>

                    <a
                      href={exp.companyUrl}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/link"
                    >
                      <Briefcase className="w-4 h-4" style={{ color: exp.color }} />
                      <span className="font-medium">{exp.company}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>

                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Right side - Role & Description */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{exp.role}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105"
                          style={{
                            borderColor: `${exp.color}40`,
                            color: exp.color,
                            backgroundColor: `${exp.color}08`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 60px ${exp.color}08` }}
                />
              </div>
            </div>
          ))}
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
