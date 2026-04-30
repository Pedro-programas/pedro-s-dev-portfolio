import { Cloud, Code2, Database, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const groups = [
  {
    icon: Code2,
    title: "Linguagens",
    items: ["Python", "C", "Java", "JavaScript (React/Vite)"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infra",
    items: ["AWS Amplify", "AWS EC2", "AWS RDS"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    items: ["Git & GitHub", "VS Code", "Linux (Ubuntu / Arch)"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    items: ["SQLite", "Modelagem de Dados"],
  },
];

const Skills = () => (
  <section id="habilidades" className="py-28 px-6 bg-secondary/30 border-y border-border">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <SectionHeader index="02" subtitle="Habilidades" title="Stack técnica." />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 100}>
            <div className="group h-full bg-gradient-card border border-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-elegant">
              <div className="w-11 h-11 rounded-xl bg-accent/40 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{g.title}</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="font-mono">
                    <span className="text-primary mr-2">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;