"use client"

const skills = [
  // 1. Languages
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript"],
    color: "#0ae448",
  },

  // 2. Markup & Core Web
  {
    category: "Markup & Core Web",
    items: ["HTML5", "CSS3"],
    color: "#3dd6ff",
  },

  // 3. Styling & UI Libraries
  {
    category: "Styling & UI Libraries",
    items: [
      "Tailwind CSS",
      "SASS/SCSS",
      "Styled Components",
      "Ant Design",
      "shadcn/ui",
      "Material UI (MUI)",
      "Framer Motion",
      "GSAP"
    ],
    color: "#abff84",
  },

  // 4. State Management
  {
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "Context API"],
    color: "#ffda79",
  },

  // 5. API Integration & Data Layer
  {
    category: "API & Data Layer",
    items: [
      "REST APIs",
      "GraphQL",
      "React Query",
      "Axios",
      "SWR"
    ],
    color: "#ffa552",
  },

  // 6. Testing
  {
    category: "Testing",
    items: ["Jest", "React Testing Library"],
    color: "#ff6b35",
  },

  // 7. Analytics & Tracking
  {
    category: "Analytics & Tracking",
    items: [
      "Google Analytics",
      "Vercel Analytics",
      "Meta Pixel (Facebook Pixel)",
      "Hotjar",
      "PostHog"
    ],
    color: "#f7c948",
  },

  // 8. Tools & Platforms
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "Netlify",
      "Docker",
      "Chrome DevTools"
    ],
    color: "#b28dff",
  },

  // 9. Accessibility
  {
    category: "Accessibility",
    items: ["ARIA", "Semantic HTML", "Color Contrast", "Keyboard Navigation"],
    color: "#ff85a2",
  },

  // 10. UI/UX & Design Principles
  {
    category: "UI/UX",
    items: [
      "Responsive Design",
      "Design Systems",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Micro-interactions"
    ],
    color: "#7afcff",
  },
];


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
                    className="text-4xl font-bold text-gray-700 whitespace-nowrap hover:text-[#0ae448]/30 transition-colors cursor-default"
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
