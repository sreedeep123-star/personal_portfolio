import { Github, Linkedin, Mail, Heart } from "lucide-react";

const EMAIL = "deeps510813@gmail.com";
const GITHUB_URL = "https://github.com/sreedeepreddy";
const LINKEDIN_URL = "https://linkedin.com/in/sreedeepreddy";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-2xl text-foreground hover:text-primary transition-colors"
            >
              Sreedeep Reddy
            </button>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              AI / ML Undergraduate · Hyderabad
            </p>
            <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">
              Building AI-powered solutions that make a real difference.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-3">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">Navigation</p>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.name}>
                    <button
                      onClick={() => scrollTo(l.href)}
                      className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-mono text-xs text-primary uppercase tracking-widest">Connect</p>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                </li>
                <li>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-sans">
          <p>
            © {new Date().getFullYear()} Papireddy Sreedeep Reddy. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-primary fill-primary" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
