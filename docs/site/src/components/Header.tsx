import type { NavItem } from "@docs/content.js";
import { Code2 } from "lucide-react";

type HeaderProps = {
  isMenuOpen: boolean;
  navItems: NavItem[];
  onToggleMenu: () => void;
  repoUrl: string;
};

export function Header({ isMenuOpen, navItems, onToggleMenu, repoUrl }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-mark" href="#top">
          <span className="brand-mark__glyph">CX</span>
          <span className="brand-mark__meta">
            <strong>Corexa</strong>
            <span>AI Native Development Platform</span>
          </span>
        </a>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          className="nav-toggle"
          onClick={onToggleMenu}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}>
          {navItems.map((item) => (
            <a className="site-nav__link" href={item.href} key={item.id}>
              {item.label}
            </a>
          ))}
          <a className="site-nav__cta" href={repoUrl} rel="noreferrer" target="_blank">
            <Code2 />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
