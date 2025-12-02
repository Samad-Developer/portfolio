"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Copy, Check, Sparkles, ArrowUpRight, MessageSquare, Zap, Clock } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Message sent! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("samad.frontend@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const quickLinks = [
    { label: "GitHub", url: "#", icon: "GH" },
    { label: "LinkedIn", url: "#", icon: "LI" },
    { label: "Twitter", url: "#", icon: "TW" },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#0ae448]/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#f7c948]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header - centered */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ae448]/10 border border-[#0ae448]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#0ae448]" />
            <span className="text-[#0ae448] text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Start
            <span className="block bg-gradient-to-r from-[#0ae448] to-[#abff84] bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring
            your vision to life.
          </p>
        </div>

        {/* Features row */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { icon: MessageSquare, text: "Quick Response", color: "#0ae448" },
            { icon: Zap, text: "Fast Delivery", color: "#f7c948" },
            { icon: Clock, text: "Flexible Hours", color: "#ff6b35" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-border">
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Main content - centered card */}
        <div className="max-w-2xl mx-auto">
          {/* Email copy button */}
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-3">Prefer email? Click to copy</p>
            <button
              onClick={copyEmail}
              className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-card border border-border hover:border-[#0ae448]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(10,228,72,0.1)]"
            >
              <div className="p-3 rounded-xl bg-[#0ae448]/10 group-hover:bg-[#0ae448]/20 transition-colors">
                <Mail className="h-6 w-6 text-[#0ae448]" />
              </div>
              <span className="text-xl font-medium text-foreground">samad.frontend@gmail.com</span>
              <div className="p-2 rounded-lg bg-secondary/50">
                {copied ? (
                  <Check className="h-5 w-5 text-[#0ae448]" />
                ) : (
                  <Copy className="h-5 w-5 text-muted-foreground group-hover:text-[#0ae448] transition-colors" />
                )}
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or send a message</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Contact form */}
          <div className="relative">
            {/* Gradient border effect */}
            <div
              className="absolute -inset-[1px] rounded-3xl opacity-50"
              style={{ background: "linear-gradient(135deg, #0ae448 0%, #abff84 50%, #f7c948 100%)" }}
            />

            <form onSubmit={handleSubmit} className="relative p-8 sm:p-10 rounded-3xl bg-card space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-secondary/30 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-secondary/30 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Message</label>
                <Textarea
                  placeholder="Tell me about your project, goals, and timeline..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/30 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20 resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-semibold text-background rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(10,228,72,0.3)]"
                style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Social links */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or connect with me on</p>
            <div className="flex justify-center gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-[#0ae448]/50 transition-all duration-300"
                >
                  <span className="text-xs font-bold text-[#0ae448]">{link.icon}</span>
                  <span className="text-sm font-medium text-foreground">{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[#0ae448] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
