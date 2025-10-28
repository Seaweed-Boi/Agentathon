import { Lightbulb, Code2, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Impact & Usefulness",
      description: "Main Focus",
      detail: "Build solutions that solve real-world problems and create meaningful impact.",
    },
    {
      icon: Code2,
      title: "Technical Implementation",
      description: "Code Quality",
      detail: "Demonstrate strong technical skills and clean, scalable architecture.",
    },
    {
      icon: Sparkles,
      title: "Originality & Innovation",
      description: "Creative Solutions",
      detail: "Push boundaries with unique approaches and innovative thinking.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-orange-950/20 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary orange-glow">Key Features</h2>
            <p className="text-xl text-primary/70 max-w-2xl mx-auto text-balance">
              Expert mentorship and comprehensive support throughout your hackathon journey
            </p>
          </div>

          <div className="mb-16 liquid-glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-primary">🎯</span>
              <span className="text-primary">Mentorship</span>
            </h3>
            <p className="text-white/80 leading-relaxed text-lg">
              Expert mentors from partnering companies available to guide you on AI integration, building Agents & MCP
              Servers, and multi-service orchestrators. Get real-time support and industry insights throughout the
              hackathon.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Scoring Criteria</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="liquid-glass rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                    <p className="text-white/80 text-sm font-medium mb-3">{feature.description}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{feature.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
