"use client"
import { useEffect, useState } from "react"

function LiveBrowserDemo() {
    const [activeDemo, setActiveDemo] = useState(0)
  
    const demos = [
      { name: "Animations", color: "#0ae448" },
      { name: "Interactions", color: "#f7c948" },
      { name: "Transitions", color: "#ff6b35" },
    ]
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length)
      }, 3000)
      return () => clearInterval(interval)
    }, [demos.length])
  
    return (
      <div className="w-full max-w-xl mx-auto mt-8 mb-12">
        {/* Browser chrome */}
        <div className="rounded-t-xl border border-b-0 border-border bg-card/80 p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff6b35]" />
            <div className="w-3 h-3 rounded-full bg-[#f7c948]" />
            <div className="w-3 h-3 rounded-full bg-[#0ae448]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-secondary rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
              your-awesome-website.com
            </div>
          </div>
        </div>
  
        {/* Browser content */}
        <div className="rounded-b-xl border border-border bg-background/50 p-8 relative overflow-hidden h-48">
          {/* Demo selector tabs */}
          <div className="flex gap-2 mb-6">
            {demos.map((demo, i) => (
              <button
                key={demo.name}
                onClick={() => setActiveDemo(i)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeDemo === i ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{
                  backgroundColor: activeDemo === i ? demo.color : "transparent",
                  border: `1px solid ${activeDemo === i ? demo.color : "var(--border)"}`,
                }}
              >
                {demo.name}
              </button>
            ))}
          </div>
  
          {/* Animation demos */}
          <div className="relative h-20">
            {/* Bouncing balls */}
            {activeDemo === 0 && (
              <div className="flex items-end gap-4 h-full">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full animate-bounce"
                    style={{
                      backgroundColor: demos[0].color,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: "0.8s",
                    }}
                  />
                ))}
              </div>
            )}
  
            {/* Scaling cards */}
            {activeDemo === 1 && (
              <div className="flex gap-3 h-full items-center">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-12 rounded-lg flex items-center justify-center text-background font-bold animate-pulse"
                    style={{
                      backgroundColor: demos[1].color,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            )}
  
            {/* Sliding bar */}
            {activeDemo === 2 && (
              <div className="h-full flex flex-col justify-center gap-3">
                {[100, 75, 50].map((width, i) => (
                  <div key={i} className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full animate-[slideIn_1.5s_ease-out_infinite]"
                      style={{
                        width: `${width}%`,
                        backgroundColor: demos[2].color,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }