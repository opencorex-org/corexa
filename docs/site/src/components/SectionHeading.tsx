type SectionHeadingProps = {
  eyebrow: string;
  id?: string;
  summary: string;
  title: string;
};

export function SectionHeading({ eyebrow, id, summary, title }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl" id={id}>
      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-black dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">{summary}</p>
    </div>
  );
}
