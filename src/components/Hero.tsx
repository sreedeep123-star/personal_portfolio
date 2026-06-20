import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const GITHUB_URL = "https://github.com/sreedeep123-star";
const LINKEDIN_URL = "https://www.linkedin.com/in/sreedeep-papireddy-234113323/";
const EMAIL = "deeps510813@gmail.com";

function TypewriterText({ phrases }: { phrases: string[] }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIdx];
      if (!el.current) return;
      if (deleting) {
        charIdx--;
        el.current.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timeout = setTimeout(tick, 500);
          return;
        }
        timeout = setTimeout(tick, 40);
      } else {
        charIdx++;
        el.current.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 2400);
          return;
        }
        timeout = setTimeout(tick, 75);
      }
    }
    timeout = setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, [phrases]);

  return <span ref={el} />;
}

function OrbitRing() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Main large orbit ellipse */}
      <motion.div
        className="absolute"
        style={{ width: "160%", maxWidth: 1400, aspectRatio: "2 / 1" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 1400 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="700" cy="350" rx="688" ry="338" stroke="hsl(38 60% 55% / 0.18)" strokeWidth="1" fill="none" />
          <circle r="3" fill="hsl(38 90% 62% / 0.85)">
            <animateMotion dur="28s" repeatCount="indefinite" path="M 12 350 A 688 338 0 1 1 12.01 350" />
          </circle>
        </svg>
      </motion.div>

      {/* Second counter-rotating dashed orbit */}
      <motion.div
        className="absolute"
        style={{ width: "100%", maxWidth: 900, aspectRatio: "2.4 / 1" }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 900 375" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="450" cy="187.5" rx="438" ry="176" stroke="hsl(195 60% 55% / 0.10)" strokeWidth="0.8" strokeDasharray="6 14" fill="none" />
          <circle r="2" fill="hsl(195 75% 68% / 0.7)">
            <animateMotion dur="42s" repeatCount="indefinite" path="M 12 187.5 A 438 176 0 1 0 12.01 187.5" />
          </circle>
        </svg>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const isFirstVisit = useRef(
    typeof sessionStorage !== "undefined" && !sessionStorage.getItem("visited")
  );
  useEffect(() => {
    sessionStorage.setItem("visited", "1");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
    >
      <OrbitRing />

      {/* Subtle center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div
          className="w-[600px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, hsl(38 90% 55%) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content — flex grows to fill space */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 pt-28 pb-0">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs tracking-[0.35em] uppercase text-primary/70 mb-10"
        >
          AI / ML Undergraduate
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] text-foreground"
        >
          Papireddy
          <br />
          Sreedeep Reddy
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-7 font-sans text-base md:text-lg text-muted-foreground/70 min-h-[1.75rem]"
        >
          Building{" "}
          <TypewriterText
            phrases={[
              "predictive models and AI-driven software.",
              "generative AI applications.",
              "full-stack platforms with real impact.",
              "solutions focused on precision and performance.",
            ]}
          />
          <span className="animate-pulse text-primary/50 ml-px">|</span>
        </motion.p>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-9 h-px w-12 bg-primary/30"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-2.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:scale-[1.02]"
          >
            View Projects
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-2.5 rounded-full border border-foreground/15 text-muted-foreground font-sans font-medium text-sm hover:border-foreground/30 hover:text-foreground transition-all duration-200 hover:scale-[1.02]"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social links row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground/40 hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 inline-block"
          >
            <Github className="w-[18px] h-[18px]" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground/40 hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 inline-block"
          >
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="text-muted-foreground/40 hover:text-secondary transition-colors duration-200 hover:-translate-y-0.5 inline-block"
          >
            <Mail className="w-[18px] h-[18px]" />
          </a>
        </motion.div>

        {/* First visit greeting */}
        {isFirstVisit.current && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-5 font-serif text-xs italic text-muted-foreground/25"
          >
            First visit — welcome.
          </motion.p>
        )}
      </div>

      {/* Scroll cue — pinned at very bottom, separate from content flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground/25 pb-10"
      >
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
