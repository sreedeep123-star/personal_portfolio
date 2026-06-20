import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: "aicte",
    role: "AI & Cloud Technology Intern",
    company: "AICTE – Edunet Foundation",
    location: "Remote",
    period: "Sep 2025 – Oct 2025",
    type: "Internship",
    bullets: [
      "Worked on end-to-end machine learning workflows covering data preprocessing, model development, training, and evaluation on real-world datasets.",
      "Explored AI deployment strategies and hands-on integration of cloud-based AI services for scalable application development.",
      "Collaborated in a structured learning environment with industry mentors to apply theoretical concepts to practical AI problems.",
    ],
    tags: ["Python", "Machine Learning", "AWS", "Cloud AI"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,hsl(224_38%_10%_/_0.8),transparent)]" />

      <div className="max-w-4xl mx-auto space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase">Career</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Experience</h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-14"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-card border border-primary/30 flex items-center justify-center shadow-[0_0_16px_hsl(38_90%_62%_/_0.15)]">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                <div className="rounded-2xl border border-primary/10 bg-card p-6 md:p-8 hover:border-primary/25 transition-colors duration-300 shadow-[0_4px_32px_hsl(224_45%_4%_/_0.4)]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-serif text-2xl text-foreground">{exp.role}</h3>
                      <p className="font-sans text-primary mt-1">{exp.company} · {exp.location}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                      <span className="font-mono text-sm text-secondary">{exp.period}</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 font-sans text-muted-foreground text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-background border border-border text-muted-foreground hover:border-secondary/30 hover:text-secondary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
