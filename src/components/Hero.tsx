import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_METRICS, PROFILE_INFO } from '../data/portfolioData';

const MARQUEE_ITEMS = [
  'Brand Identity Design',
  'Social Media Post Design',
  'Marketing Creatives',
  'Presentation Design',
  'YouTube Thumbnails',
  'Canva Systems',
  'Content Design',
];

export function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[#B83220] tracking-normal [word-spacing:0.04em] mb-4">
                {PROFILE_INFO.roleLine}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight text-[#141413] leading-[1.08] text-balance mb-6">
                Clean, modern visuals that help brands connect with their audience.
              </h1>

              <p className="text-base sm:text-[17px] text-[#575550] leading-relaxed max-w-xl mb-8">
                I&apos;m <strong className="font-semibold text-[#141413]">Davika Bai</strong>, a
                Graphic Designer with 3 years of hands-on experience across 3 marketing agencies
                and design internships—turning business ideas into memorable brand identities and
                engaging social media campaigns.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B83220]"
              >
                Explore Selected Work
              </a>

              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#141413] border border-[#E5E2DC] bg-white rounded-lg hover:border-[#141413] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B83220]"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#E5E2DC] bg-[#EFECE6]">
              {!imgFailed ? (
                <img
                  src={PROFILE_INFO.heroPortrait}
                  alt="Davika Bai working at her graphic design studio desk"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                />
              ) : (
                <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F2EFE9] to-[#E5E0D5]">
                  <span className="font-display text-2xl font-semibold text-[#141413]">
                    {PROFILE_INFO.name}
                  </span>
                  <span className="mt-2 text-sm text-[#575550]">{PROFILE_INFO.roleLine}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Metric Strip */}
        <div className="mt-10 pt-8 border-t border-[#E5E2DC] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#141413] tracking-tight">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm text-[#575550]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Marquee Section Divider */}
      <div
        className="mt-12 border-y border-[#E5E2DC] bg-white py-3 overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex w-max animate-editorial-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 pr-8">
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="flex items-center gap-8 text-xs font-medium tracking-wide text-[#575550] whitespace-nowrap"
                >
                  <span>{item}</span>
                  <span className="text-[#B83220]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
