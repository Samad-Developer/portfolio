"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, MapPin, ArrowUpRight, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Message sent! I'll get back to you soon.")
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@yourname.dev")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0ae448]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[#0ae448] font-mono text-sm">06.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#0ae448]/50 to-transparent" />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities, creative
            ideas, or ways we can work together.
          </p>

          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-[#0ae448]/50 transition-all"
          >
            <Mail className="h-5 w-5 text-[#0ae448]" />
            <span className="text-lg text-foreground">hello@yourname.dev</span>
            {copied ? (
              <Check className="h-4 w-4 text-[#0ae448]" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground group-hover:text-[#0ae448] transition-colors" />
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Location</h3>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#0ae448]/10">
                  <MapPin className="h-5 w-5 text-[#0ae448]" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Remote / Worldwide</p>
                  <p className="text-sm text-muted-foreground">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "GitHub", url: "#" },
                  { label: "LinkedIn", url: "#" },
                  { label: "Twitter", url: "#" },
                  { label: "Resume", url: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-[#0ae448]/50 transition-all group"
                  >
                    <span className="text-foreground">{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-[#0ae448] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <div
              className="absolute -inset-1 rounded-2xl opacity-30"
              style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
            />

            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-card border border-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-secondary/50 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-secondary/50 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-secondary/50 border-border focus:border-[#0ae448] focus:ring-[#0ae448]/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-background h-12"
                style={{ backgroundImage: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
