type SectionHeadingProps = {
  eyebrow: string;
  id?: string;
  summary: string;
  title: string;
};

export function SectionHeading({ eyebrow, id, summary, title }: SectionHeadingProps) {
  return (
    <div className="section-heading" id={id}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}
