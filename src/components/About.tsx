import { motion } from "framer-motion";
import { MapPin, GraduationCap, Star } from "lucide-react";

const highlights = [
  { label: "CGPA", value: "8.13 / 10" },
  { label: "Projects Built", value: "4+" },
  { label: "Certifications", value: "4" },
  { label: "Internships", value: "1" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Subtle background tint */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,hsl(265_35%_14%_/_0.35),transparent)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div>
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Who I am</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">About Me</h2>
              <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>

            <p className="font-sans text-muted-foreground text-lg leading-[1.85]">
              I'm an AI and Machine Learning undergraduate who genuinely enjoys the craft of building
              things that work. My interest ranges from training predictive models on real orbital data
              to shipping full-stack web apps from scratch.
            </p>
            <p className="font-sans text-muted-foreground leading-[1.85]">
              I care a lot about writing clean, purposeful code — not just making things run, but
              making them run <em className="not-italic text-foreground/80">well</em>. Whether it's
              digging into feature engineering or debugging a REST endpoint at midnight, I enjoy the
              problem-solving process.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground text-sm font-sans">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="p-4 rounded-xl bg-card border border-primary/10 hover:border-primary/25 transition-colors"
                >
                  <p className="font-mono text-xl text-primary font-bold">{h.value}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — education card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 lg:pt-10"
          >
            {/* Education card */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card p-7 shadow-[0_0_40px_hsl(38_90%_62%_/_0.04)]">
              {/* Gradient corner decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Education</p>
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    B.Tech – Artificial Intelligence and Machine Learning
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm">Malla Reddy University, Hyderabad</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between font-mono text-sm">
                <span className="text-muted-foreground">Aug 2023 – Present</span>
                <span className="flex items-center gap-1.5 text-primary font-semibold">
                  <Star className="w-3.5 h-3.5" />
                  CGPA 8.13
                </span>
              </div>
            </div>

            {/* What I'm focused on */}
            <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-6 space-y-3">
              <p className="font-mono text-xs text-secondary tracking-widest uppercase">Currently Exploring</p>
              <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                {[
                  "Advanced deep learning architectures",
                  "MLOps & model deployment pipelines",
                  "Large language model fine-tuning",
                  "Cloud-native AI infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
