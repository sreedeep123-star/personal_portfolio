import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitTraceProps {
  className?: string;
  size?: "small" | "large";
}

export function OrbitTrace({ className, size = "large" }: OrbitTraceProps) {
  const isSmall = size === "small";
  
  return (
    <div className={cn("relative flex items-center justify-center pointer-events-none", className)}>
      <motion.svg
        width={isSmall ? "24" : "100%"}
        height={isSmall ? "24" : "100%"}
        viewBox="0 0 200 200"
        className="absolute inset-0 m-auto overflow-visible"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: isSmall ? 2 : 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbit Path */}
        <ellipse
          cx="100"
          cy="100"
          rx={isSmall ? "10" : "180"}
          ry={isSmall ? "10" : "80"}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.2"
          className="transform-origin-center"
        />
        {/* Glowing Dot */}
        <motion.circle
          cx={isSmall ? "110" : "280"}
          cy="100"
          r={isSmall ? "2" : "3"}
          fill="var(--color-primary)"
          className="drop-shadow-[0_0_8px_var(--color-primary)]"
        />
      </motion.svg>
    </div>
  );
}
