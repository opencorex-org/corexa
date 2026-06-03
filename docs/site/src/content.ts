export type NavItem = {
  href: string;
  id: string;
  label: string;
};

export type HeroMetric = {
  id: string;
  label: string;
  value: string;
};

export type CapabilityCard = {
  description: string;
  id: string;
  title: string;
};

export type ArchitectureLayer = {
  id: string;
  points: string[];
  title: string;
};

export type BlueprintPanel = {
  id: string;
  items: string[];
  title: string;
};

export type ResourceCard = {
  category: string;
  href: string;
  id: string;
  path: string;
  summary: string;
  title: string;
};

export type ResourceCollection = {
  id: string;
  items: ResourceCard[];
  title: string;
};

export type Milestone = {
  id: string;
  outcome: string;
  stage: string;
  title: string;
};

export type OperatingPrinciple = {
  description: string;
  id: string;
  title: string;
};

export type SiteContent = {
  architectureLayers: ArchitectureLayer[];
  blueprintPanels: BlueprintPanel[];
  capabilities: CapabilityCard[];
  heroMetrics: HeroMetric[];
  milestones: Milestone[];
  navItems: NavItem[];
  principles: OperatingPrinciple[];
  resourceCollections: ResourceCollection[];
};

function githubHref(repoUrl: string, relativePath: string) {
  return `${repoUrl}/blob/main/${relativePath}`;
}

export function buildSiteContent(repoUrl: string): SiteContent {
  return {
    architectureLayers: [
      {
        id: "experience",
        points: [
          "Electron desktop shell with repository-first workflows, terminal context, and approvals.",
          "CLI commands for chat, scanning, runtime control, and agent execution.",
          "React-based documentation and onboarding surfaces for contributors and enterprise evaluators.",
        ],
        title: "Experience Layer",
      },
      {
        id: "runtime",
        points: [
          "Go runtime daemon exposes health, chat, workspace, indexing, and orchestration interfaces.",
          "Provider adapters keep inference local-first while allowing future cloud and hybrid expansion.",
          "Security controls, sandboxing, and permissions form the operational trust boundary.",
        ],
        title: "Runtime Layer",
      },
      {
        id: "intelligence",
        points: [
          "Repository intelligence combines Tree-sitter parsing, chunking, symbol extraction, and retrieval.",
          "Vector memory and semantic state help agents stay grounded across long-running engineering loops.",
          "Shared contracts keep agents, SDKs, desktop, and plugins aligned on the same platform model.",
        ],
        title: "Intelligence Layer",
      },
    ],
    blueprintPanels: [
      {
        id: "apps",
        items: [
          "apps/desktop for the IDE shell and runtime bridge",
          "apps/cli for automation-oriented developer workflows",
          "docs/site for the GitHub Pages documentation experience",
        ],
        title: "Interfaces",
      },
      {
        id: "platform",
        items: [
          "packages/shared for contracts, events, and cross-surface types",
          "packages/runtime-client and packages/sdk for app-facing integrations",
          "packages/repo-intelligence, memory-core, workspace-core, and plugin-kit for platform capabilities",
        ],
        title: "Platform Packages",
      },
      {
        id: "execution",
        items: [
          "runtime/daemon for the local-first execution engine",
          "agents/ for planner, coder, reviewer, debugger, architect, and orchestrator roles",
          "native/ and infrastructure/ for performance modules and future deployment foundations",
        ],
        title: "Execution Core",
      },
    ],
    capabilities: [
      {
        description:
          "Built for developers who want private, local-first execution without reducing the experience to a chat box.",
        id: "local-first",
        title: "Local-First Engineering",
      },
      {
        description:
          "Designed around repositories, terminals, diffs, runtime health, and approval-aware actions instead of generic prompting.",
        id: "repo-native",
        title: "Repository-Native Workflows",
      },
      {
        description:
          "Prepared for multi-agent orchestration, plugin ecosystems, enterprise governance, and hybrid inference expansion.",
        id: "platform-scale",
        title: "Platform-Scale Extensibility",
      },
    ],
    heroMetrics: [
      { id: "metric-runtime", label: "Primary runtime", value: "Go daemon + local providers" },
      { id: "metric-desktop", label: "Core surfaces", value: "Desktop, CLI, SDK, plugins" },
      { id: "metric-stack", label: "Workspace stack", value: "pnpm + Turbo + React + Rust" },
      {
        id: "metric-ops",
        label: "Open source posture",
        value: "Docs, issues, CI, Pages, Dependabot",
      },
    ],
    milestones: [
      {
        id: "m0",
        outcome:
          "Contributor-ready repository operations, project documentation, governance, issue intake, and baseline automation.",
        stage: "Milestone 0",
        title: "Open Source Foundation",
      },
      {
        id: "m1",
        outcome:
          "Reliable runtime APIs for health, model inventory, workspace metadata, and streaming chat contracts.",
        stage: "Milestone 1",
        title: "Local Runtime Alpha",
      },
      {
        id: "m2",
        outcome:
          "Repository indexing, semantic retrieval, syntax-aware chunking, symbol extraction, and reusable embeddings.",
        stage: "Milestone 2",
        title: "Repository Intelligence Alpha",
      },
      {
        id: "m3",
        outcome:
          "A production-shaped desktop shell with coherent chat, workspace navigation, terminal visibility, and runtime diagnostics.",
        stage: "Milestone 3",
        title: "Desktop Workflow Beta",
      },
      {
        id: "m4",
        outcome:
          "Role-based agent orchestration with planner, coder, reviewer, debugger, and architect execution loops.",
        stage: "Milestone 4",
        title: "Agent Workflow Beta",
      },
      {
        id: "m5",
        outcome:
          "Stable plugin contracts, stronger permission systems, and enterprise-ready extension and deployment boundaries.",
        stage: "Milestone 5",
        title: "Plugin and Enterprise Readiness",
      },
    ],
    navItems: [
      { href: "#overview", id: "overview", label: "Overview" },
      { href: "#architecture", id: "architecture", label: "Architecture" },
      { href: "#docs-map", id: "docs-map", label: "Docs Map" },
      { href: "#roadmap", id: "roadmap", label: "Roadmap" },
      { href: "#open-source", id: "open-source", label: "Open Source" },
    ],
    principles: [
      {
        description:
          "Every surface should preserve developer control, local visibility, and explicit approval boundaries.",
        id: "control",
        title: "Developer Control",
      },
      {
        description:
          "Contracts, package boundaries, and docs should make the monorepo legible to new contributors without tribal knowledge.",
        id: "clarity",
        title: "Architectural Clarity",
      },
      {
        description:
          "Security, privacy, CI, release discipline, and dependency hygiene are treated as product features, not afterthoughts.",
        id: "operations",
        title: "Operational Maturity",
      },
    ],
    resourceCollections: [
      {
        id: "architecture-collection",
        items: [
          {
            category: "Architecture",
            href: githubHref(repoUrl, "docs/architecture/corexa-platform-architecture.md"),
            id: "platform-architecture",
            path: "docs/architecture/corexa-platform-architecture.md",
            summary:
              "The complete platform model for runtime flow, orchestration, memory, repository intelligence, and desktop interaction.",
            title: "Platform Architecture",
          },
          {
            category: "Architecture",
            href: githubHref(repoUrl, "docs/architecture/monorepo-structure.md"),
            id: "monorepo-structure",
            path: "docs/architecture/monorepo-structure.md",
            summary:
              "A package-by-package map of the Corexa monorepo, including apps, agents, runtime modules, docs, and infrastructure.",
            title: "Monorepo Structure",
          },
          {
            category: "Architecture",
            href: githubHref(repoUrl, "docs/architecture/README.md"),
            id: "architecture-index",
            path: "docs/architecture/README.md",
            summary:
              "Entry point for architecture readers who need the current state of platform structure, boundaries, and responsibilities.",
            title: "Architecture Index",
          },
        ],
        title: "Architecture Library",
      },
      {
        id: "strategy-collection",
        items: [
          {
            category: "Product",
            href: githubHref(repoUrl, "docs/product/vision.md"),
            id: "vision",
            path: "docs/product/vision.md",
            summary:
              "The long-range product direction for turning Corexa into an AI-native development platform and execution layer.",
            title: "Vision",
          },
          {
            category: "Product",
            href: githubHref(repoUrl, "docs/product/roadmap.md"),
            id: "roadmap",
            path: "docs/product/roadmap.md",
            summary:
              "A staged roadmap across local runtime, repository intelligence, agent workflows, and enterprise readiness.",
            title: "Roadmap",
          },
          {
            category: "Project",
            href: githubHref(repoUrl, "docs/project/execution-plan.md"),
            id: "execution-plan",
            path: "docs/project/execution-plan.md",
            summary:
              "Cross-functional workstreams covering platform foundation, inference, docs, agents, and open source operations.",
            title: "Execution Plan",
          },
          {
            category: "Project",
            href: githubHref(repoUrl, "docs/project/milestones.md"),
            id: "milestones",
            path: "docs/project/milestones.md",
            summary:
              "Milestone-level outcomes and success signals used to guide how Corexa should sequence product delivery.",
            title: "Milestones",
          },
        ],
        title: "Strategy and Delivery",
      },
      {
        id: "operations-collection",
        items: [
          {
            category: "Development",
            href: githubHref(repoUrl, "docs/development/local-development.md"),
            id: "local-development",
            path: "docs/development/local-development.md",
            summary:
              "Developer environment setup, local workflows, runtime validation, and day-to-day contribution expectations.",
            title: "Local Development",
          },
          {
            category: "Development",
            href: githubHref(repoUrl, "docs/development/testing-and-release.md"),
            id: "testing-and-release",
            path: "docs/development/testing-and-release.md",
            summary:
              "Quality gates, CI expectations, release discipline, and dependency hygiene for maintainers and contributors.",
            title: "Testing and Release",
          },
          {
            category: "Open Source",
            href: githubHref(repoUrl, "CONTRIBUTING.md"),
            id: "contributing",
            path: "CONTRIBUTING.md",
            summary:
              "Contribution workflow, review standards, validation expectations, and the norms for healthy collaboration.",
            title: "Contributing Guide",
          },
          {
            category: "Open Source",
            href: githubHref(repoUrl, "docs/project/github-issues.md"),
            id: "github-issues",
            path: "docs/project/github-issues.md",
            summary:
              "Issue taxonomy, label strategy, milestone mapping, and a starter backlog for operating Corexa on GitHub.",
            title: "GitHub Issues Model",
          },
          {
            category: "Open Source",
            href: githubHref(repoUrl, "GOVERNANCE.md"),
            id: "governance",
            path: "GOVERNANCE.md",
            summary:
              "Maintainer model, decision-making, and expectations for evolving Corexa as a serious long-term open source project.",
            title: "Governance",
          },
          {
            category: "Open Source",
            href: githubHref(repoUrl, "SECURITY.md"),
            id: "security",
            path: "SECURITY.md",
            summary:
              "Security posture, disclosure workflow, and the baseline trust model for contributors and enterprise evaluators.",
            title: "Security Policy",
          },
        ],
        title: "Engineering Operations",
      },
    ],
  };
}
