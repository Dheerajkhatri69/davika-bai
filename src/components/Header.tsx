import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#connect' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E5E2DC]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B83220]"
        >
          {PROFILE_INFO.name}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#575550]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#141413] hover:underline underline-offset-4 decoration-[#B83220] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B83220]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA (+ mobile menu button on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B83220]"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E5E2DC] text-[#141413] hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B83220]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#E5E2DC] bg-[#FAF9F6] px-6 py-4 flex flex-col gap-3"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-[#141413] hover:text-[#B83220] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileOpen(false)}
            className="mt-1 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors whitespace-nowrap"
          >
            Let&apos;s Connect
          </a>
        </nav>
      )}
    </header>
  );
}
