import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const About = () => (
  <section id="sobre" className="py-28 px-6 max-w-6xl mx-auto">
    <Reveal>
      <SectionHeader index="01" subtitle="Sobre" title="Resolvendo problemas com código." />
    </Reveal>
    <div className="grid md:grid-cols-5 gap-10 items-start">
      <Reveal className="md:col-span-3" delay={100}>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Sou desenvolvedor em formação com perfil <span className="text-foreground">autodidata</span>{" "}
            e foco em <span className="text-foreground">resolução de problemas</span>. Gosto de
            entender sistemas a fundo — do código à infraestrutura — e transformar requisitos em
            soluções enxutas e funcionais.
          </p>
          <p>
            Atualmente cursando o <span className="text-foreground">4º período de Tecnologia da Informação na UFERSA</span>,
            evoluo continuamente em desenvolvimento Full Stack, cloud e fundamentos de software,
            equilibrando estudos formais com projetos práticos.
          </p>
        </div>
      </Reveal>
      <Reveal className="md:col-span-2" delay={200}>
        <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
          <dl className="space-y-5">
            {[
              { k: "Localização", v: "Brasil" },
              { k: "Universidade", v: "UFERSA" },
              { k: "Período", v: "4º — TI" },
              { k: "Inglês", v: "C1 Advanced" },
              { k: "Foco", v: "Full Stack & Cloud" },
            ].map((row) => (
              <div key={row.k} className="flex justify-between items-center text-sm border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <dt className="text-muted-foreground">{row.k}</dt>
                <dd className="font-medium text-foreground">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;