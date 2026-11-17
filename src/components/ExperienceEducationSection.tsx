import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '../data/portfolioData';

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-[#E5E2DC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Professional Experience */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs text-[#B83220] mb-2">04. Track Record</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#141413] mb-8">
              Professional Experience
            </h2>

            {EXPERIENCE_ITEMS.map((exp) => (
              <div
                key={exp.role}
                className="rounded-2xl border border-[#E5E2DC] bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-[#F0EDE6]">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#141413]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#575550] mt-0.5">{exp.organization}</p>
                  </div>
                  <span className="font-mono tabular-nums text-xs font-medium text-[#B83220]">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#575550] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-xs text-[#B83220] mt-1.5 shrink-0"
                      >
                        —
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs text-[#B83220] mb-2">05. Academic Foundation</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#141413] mb-8">
              Education
            </h2>

            <div className="divide-y divide-[#E5E2DC] border-y border-[#E5E2DC]">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.institution} className="py-5 first:pt-5 last:pb-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-[#B83220]">{edu.level}</span>
                    <span className="font-mono tabular-nums text-xs text-[#575550]">
                      {edu.timeline}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#141413]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[#575550] mt-0.5">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
