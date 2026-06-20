import { useState } from "react";
import { DetailModal } from "./DetailModal";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "space",
    title: "Space Debris Collision Prediction System",
    tags: ["Python", "Machine Learning", "Predictive Analytics"],
    context:
      "Addressed real satellite collision risks by building a machine learning model trained on orbital debris datasets. Applied data preprocessing, feature engineering, and ensemble modeling to detect high-risk collision scenarios, helping satellite operators make safer mission decisions.",
    highlight: "Reduced false-positive collision alerts using precision-tuned ML pipeline",
    category: "ML / AI",
  },
  {
    id: "llm",
    title: "LLM Response Analysis Tool",
    tags: ["Python", "Generative AI", "NLP"],
    context:
      "Built an application to analyze and compare outputs from multiple large language models side-by-side. Implemented prompt engineering techniques to evaluate response relevance, coherence, and factual consistency — giving a structured way to benchmark LLM behavior.",
    highlight: "Enabled structured multi-LLM benchmarking with custom scoring metrics",
    category: "Generative AI",
  },
  {
    id: "ecommerce",
    title: "Full Stack E-Commerce Platform",
    tags: ["JavaScript", "SQL", "REST APIs"],
    context:
      "Designed and shipped a complete e-commerce platform with product browsing, shopping cart, and user authentication. Implemented REST-based backend APIs with database integration for dynamic product and user management — focusing on scalable client-server architecture.",
    highlight: "End-to-end platform with auth, cart, and product management",
    category: "Web Dev",
  },
  {
    id: "manga",
    title: "MangaVerse – Manga Browsing Platform",
    tags: ["HTML", "CSS", "JavaScript"],
    context:
      "Created a responsive manga browsing website improving content accessibility and discovery. Implemented listing pages, detail views, genre filters, and intuitive navigation — with a strong focus on clean UI and smooth cross-device experience.",
    highlight: "Responsive multi-page UI with genre filtering and smooth navigation",
    category: "Web Dev",
  },
];

const categoryColors: Record<string, string> = {
  "ML / AI": "text-primary bg-primary/8 border-primary/20",
  "Generative AI": "text-secondary bg-secondary/8 border-secondary/20",
  "Web Dev": "text-muted-foreground bg-muted/50 border-border",
};

function SpaceSimulation() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const runSim = () => {
    setLoading(true);
    setResult(false);
    setTimeout(() => { setLoading(false); setResult(true); }, 2000);
  };
  return (
    <div className="flex flex-col gap-4 font-mono text-sm">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground uppercase tracking-widest text-xs">Telemetry Feed</span>
        <Button onClick={runSim} disabled={loading} variant="outline" size="sm" className="h-8 border-primary/30 text-primary hover:bg-primary/10">
          {loading ? <span className="mr-2 animate-spin inline-block">◎</span> : null}
          Run Prediction
        </Button>
      </div>
      <div className="bg-background/80 p-4 rounded border border-border min-h-[120px] flex flex-col justify-end">
        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2 text-muted-foreground">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Velocity: 7.8 km/s</motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Trajectory Angle: 14.3°</motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Proximity Vector: 0.023 AU</motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pt-2 mt-2 border-t border-primary/20 text-primary font-semibold">
                ✓ Collision Risk: 0.02% — Orbit Clear.
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {!result && !loading && <span className="text-muted-foreground/50 italic">Awaiting telemetry...</span>}
        {loading && <span className="text-secondary animate-pulse">Establishing uplink...</span>}
      </div>
    </div>
  );
}

function LLMSimulation() {
  const prompts = ["Explain Quantum Physics", "Write a Haiku", "Summarize AI"];
  const [active, setActive] = useState(0);
  const responses = [
    {
      alpha: "Quantum physics studies matter and energy at the most fundamental level, revealing properties of the very building blocks of nature.",
      beta: "At the atomic scale, physics breaks its own rules. Particles exist in multiple states simultaneously, entangled across vast distances.",
    },
    {
      alpha: "Leaves fall to the ground,\nWinter chill begins to bite,\nSpring is far away.",
      beta: "Silent silver moon,\nCode running through the deep night,\nAnswers yet unknown.",
    },
    {
      alpha: "Artificial Intelligence is the simulation of human intelligence in machines programmed to think and learn like humans.",
      beta: "AI is computer science focused on smart machines capable of tasks that typically require human intelligence and judgment.",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {prompts.map((p, i) => (
          <Button key={i} onClick={() => setActive(i)} variant={active === i ? "default" : "outline"} size="sm"
            className={`font-sans text-xs ${active === i ? "bg-primary text-primary-foreground" : "border-primary/20 text-muted-foreground hover:text-primary"}`}>
            {p}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {(["alpha", "beta"] as const).map((model) => (
          <div key={model} className="bg-background/60 border border-primary/10 rounded-lg p-3 space-y-2">
            <div className="font-mono text-xs text-primary border-b border-primary/10 pb-1.5">
              Model-{model === "alpha" ? "Alpha" : "Beta"}
            </div>
            <p className="font-sans text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed min-h-[70px]">
              {responses[active][model]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ECommerceSimulation() {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  const items = [
    { id: 1, name: "Neural Engine Unit", price: 299 },
    { id: 2, name: "Quantum Processor", price: 899 },
    { id: 3, name: "Optic Sensor Array", price: 149 },
    { id: 4, name: "Tachyon Drive", price: 549 },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center bg-card/80 p-3 rounded-lg border border-primary/20">
        <span className="font-sans font-medium text-sm text-foreground">Shopping Cart</span>
        <div className="font-mono text-xs text-secondary flex gap-3">
          <span>{cart} items</span>
          <span>${total}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item.id} className="bg-background/50 border border-primary/10 p-3 rounded flex flex-col justify-between gap-2">
            <div>
              <div className="font-sans text-xs text-foreground">{item.name}</div>
              <div className="font-mono text-xs text-muted-foreground">${item.price}</div>
            </div>
            <Button size="sm" variant="outline"
              onClick={() => { setCart((c) => c + 1); setTotal((t) => t + item.price); }}
              className="h-7 text-xs border-primary/20 hover:bg-primary/10 hover:text-primary">
              Add
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MangaSimulation() {
  const [filter, setFilter] = useState("All");
  const tabs = ["All", "Shonen", "Seinen", "Slice of Life"];
  const items = [
    { id: 1, title: "Cyberpunk: Edgerunners", genre: "Seinen" },
    { id: 2, title: "My Hero Academia", genre: "Shonen" },
    { id: 3, title: "Yotsuba&!", genre: "Slice of Life" },
    { id: 4, title: "Jujutsu Kaisen", genre: "Shonen" },
    { id: 5, title: "Monster", genre: "Seinen" },
    { id: 6, title: "Barakamon", genre: "Slice of Life" },
  ];
  const filtered = filter === "All" ? items : items.filter((i) => i.genre === filter);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2 border-b border-primary/10 pb-2">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setFilter(tab)}
            className={`font-sans text-xs px-3 py-1 rounded-full transition-colors ${filter === tab ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground"}`}>
            {tab}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-2 min-h-[120px] content-start">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div layout key={item.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.18 }}
              className="bg-card/40 border border-primary/10 p-2.5 rounded aspect-video flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="relative z-10">
                <div className="font-mono text-[9px] text-secondary uppercase tracking-wider mb-0.5">{item.genre}</div>
                <div className="font-serif text-xs text-foreground leading-tight">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);

  const getSim = (id: string) => {
    switch (id) {
      case "space": return <SpaceSimulation />;
      case "llm": return <LLMSimulation />;
      case "ecommerce": return <ECommerceSimulation />;
      case "manga": return <MangaSimulation />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,hsl(265_35%_12%_/_0.35),transparent)]" />

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase">What I've built</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Projects</h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-primary/10 bg-card p-6 hover:border-primary/35 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_hsl(224_45%_4%_/_0.5)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/55">
                      · {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {project.context}
                </p>

                <p className="text-xs font-sans text-secondary/80 bg-secondary/6 border border-secondary/12 rounded-lg px-3 py-1.5 line-clamp-1">
                  ✦ {project.highlight}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
                  <span>View details & demo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/sreedeep123-star"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-primary/25 text-primary font-mono text-xs uppercase tracking-wider hover:bg-primary/8 hover:border-primary/50 transition-all duration-200 group"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>

      <DetailModal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title || ""}
        tags={activeProject?.tags}
        context={activeProject?.context}
        simulation={activeProject ? getSim(activeProject.id) : null}
      />
    </section>
  );
}
