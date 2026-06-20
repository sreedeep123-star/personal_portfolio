import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    icon: "{ }",
    color: "primary",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "ML & AI",
    icon: "⚡",
    color: "secondary",
    skills: ["Machine Learning", "Deep Learning", "Data Preprocessing", "Feature Engineering", "Predictive Modeling"],
  },
  {
    category: "Frameworks",
    icon: "◈",
    color: "primary",
    skills: ["PyTorch", "TensorFlow"],
  },
  {
    category: "Cloud & Tools",
    icon: "☁",
    color: "secondary",
    skills: ["AWS", "GitHub", "MySQL", "VS Code"],
  },
  {
    category: "Core Concepts",
    icon: "◎",
    color: "primary",
    skills: ["Data Structures", "DBMS", "REST APIs", "Problem Solving", "Agile"],
  },
];

const ALL = "All";
const categories = [ALL, ...skillsData.map((g) => g.category)];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const visibleGroups =
    activeCategory === ALL
      ? skillsData
      : skillsData.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,hsl(265_35%_12%_/_0.4),transparent)]" />

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase">What I work with</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Technical Skills</h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary/15 border-primary/50 text-primary shadow-[0_0_12px_hsl(38_90%_62%_/_0.12)]"
                  : "border-border text-muted-foreground hover:border-primary/25 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visibleGroups.map((group, i) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-primary/10 bg-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                {/* Decorative corner glow */}
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/4 blur-2xl group-hover:bg-primary/8 transition-all duration-500" />

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-base text-primary opacity-70">{group.icon}</span>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-sm px-3 py-1 rounded-full bg-background border border-border text-muted-foreground hover:border-primary/35 hover:text-foreground transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
