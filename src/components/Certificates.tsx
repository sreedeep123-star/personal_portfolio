import { useState } from "react";
import { motion } from "framer-motion";
import { DetailModal } from "./DetailModal";
import { Award, ExternalLink, FileText } from "lucide-react";

const certificates = [
  {
    id: "ai-cloud",
    title: "Artificial Intelligence & Cloud Technology",
    issuer: "AICTE & Edunet Foundation",
    year: "2025",
    image: "/certificates/cert-1.pdf",
    description:
      "Completed a structured internship program covering machine learning workflows, AI deployment, and cloud-based AI integration through AICTE's collaboration with Edunet Foundation.",
  },
  {
    id: "gen-ai",
    title: "Gen AI Exchange Program (AI/ML)",
    issuer: "Hack2Skill",
    year: "2024",
    image: "/certificates/cert-2.pdf",
    description:
      "Participated in the Gen AI Exchange Program focusing on generative AI, prompt engineering, and practical application of large language models.",
  },
  {
    id: "data-vis",
    title: "Data Visualization",
    issuer: "IBM Cognitive Class",
    year: "2024",
    image: "/certificates/cert-3.pdf",
    description:
      "Earned IBM certification in data visualization techniques, covering tools and best practices for representing complex datasets in clear, actionable visual formats.",
  },
  {
    id: "sql",
    title: "SQL and Relational Databases",
    issuer: "IBM Cognitive Class",
    year: "2024",
    image: "/certificates/cert-4.pdf",
    description:
      "Completed IBM's structured SQL curriculum covering relational database design, advanced queries, joins, and database management fundamentals.",
  },
];

const issuerColors: Record<string, string> = {
  "AICTE & Edunet Foundation": "from-amber-500/10 to-orange-500/5",
  Hack2Skill: "from-violet-500/10 to-purple-500/5",
  "IBM Cognitive Class": "from-cyan-500/10 to-blue-500/5",
};

export function Certificates() {
  const [activeCert, setActiveCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(224_38%_10%_/_0.6),transparent)]" />

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="font-mono text-xs text-primary tracking-widest uppercase">Verified learning</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Certifications</h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-primary/10 bg-card hover:border-primary/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(224_45%_4%_/_0.5)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${issuerColors[cert.issuer] ?? 'from-primary/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative w-full aspect-[16/9] border-b border-primary/10 overflow-hidden bg-background/40 flex items-center justify-center">
                {cert.image.toLowerCase().endsWith('.pdf') ? (
                  <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground/60">
                    <FileText className="w-10 h-10" />
                    <div className="text-sm font-semibold text-foreground">Certificate PDF</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest">{cert.image.split('/').pop()}</div>
                  </div>
                ) : (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/40 pointer-events-none">
                      <Award className="w-10 h-10" />
                      <span className="font-mono text-[10px] uppercase tracking-widest">Certificate Image</span>
                    </div>
                  </>
                )}
              </div>

              <div className="relative p-5 space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-lg leading-snug text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-secondary">{cert.issuer}</p>
                  <span className="font-mono text-xs text-muted-foreground/60">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={!!activeCert}
        onClose={() => setActiveCert(null)}
        title={activeCert?.title || ''}
        issuer={activeCert?.issuer}
        image={activeCert?.image}
        context={activeCert?.description}
      />
    </section>
  );
}
