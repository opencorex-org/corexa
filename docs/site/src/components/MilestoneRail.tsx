import type { Milestone } from "@docs/content.js";
import { CircleDot } from "lucide-react";

type MilestoneRailProps = {
  milestones: Milestone[];
};

export function MilestoneRail({ milestones }: MilestoneRailProps) {
  return (
    <div className="mt-8 grid gap-4">
      {milestones.map((milestone) => (
        <article
          className="grid gap-4 border border-neutral-200 bg-white p-5 md:grid-cols-[12rem_minmax(0,1fr)]"
          key={milestone.id}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
            <CircleDot aria-hidden="true" size={15} />
            {milestone.stage}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-black">{milestone.title}</h3>
            <p className="mt-2 leading-7 text-neutral-600">{milestone.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
