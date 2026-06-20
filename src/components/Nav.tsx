import { useState, useEffect, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import { Download, Menu, X, Github, Linkedin } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const GITHUB_URL = "https://github.com/sreedeepreddy";
const LINKEDIN_URL = "https://linkedin.com/in/sreedeepreddy";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = useCallback((href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-primary/10 py-3 shadow-[0_1px_20px_hsl(224_45%_4%_/_0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-primary font-bold text-base tracking-[0.25em] hover:text-primary/75 transition-colors"
        >
          PSR
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1 text-sm font-sans text-muted-foreground">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-1.5 rounded-md hover:text-primary hover:bg-primary/6 transition-all duration-150 focus:outline-none"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-border/60 mx-1" />

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={() => window.print()}
              className="ml-1 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary/25 text-primary font-mono text-xs uppercase tracking-wider hover:bg-primary/8 hover:border-primary/50 transition-all duration-200"
            >
              <Download className="w-3 h-3" />
              Resume
            </button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/96 backdrop-blur-xl border-b border-primary/10 px-6 py-5 flex flex-col gap-5 shadow-2xl"
        >
          <ul className="flex flex-col gap-0.5 text-sm font-sans text-muted-foreground">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:text-primary hover:bg-primary/6 transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-px w-full bg-border/50" />

          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/25 text-primary font-mono text-xs uppercase tracking-wider hover:bg-primary/8 transition-all"
            >
              <Download className="w-3 h-3" />
              Resume PDF
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
