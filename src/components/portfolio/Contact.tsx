import { Download, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Contact = () => (
  <section id="contato" className="py-28 px-6 max-w-6xl mx-auto">
    <Reveal>
      <SectionHeader index="05" subtitle="Contato" title="Vamos construir algo juntos." />
    </Reveal>
    <Reveal delay={100}>
      <div className="bg-gradient-card border border-border rounded-3xl p-8 sm:p-12 shadow-soft">
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          Aberto a oportunidades, estágios e colaborações em projetos Full Stack. Sinta-se à
          vontade para entrar em contato.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          <a
            href="mailto:pedroxphp@gmail.com"
            className="group flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/60 transition-all duration-300 hover:bg-accent/20"
          >
            <Mail className="w-5 h-5 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="font-medium truncate">pedroxphp@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-henrique-pereira-de-sousa/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/60 transition-all duration-300 hover:bg-accent/20"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="font-medium truncate">/in/pedro-henrique</p>
            </div>
          </a>
          <a
            href="https://github.com/Pedro-programas"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/60 transition-all duration-300 hover:bg-accent/20"
          >
            <Github className="w-5 h-5 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="font-medium truncate">Pedro-programas</p>
            </div>
          </a>
          <a
            href="/curriculo.pdf"
            download
            className="group flex items-center gap-4 p-5 rounded-xl border border-primary/40 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
          >
            <Download className="w-5 h-5 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Currículo</p>
              <p className="font-medium truncate">Baixar PDF</p>
            </div>
          </a>
        </div>
        <a
          href="mailto:pedroxphp@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:scale-[1.03] transition-transform duration-300"
        >
          <Mail className="w-4 h-4" />
          Enviar mensagem
        </a>
      </div>
    </Reveal>
    <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground flex flex-col sm:flex-row justify-between gap-3">
      <p>© {new Date().getFullYear()} Pedro Henrique Pereira de Sousa.</p>
      <p className="font-mono">Built with React + Vite · Deployed on AWS Amplify</p>
    </footer>
  </section>
);

export default Contact;