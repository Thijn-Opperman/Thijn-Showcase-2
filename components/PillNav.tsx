"use client"

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

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:');

  const isRouterLink = (href: string) => href && !isExternalLink(href);

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        {logo && (
          <Link
            className="pill-logo"
            href={items[0]?.href || '#'}
            aria-label="Home"
            role="menuitem"
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
      </nav>
    </div>
  );
};

export default PillNav;
