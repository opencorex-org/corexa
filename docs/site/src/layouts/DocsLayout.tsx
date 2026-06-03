import type { NavItem } from "@docs/content.js";
import { BookOpen, Moon, PanelLeft, Search, Sun } from "lucide-react";
import type { ReactNode } from "react";

type DocsLayoutProps = {
  children: ReactNode;
  isDark: boolean;
  navItems: NavItem[];
  onToggleTheme: () => void;
};

export function DocsLayout({ children, isDark, navItems, onToggleTheme }: DocsLayoutProps) {
  return (
    <section
      className={`${isDark ? "dark" : ""} border-y ${
        isDark
          ? "border-neutral-700 bg-black text-white"
          : "border-neutral-200 bg-neutral-50 text-black"
      }`}
      id="docs-map"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
          <div
            className={`border p-4 ${
              isDark ? "border-neutral-700 bg-neutral-950" : "border-neutral-200 bg-white"
            }`}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <BookOpen aria-hidden="true" size={18} />
                <h2 className="text-sm font-semibold uppercase tracking-wide">Docs</h2>
              </div>
              <button
                aria-label={
                  isDark ? "Switch docs layout to light theme" : "Switch docs layout to dark theme"
                }
                className={`inline-flex size-9 items-center justify-center border transition ${
                  isDark
                    ? "border-neutral-600 hover:bg-neutral-900"
                    : "border-neutral-300 hover:bg-neutral-100"
                }`}
                onClick={onToggleTheme}
                type="button"
              >
                {isDark ? (
                  <Sun aria-hidden="true" size={17} />
                ) : (
                  <Moon aria-hidden="true" size={17} />
                )}
              </button>
            </div>

            <div
              className={`mb-4 flex items-center gap-2 border px-3 py-2 ${
                isDark
                  ? "border-neutral-700 text-neutral-400"
                  : "border-neutral-200 text-neutral-500"
              }`}
            >
              <Search aria-hidden="true" size={16} />
              <span className="text-sm">Search docs</span>
            </div>

            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a
                  className={`flex items-center gap-2 px-3 py-2 text-sm transition ${
                    isDark
                      ? "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                  }`}
                  href={item.href}
                  key={item.id}
                >
                  <PanelLeft aria-hidden="true" size={15} />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div>{children}</div>
      </div>
    </section>
  );
}
