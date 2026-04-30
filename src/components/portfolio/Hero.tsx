import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-glow-pulse"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.4), transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <p className="font-mono text-sm text-primary mb-6 animate-fade-in">
          <span className="opacity-60">~/</span>portfolio.tsx
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] animate-fade-in [animation-delay:120ms]">
          Pedro Henrique
          <br />
          <span className="text-gradient">Pereira de Sousa</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in [animation-delay:240ms]">
          Estudante de TI na <span className="text-foreground">UFERSA</span> · Desenvolvedor{" "}
          <span className="text-foreground">Full Stack</span> em formação · Inglês{" "}
          <span className="text-foreground">Avançado (C1)</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in [animation-delay:360ms]">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:scale-[1.03] transition-transform duration-300"
          >
            Ver projetos
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="mailto:pedroxphp@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Contato
          </a>
          <a
            href="https://github.com/Pedro-programas"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;