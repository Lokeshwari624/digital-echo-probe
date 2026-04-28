import { Shield } from "lucide-react";

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { icon: "h-4 w-4", pad: "p-1.5", title: "text-base", tag: "text-[9px]", gap: "gap-2.5" },
    md: { icon: "h-5 w-5", pad: "p-2", title: "text-xl", tag: "text-[10px]", gap: "gap-3" },
    lg: { icon: "h-7 w-7", pad: "p-2.5", title: "text-2xl lg:text-3xl", tag: "text-[11px]", gap: "gap-3.5" },
  };
  const s = sizes[size];
  return (
    <div className={`flex items-center ${s.gap}`}>
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60" />
        <div className={`relative bg-gradient-primary ${s.pad} rounded-xl`}>
          <Shield className={`${s.icon} text-background`} strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col leading-none min-w-0">
        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
          <span className={`font-display font-bold ${s.title} text-gradient tracking-tight`}>
            ShadowTrace
          </span>
          <span className={`font-display font-semibold ${s.tag} text-primary/90 px-1.5 py-0.5 rounded-md border border-primary/40 bg-primary/10`}>
            AI
          </span>
        </div>
        <span className={`font-display ${s.tag} tracking-[0.32em] text-muted-foreground uppercase mt-1.5`}>
          Sentinel Engine
        </span>
      </div>
    </div>
  );
};

export default Logo;
