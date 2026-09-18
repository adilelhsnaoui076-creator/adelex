import type { ArtTheme } from "@/lib/types";

type Frame = "rolled" | "black" | "gold" | "oak" | "none";

const frameStyles: Record<Frame, string> = {
  none: "p-0",
  rolled: "p-2 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(207,164,64,0.15)]",
  black: "p-3 bg-[#0e0e0e] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
  gold: "p-3 bg-gradient-to-br from-[#e8cf8a] via-[#cfa440] to-[#9a7726]",
  oak: "p-3 bg-gradient-to-br from-[#8a6a45] via-[#6b4f30] to-[#4d3820]",
};

export default function CanvasArt({
  theme,
  lines,
  frame = "rolled",
  className = "",
  size = "md",
}: {
  theme: ArtTheme;
  lines: string[];
  frame?: Frame;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const textSize =
    size === "lg"
      ? "text-4xl sm:text-5xl md:text-6xl"
      : size === "md"
      ? "text-2xl sm:text-3xl"
      : "text-[11px] sm:text-sm";

  return (
    <div className={`${frameStyles[frame]} rounded-[2px] ${className}`}>
      <div
        className={`canvas-texture relative flex aspect-[4/5] w-full min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-[1px] bg-gradient-to-br ${theme.gradient} ${
          size === "sm" ? "px-2 gap-0.5" : "px-6"
        } text-center`}
      >
        <span className="absolute left-4 top-4 h-6 w-px bg-gold/40" />
        <span className="absolute left-4 top-4 h-px w-6 bg-gold/40" />
        <span className="absolute bottom-4 right-4 h-6 w-px bg-gold/40" />
        <span className="absolute bottom-4 right-4 h-px w-6 bg-gold/40" />
        {lines.map((line, i) => (
          <span
            key={i}
            className={`break-words font-display font-semibold uppercase leading-[1.05] ${
              size === "sm" ? "tracking-[0.02em]" : "tracking-[0.08em]"
            } ${textSize} ${theme.accent}`}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
