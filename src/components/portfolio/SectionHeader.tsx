interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ index, title, subtitle }: Props) => (
  <div className="mb-14 max-w-3xl">
    <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
      {index} — {subtitle ?? ""}
    </p>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
      {title}
    </h2>
  </div>
);

export default SectionHeader;