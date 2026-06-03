import type { Milestone } from "@docs/content.js";

type MilestoneRailProps = {
  milestones: Milestone[];
};

export function MilestoneRail({ milestones }: MilestoneRailProps) {
  return (
    <div className="milestone-rail">
      {milestones.map((milestone) => (
        <article className="milestone-card" key={milestone.id}>
          <span className="milestone-card__stage">{milestone.stage}</span>
          <h3>{milestone.title}</h3>
          <p>{milestone.outcome}</p>
        </article>
      ))}
    </div>
  );
}
