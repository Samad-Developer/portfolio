"use client"

export default function TechOrbit() {
    const techs = [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind", color: "#38bdf8" },
      { name: "Node.js", color: "#0ae448" },
      { name: "GraphQL", color: "#e535ab" },
    ]
  
    return (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden xl:block">
        <div className="relative w-full h-full">
          {/* Orbit rings */}
          <div
            className="absolute inset-0 rounded-full border border-border/30 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-8 rounded-full border border-[#0ae448]/20 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
  
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#0ae448] to-[#abff84] flex items-center justify-center shadow-lg shadow-[#0ae448]/30">
            <span className="text-2xl font-bold text-background">{"</>"}</span>
          </div>
  
          {/* Orbiting techs */}
          {techs.map((tech, i) => {
            const angle = (i / techs.length) * 360
            const radius = 120
            return (
              <div
                key={tech.name}
                className="absolute w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-xs font-medium shadow-lg transition-transform hover:scale-125"
                style={{
                  left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px - 20px)`,
                  top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px - 20px)`,
                  color: tech.color,
                }}
                title={tech.name}
              >
                {tech.name.slice(0, 2)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }