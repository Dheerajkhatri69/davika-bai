import { INTERESTS_LIST, PROFILE_INFO, SKILLS_LIST } from '../data/portfolioData';

export function AboutSkillsSection() {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-[#E5E2DC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: About Me & Career Goals */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="font-mono text-xs text-[#B83220] mb-2">02. About &amp; Vision</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] text-balance">
                Designed with clarity, curiosity, and purpose.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#575550] leading-relaxed">
              {PROFILE_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Career Goals Surface (Clean hairline border, zero left-accent bar) */}
            <div className="rounded-2xl border border-[#E5E2DC] bg-white p-6">
              <p className="font-mono text-xs text-[#B83220] mb-2">Career Goal</p>
              <p className="text-sm sm:text-base text-[#141413] leading-relaxed font-medium">
                {PROFILE_INFO.careerGoal}
              </p>
            </div>
          </div>

          {/* Right Column: Skills & Interests (Zero-Pill Editorial Index) */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-3 mb-4">
                <h3 className="font-display text-xl font-semibold text-[#141413]">Core Skills</h3>
                <span className="font-mono tabular-nums text-xs text-[#575550]">
                  {SKILLS_LIST.length} Disciplines
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#F0EDE6]">
                {SKILLS_LIST.map((skill, index) => (
                  <li
                    key={skill}
                    className="py-3 pr-4 border-b border-[#F0EDE6] flex items-center gap-3 text-sm text-[#141413]"
                  >
                    <span className="font-mono tabular-nums text-xs text-[#575550] w-6 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-3 mb-4">
                <h3 className="font-display text-xl font-semibold text-[#141413]">
                  Interests &amp; Exploration
                </h3>
                <span className="font-mono tabular-nums text-xs text-[#575550]">
                  Design &amp; Science
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#575550] leading-relaxed">
                {INTERESTS_LIST.map((interest, idx) => (
                  <span key={interest}>
                    <span className="text-[#141413] font-medium">{interest}</span>
                    {idx < INTERESTS_LIST.length - 1 && (
                      <span aria-hidden="true" className="mx-2.5 text-[#B83220]">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
