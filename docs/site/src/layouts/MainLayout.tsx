import type { NavItem } from "@docs/content.js";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
  isMenuOpen: boolean;
  navItems: NavItem[];
  onToggleMenu: () => void;
  repoUrl: string;
};

export function MainLayout({
  children,
  isMenuOpen,
  navItems,
  onToggleMenu,
  repoUrl,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-black" id="top">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3" href="#top">
            <span className="flex size-10 items-center justify-center border border-black bg-black text-sm font-semibold text-white">
              CX
            </span>
            <span className="flex flex-col leading-tight">
              <strong className="text-base font-semibold">Corexa</strong>
              <span className="text-xs text-neutral-500">AI Native Development Platform</span>
            </span>
          </a>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="inline-flex size-10 items-center justify-center border border-neutral-300 text-black transition hover:bg-neutral-100 lg:hidden"
            onClick={onToggleMenu}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>

          <nav
            className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] grid gap-1 border border-neutral-200 bg-white p-2 shadow-xl lg:static lg:flex lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
              isMenuOpen ? "grid" : "hidden lg:flex"
            }`}
          >
            {navItems.map((item) => (
              <a
                className="px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
                href={item.href}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
            <a
              className="inline-flex items-center justify-center gap-2 border border-black bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
              href={repoUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Code2 aria-hidden="true" size={16} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
