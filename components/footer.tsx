import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-br from-black via-orange-950/20 to-black border-t border-primary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="liquid-glass rounded-2xl p-8 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-primary orange-glow">Encode AI</span>
                </h3>
                <p className="text-white/70">Student Club dedicated to AI, Agents, and MCP</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/30 text-center">
              <p className="text-white/70">© 2025 Encode AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
