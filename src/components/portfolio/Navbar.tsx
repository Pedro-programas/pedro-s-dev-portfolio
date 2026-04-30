import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#educacao", label: "Educação" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-foreground">
          Pedro<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative inline-block transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:scale-x-0 after:origin-right after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="hidden sm:inline-flex items-center text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
        >
          Vamos conversar
        </a>
      </nav>
    </header>
  );
};

export default Navbar;