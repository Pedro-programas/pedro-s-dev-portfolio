import { Award, GraduationCap, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: GraduationCap,
    tag: "Graduação",
    title: "Tecnologia da Informação",
    place: "UFERSA — Universidade Federal Rural do Semi-Árido",
    detail: "4º período · em andamento",
  },
  {
    icon: Award,
    tag: "Certificação",
    title: "C1 Advanced — EF SET",
    place: "Inglês Avançado",
    detail: "Comunicação técnica e fluência profissional",
  },
  {
    icon: BookOpen,
    tag: "Cursos",
    title: "Alura — Python & C",
    place: "Lógica, fundamentos e prática",
    detail: "Trilhas complementares de programação",
  },
];

const Education = () => (
  <section id="educacao" className="py-28 px-6 max-w-6xl mx-auto">
    <Reveal>
      <SectionHeader index="03" subtitle="Educação" title="Formação e certificações." />
    </Reveal>
    <div className="space-y-4">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 100}>
          <div className="group flex flex-col sm:flex-row gap-5 sm:items-center bg-gradient-card border border-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:translate-x-1">
            <div className="w-12 h-12 rounded-xl bg-accent/40 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent">
              <it.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">{it.tag}</p>
              <h3 className="font-display text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.place}</p>
            </div>
            <p className="text-sm text-muted-foreground sm:text-right">{it.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;