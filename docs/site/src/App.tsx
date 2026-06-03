import { MilestoneRail } from "@docs/components/MilestoneRail.js";
import { ResourceCard } from "@docs/components/ResourceCard.js";
import { SectionHeading } from "@docs/components/SectionHeading.js";
import { buildSiteContent } from "@docs/content.js";
import { DocsLayout } from "@docs/layouts/DocsLayout.js";
import { MainLayout } from "@docs/layouts/MainLayout.js";
import { ArrowRight, Cpu, Layers3, ShieldCheck, Terminal } from "lucide-react";
import { useState } from "react";

const DEFAULT_REPO_URL = "https://github.com/opencorex-org/corexa";

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDocsDark, setIsDocsDark] = useState(false);
  const repoUrl = (import.meta.env.VITE_COREXA_REPO_URL ?? DEFAULT_REPO_URL).replace(/\/$/, "");
  const content = buildSiteContent(repoUrl);

  return (
    <MainLayout
      isMenuOpen={isMenuOpen}
      navItems={content.navItems}
      onToggleMenu={() => {
        setIsMenuOpen((current) => !current);
      }}
      repoUrl={repoUrl}
    >
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 border border-neutral-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-700">
            <Terminal aria-hidden="true" size={14} />
            Local-first autonomous engineering
          </span>
          <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-normal text-black sm:text-6xl lg:text-7xl">
            Corexa documentation for builders and operators.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            A clean documentation surface for platform design, open source collaboration, roadmap
            alignment, and day-to-day development work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              href="#docs-map"
            >
              Explore docs
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              className="inline-flex items-center gap-2 border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
              href={repoUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open repository
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="border border-black bg-white p-5">
          <div className="border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-sm font-semibold uppercase tracking-wide">
                Platform snapshot
              </span>
              <Cpu aria-hidden="true" size={20} />
            </div>
            <pre className="overflow-auto bg-black p-4 text-sm leading-7 text-white">{`Desktop and CLI
  -> runtime daemon
  -> repository intelligence
  -> vector memory
  -> agent orchestration
  -> plugin and SDK surfaces`}</pre>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Designed to feel like a focused developer-tools platform, not a loose set of notes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-4">
          {content.heroMetrics.map((metric) => (
            <article className="border border-neutral-200 bg-white p-4" key={metric.id}>
              <span className="text-xs text-neutral-500">{metric.label}</span>
              <strong className="mt-2 block text-base font-semibold text-black">
                {metric.value}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="overview">
        <SectionHeading
          eyebrow="Platform posture"
          summary="Corexa is structured as a serious software platform: local-first by default, repository-aware by design, and extensible across desktop, runtime, SDK, and plugin surfaces."
          title="A docs experience shaped for engineering decisions"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {content.capabilities.map((capability) => (
            <article className="border border-neutral-200 bg-white p-5" key={capability.id}>
              <ShieldCheck aria-hidden="true" className="mb-5" size={22} />
              <h3 className="text-lg font-semibold">{capability.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50" id="architecture">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architecture"
            summary="The docs site mirrors the platform shape: experience surfaces up front, runtime and intelligence layers in the middle, and operational standards woven through the system."
            title="The Corexa platform blueprint"
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.architectureLayers.map((layer) => (
              <article className="border border-neutral-200 bg-white p-5" key={layer.id}>
                <Layers3 aria-hidden="true" className="mb-5" size={22} />
                <h3 className="text-lg font-semibold">{layer.title}</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-neutral-600">
                  {layer.points.map((point) => (
                    <li className="border-l border-black pl-3" key={`${layer.id}-${point}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {content.blueprintPanels.map((panel) => (
              <article className="border border-neutral-200 bg-white p-5" key={panel.id}>
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {panel.title}
                </span>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-neutral-600">
                  {panel.items.map((item) => (
                    <li key={`${panel.id}-${item}`}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DocsLayout
        isDark={isDocsDark}
        navItems={content.navItems}
        onToggleTheme={() => {
          setIsDocsDark((current) => !current);
        }}
      >
        <SectionHeading
          eyebrow="Docs layout"
          summary="Every major source document in the repository is represented with a category, concise summary, and direct path back to the source material."
          title="Navigate Corexa through a themeable docs shell"
        />

        <div className="mt-8 grid gap-8">
          {content.resourceCollections.map((collection) => (
            <section key={collection.id}>
              <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-700">
                <h3 className="text-xl font-semibold">{collection.title}</h3>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                {collection.items.map((item) => (
                  <ResourceCard item={item} key={item.id} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </DocsLayout>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="roadmap">
        <SectionHeading
          eyebrow="Delivery roadmap"
          summary="Corexa milestones show the path from contributor-ready foundation to a full AI-native engineering runtime with plugins, policy, and enterprise scale."
          title="Milestones tied to platform maturity"
        />
        <MilestoneRail milestones={content.milestones} />
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50" id="open-source">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open source operating model"
            summary="This project is set up with contributor guidance, GitHub issue structure, release discipline, security posture, and repository health automation."
            title="Built to be maintained in public"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.principles.map((principle) => (
              <article className="border border-neutral-200 bg-white p-5" key={principle.id}>
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{principle.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 border border-black bg-white p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Docs site operations
              </span>
              <h3 className="mt-2 text-xl font-semibold">
                GitHub Pages is wired from this monorepo.
              </h3>
              <p className="mt-3 leading-7 text-neutral-600">
                The React site lives in <code>docs/site</code>, builds with Vite, and deploys from
                GitHub Actions using the Pages artifact flow.
              </p>
            </div>
            <div className="grid gap-2">
              <code className="border border-neutral-300 px-3 py-2 text-sm">pnpm docs:dev</code>
              <code className="border border-neutral-300 px-3 py-2 text-sm">pnpm docs:build</code>
              <code className="border border-neutral-300 px-3 py-2 text-sm">
                pnpm --filter @corexa/docs-site typecheck
              </code>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-neutral-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <strong className="text-black">Corexa</strong>
          <p className="mt-1 text-sm">AI Native Development Platform</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a className="hover:text-black" href={repoUrl} rel="noreferrer" target="_blank">
            Repository
          </a>
          <a
            className="hover:text-black"
            href={`${repoUrl}/blob/main/docs/README.md`}
            rel="noreferrer"
            target="_blank"
          >
            Docs hub
          </a>
          <a
            className="hover:text-black"
            href={`${repoUrl}/blob/main/CONTRIBUTING.md`}
            rel="noreferrer"
            target="_blank"
          >
            Contributing
          </a>
        </div>
      </footer>
    </MainLayout>
  );
}
