import type { ResourceCard as ResourceCardData } from "@docs/content.js";
import { ArrowUpRight, FileText } from "lucide-react";

type ResourceCardProps = {
  item: ResourceCardData;
};

export function ResourceCard({ item }: ResourceCardProps) {
  return (
    <article className="border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-950">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          <FileText aria-hidden="true" size={14} />
          {item.category}
        </span>
        <code className="border border-neutral-200 px-2 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          {item.path}
        </code>
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
      <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{item.summary}</p>
      <a
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
        href={item.href}
        rel="noreferrer"
        target="_blank"
      >
        Open source doc
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </article>
  );
}
