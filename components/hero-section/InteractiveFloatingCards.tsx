"use client"

import { useRef, useState, useEffect } from "react"
import { Move, RotateCcw, MousePointer2 } from "lucide-react"

export default function InteractiveFloatingCards() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [cards, setCards] = useState([
      {
        id: 1,
        title: "Pixel Perfect",
        subtitle: "Every detail crafted",
        x: 0,
        y: 0,
        rotation: -12,
        scale: 1,
        z: 1,
        color: "#0ae448",
      },
      {
        id: 2,
        title: "Lightning Fast",
        subtitle: "60fps smooth",
        x: 0,
        y: 0,
        rotation: 8,
        scale: 1,
        z: 2,
        color: "#f7c948",
      },
      {
        id: 3,
        title: "Responsive",
        subtitle: "Any device, any size",
        x: 0,
        y: 0,
        rotation: -5,
        scale: 1,
        z: 3,
        color: "#ff6b35",
      },
      {
        id: 4,
        title: "Interactive",
        subtitle: "Try dragging me!",
        x: 0,
        y: 0,
        rotation: 15,
        scale: 1,
        z: 4,
        color: "#abff84",
      },
    ])
    const [dragging, setDragging] = useState<number | null>(null)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [maxZ, setMaxZ] = useState(4)
  
    useEffect(() => {
      // Initialize positions in a scattered pattern
      setCards((prev) =>
        prev.map((card, i) => ({
          ...card,
          x: (i % 2 === 0 ? -1 : 1) * (80 + Math.random() * 40),
          y: (i < 2 ? -1 : 1) * (40 + Math.random() * 30),
        })),
      )
    }, [])
  
    const handleMouseDown = (e: React.MouseEvent, id: number) => {
      e.preventDefault()
      const card = cards.find((c) => c.id === id)
      if (!card) return
  
      setDragging(id)
      setOffset({
        x: e.clientX - card.x,
        y: e.clientY - card.y,
      })
  
      // Bring to front
      const newZ = maxZ + 1
      setMaxZ(newZ)
      setCards((prev) => prev.map((c) => (c.id === id ? { ...c, z: newZ, scale: 1.1 } : c)))
    }
  
    const handleMouseMove = (e: React.MouseEvent) => {
      if (dragging === null) return
  
      setCards((prev) =>
        prev.map((card) => (card.id === dragging ? { ...card, x: e.clientX - offset.x, y: e.clientY - offset.y } : card)),
      )
    }
  
    const handleMouseUp = () => {
      if (dragging !== null) {
        setCards((prev) => prev.map((c) => (c.id === dragging ? { ...c, scale: 1 } : c)))
      }
      setDragging(null)
    }
  
    const resetPositions = () => {
      setCards((prev) =>
        prev.map((card, i) => ({
          ...card,
          x: (i % 2 === 0 ? -1 : 1) * (80 + Math.random() * 40),
          y: (i < 2 ? -1 : 1) * (40 + Math.random() * 30),
          rotation: [-12, 8, -5, 15][i],
          z: i + 1,
          scale: 1,
        })),
      )
      setMaxZ(4)
    }
  
    return (
      <div className="w-full max-w-3xl mx-auto mt-16 mb-8">
        {/* Instruction */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
          <Move className="w-4 h-4" />
          <span>Drag the cards around</span>
          <button onClick={resetPositions} className="ml-4 flex items-center gap-1 text-[#0ae448] hover:underline">
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>
  
        {/* Interactive Area */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative h-[300px] rounded-3xl border border-border/50 bg-gradient-to-br from-card/50 to-transparent overflow-hidden cursor-default"
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(10,228,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,228,72,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
  
          {/* Center indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-dashed border-[#0ae448]/20" />
  
          {/* Floating Cards */}
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseDown={(e) => handleMouseDown(e, card.id)}
              className="absolute top-1/2 left-1/2 w-40 cursor-grab active:cursor-grabbing select-none"
              style={{
                transform: `translate(calc(-50% + ${card.x}px), calc(-50% + ${card.y}px)) rotate(${card.rotation}deg) scale(${card.scale})`,
                zIndex: card.z,
                transition: dragging === card.id ? "none" : "transform 0.3s ease-out",
              }}
            >
              <div
                className="p-4 rounded-xl border-2 bg-card shadow-2xl backdrop-blur-sm"
                style={{
                  borderColor: card.color,
                  boxShadow: `0 20px 40px ${card.color}20, 0 0 0 1px ${card.color}10`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center"
                  style={{ backgroundColor: `${card.color}20` }}
                >
                  <MousePointer2 className="w-4 h-4" style={{ color: card.color }} />
                </div>
                <h4 className="font-bold text-foreground text-sm">{card.title}</h4>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }