import { Button } from "@/components/ui/button"
import { Users, Calendar, Trophy, Zap } from "lucide-react"

export default function RegistrationSection() {
  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-br from-black via-orange-950/30 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary orange-glow">Register Now</span>
            </h2>
            <p className="text-xl text-primary/80">Secure your spot in the ultimate AI hackathon experience</p>
          </div>

          <div className="liquid-glass rounded-3xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">Team Size</h3>
                  <p className="text-muted-foreground">4 members per team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">Duration</h3>
                  <p className="text-muted-foreground">30 hours of hacking</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">Prize Pool</h3>
                  <p className="text-muted-foreground">₹50,000 in prizes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">Limited Spots</h3>
                  <p className="text-muted-foreground">Only 40 teams accepted</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                  Register Your Team
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Click to fill out the registration form</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary/70">
              Registration closes on <span className="font-semibold text-primary">November 7, 2025</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
