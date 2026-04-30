import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Em breve",
    description:
      "Projetos pessoais de Full Stack — APIs em Python, interfaces em React e experimentos com AWS.",
    tags: ["React", "Vite", "Python"],
  },
  {
    title: "Estudos & Algoritmos",
    description:
      "Repositório de exercícios em C, Java e Python — estrutura de dados, lógica e fundamentos.",
    tags: ["C", "Java", "Python"],
  },
  {
    title: "Integrações Cloud",
    description:
      "Experimentações práticas com AWS Amplify, EC2 e RDS para deploy de aplicações Full Stack.",
    tags: ["AWS", "Amplify", "EC2"],
  },
];

const Projects = () => (
  <section id="projetos" className="py-28 px-6 bg-secondary/30 border-y border-border">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeader index="04" subtitle="Projetos" title="Coisas que estou construindo." />
          <a
            href="https://github.com/Pedro-programas"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            Ver tudo no GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <a
              href="https://github.com/Pedro-programas"
              target="_blank"
              rel="noreferrer"
              className="group block h-full bg-gradient-card border border-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/40 flex items-center justify-center">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent/40 text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;