import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tags?: string[];
  context?: string;
  simulation?: ReactNode;
  image?: string | null;
  issuer?: string;
}

/**
 * CertificateImage — shows the real cert image when available,
 * or a clean dashed fallback if the file is missing.
 * Drop real scans into public/certificates/cert-N.jpg to activate automatically.
 */
function CertificateImage({ src, alt }: { src: string | null | undefined; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-primary/20 bg-background/50 flex flex-col items-center justify-center gap-3 text-muted-foreground">
        <ImageOff className="w-8 h-8 text-primary/30" />
        <span className="font-mono text-xs uppercase tracking-widest">Certificate image coming soon</span>
      </div>
    );
  }

  return (
    <div className="w-full aspect-[4/3] rounded-lg border border-primary/10 overflow-hidden bg-background/50">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export function DetailModal({
  isOpen,
  onClose,
  title,
  tags,
  context,
  simulation,
  image,
  issuer,
}: DetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4 md:p-6 max-h-[90dvh] overflow-y-auto"
          >
            <div className="relative flex flex-col gap-6 rounded-xl border border-primary/20 bg-card p-6 shadow-2xl overflow-hidden">
              {/* Subtle top-edge glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-4 top-4 text-muted-foreground hover:text-primary hover:bg-primary/10"
                data-testid="button-close-modal"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Certificate Image or Fallback
                  Drop real images into public/certificates/cert-N.jpg — they appear automatically. */}
              {image !== undefined && (
                <CertificateImage src={image} alt={title} />
              )}

              {/* Header */}
              <div className="space-y-2 pr-8">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">{title}</h3>
                {issuer && <p className="font-mono text-sm text-primary">{issuer}</p>}
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Context */}
              {context && (
                <p className="text-muted-foreground leading-relaxed font-sans">{context}</p>
              )}

              {/* Simulation / Interactive Area */}
              {simulation && (
                <div className="rounded-lg border border-primary/10 bg-background/50 p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  {simulation}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
