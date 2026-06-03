import type { ResourceCard as ResourceCardData } from "@docs/content.js";

type ResourceCardProps = {
  item: ResourceCardData;
};

export function ResourceCard({ item }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-card__meta">
        <span>{item.category}</span>
        <code>{item.path}</code>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <a className="resource-card__link" href={item.href} rel="noreferrer" target="_blank">
        Open source doc
      </a>
    </article>
  );
}
