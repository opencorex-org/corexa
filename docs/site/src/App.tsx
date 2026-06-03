import { useState } from "react";
import { Header } from "@docs/components/Header.js";
import { MilestoneRail } from "@docs/components/MilestoneRail.js";
import { ResourceCard } from "@docs/components/ResourceCard.js";
import { SectionHeading } from "@docs/components/SectionHeading.js";
import { buildSiteContent } from "@docs/content.js";

const DEFAULT_REPO_URL = "https://github.com/opencorex-org/corexa";

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const repoUrl = (import.meta.env.VITE_COREXA_REPO_URL ?? DEFAULT_REPO_URL).replace(/\/$/, "");
  const content = buildSiteContent(repoUrl);

  return (
    <div className="site-shell" id="top">
      <Header
        isMenuOpen={isMenuOpen}
        navItems={content.navItems}
        onToggleMenu={() => {
          setIsMenuOpen((current) => !current);
        }}
        repoUrl={repoUrl}
      />

      <main>
        <section className="hero" id="overview">
          <div className="hero__backdrop" />
          <div className="hero__content">
            <div className="hero__copy">
              <span className="hero__eyebrow">Local-first autonomous engineering</span>
              <h1>Corexa documentation for contributors, architects, and operators.</h1>
              <p>
                This GitHub Pages site turns the Corexa repo docs into a polished entry point for
                platform design, open source collaboration, roadmap alignment, and day-to-day
                development work.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#docs-map">
                  Explore the docs map
                </a>
                <a className="button button--secondary" href={repoUrl} rel="noreferrer" target="_blank">
                  Open the repository
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <span className="hero-panel__label">Platform snapshot</span>
              <pre>{`Desktop and CLI
  -> runtime daemon
  -> repository intelligence
  -> vector memory
  -> agent orchestration
  -> plugin and SDK surfaces`}</pre>
              <p>
                Designed to feel like a funded developer-tools platform, not a loose set of notes.
              </p>
            </div>
          </div>

          <div className="metric-strip">
            {content.heroMetrics.map((metric) => (
              <article className="metric-card" key={metric.id}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <SectionHeading
            eyebrow="Platform posture"
            summary="Corexa is structured as a serious software platform: local-first by default, repository-aware by design, and extensible across desktop, runtime, SDK, and plugin surfaces."
            title="A docs experience shaped for real engineering decisions"
          />

          <div className="capability-grid">
            {content.capabilities.map((capability) => (
              <article className="capability-card" key={capability.id}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block section-block--dark" id="architecture">
          <SectionHeading
            eyebrow="Architecture"
            summary="The docs site mirrors the actual platform shape: experience surfaces up front, runtime and intelligence layers in the middle, and operational standards woven through the whole system."
            title="The Corexa platform blueprint"
          />

          <div className="architecture-grid">
            {content.architectureLayers.map((layer) => (
              <article className="architecture-card" key={layer.id}>
                <h3>{layer.title}</h3>
                <ul>
                  {layer.points.map((point) => (
                    <li key={`${layer.id}-${point}`}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="blueprint-grid">
            {content.blueprintPanels.map((panel) => (
              <article className="blueprint-card" key={panel.id}>
                <span>{panel.title}</span>
                <ul>
                  {panel.items.map((item) => (
                    <li key={`${panel.id}-${item}`}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="docs-map">
          <SectionHeading
            eyebrow="Docs map"
            summary="Every major source document in the repository is represented here with a clear category, concise summary, and direct path back to the source material."
            title="Navigate Corexa like an industry-grade open source platform"
          />

          <div className="resource-collections">
            {content.resourceCollections.map((collection) => (
              <section className="resource-collection" key={collection.id}>
                <div className="resource-collection__header">
                  <h3>{collection.title}</h3>
                </div>
                <div className="resource-grid">
                  {collection.items.map((item) => (
                    <ResourceCard item={item} key={item.id} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="section-block section-block--accent" id="roadmap">
          <SectionHeading
            eyebrow="Delivery roadmap"
            summary="Corexa milestones show the path from contributor-ready foundation to a full AI-native engineering runtime with plugins, policy, and enterprise scale."
            title="Milestones tied to platform maturity"
          />
          <MilestoneRail milestones={content.milestones} />
        </section>

        <section className="section-block" id="open-source">
          <SectionHeading
            eyebrow="Open source operating model"
            summary="This project is intentionally set up with contributor guidance, GitHub issue structure, release discipline, security posture, and repository health automation."
            title="Built to be maintained in public"
          />

          <div className="principle-grid">
            {content.principles.map((principle) => (
              <article className="principle-card" key={principle.id}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>

          <div className="ops-panel">
            <div>
              <span className="ops-panel__eyebrow">Docs site operations</span>
              <h3>GitHub Pages is wired from this monorepo.</h3>
              <p>
                The React site lives in <code>docs/site</code>, builds with Vite, and deploys from
                GitHub Actions using the Pages artifact flow.
              </p>
            </div>
            <div className="command-stack">
              <code>pnpm docs:dev</code>
              <code>pnpm docs:build</code>
              <code>pnpm --filter @corexa/docs-site typecheck</code>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Corexa</strong>
          <p>AI Native Development Platform</p>
        </div>
        <div className="site-footer__links">
          <a href={repoUrl} rel="noreferrer" target="_blank">
            Repository
          </a>
          <a href={`${repoUrl}/blob/main/docs/README.md`} rel="noreferrer" target="_blank">
            Docs hub
          </a>
          <a href={`${repoUrl}/blob/main/CONTRIBUTING.md`} rel="noreferrer" target="_blank">
            Contributing
          </a>
        </div>
      </footer>
    </div>
  );
}
