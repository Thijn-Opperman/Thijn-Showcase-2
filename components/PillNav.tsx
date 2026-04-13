"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  baseColor = '#000',
  pillColor = '#4ecb71',
  hoveredPillTextColor = '#000',
  pillTextColor = '#000',
}: {
  logo?: string;
  logoAlt?: string;
  items: { label: string; href: string; ariaLabel?: string }[];
  activeHref?: string;
  className?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  } as React.CSSProperties;

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        {logo && (
          <Link
            className="pill-logo"
            href={items[0]?.href || '#'}
            aria-label="Home"
            role="menuitem"
            onClick={() => setMobileOpen(false)}
          >
            <Image src={logo} alt={logoAlt} width={36} height={36} />
          </Link>
        )}

        <div className="pill-nav-items desktop-only">
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                <Link
                  role="menuitem"
                  href={item.href}
                  className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                  aria-label={item.ariaLabel || item.label}
                >
                  <span className="pill-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="mobile-menu-button mobile-only"
          aria-expanded={mobileOpen}
          aria-controls="pill-mobile-menu"
          aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div
        id="pill-mobile-menu"
        className={`mobile-menu-popover mobile-only${mobileOpen ? ' is-open' : ''}`}
        role="menu"
        aria-hidden={!mobileOpen}
      >
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || `m-${i}`} role="none">
              <Link
                role="menuitem"
                href={item.href}
                className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                aria-label={item.ariaLabel || item.label}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
