import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section/HeroSection"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ApproachSection } from "@/components/approach-section"
import { ProjectsSection } from "@/components/project-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ApproachSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
