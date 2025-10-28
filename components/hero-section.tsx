import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-orange-950/20 to-black"
    >
      <div className="absolute inset-0 hex-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide">Encode AI Presents</p>
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight">
              <span className="text-primary orange-glow">Agentathon</span>
            </h1>
            <p className="text-3xl md:text-4xl text-primary/80 font-light text-balance">
              The MCP + Agentic AI Hackathon
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary/90">November 8-9, 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary/90">13th Floor Library, PES University</span>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-xl text-primary/70 mb-8">30 Hours of Hacking • ₹50,000 Prize Pool</p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#register">Register Your Team Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
