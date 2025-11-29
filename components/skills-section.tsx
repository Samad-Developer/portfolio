"use client"

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    color: "#0ae448",
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "SASS/SCSS", "Styled Components", "Framer Motion", "GSAP"],
    color: "#abff84",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    color: "#ff6b35",
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Vercel", "Docker", "AWS"],
    color: "#f7c948",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0ae448]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#0ae448] font-mono text-sm">02.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Tools</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#0ae448]/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-[#0ae448]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skillGroup.color }} />
                <h3 className="text-xl font-semibold text-foreground">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:border-[#0ae448]/50 hover:bg-[#0ae448]/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 shrink-0">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Node.js",
                  "GraphQL",
                  "PostgreSQL",
                  "Vercel",
                  "Figma",
                  "Git",
                ].map((tech) => (
                  <span
                    key={`${setIndex}-${tech}`}
                    className="text-4xl font-bold text-muted/20 whitespace-nowrap hover:text-[#0ae448]/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
