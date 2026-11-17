import { ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-20 border-b border-[#E5E2DC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs text-[#B83220] mb-2">03. Capabilities</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] text-balance">
              Services Built for Growing Brands
            </h2>
          </div>
          <p className="text-sm text-[#575550] max-w-md">
            Select any service below to pre-fill an inquiry and start collaborating on your next
            campaign or visual system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_LIST.map((service) => (
            <button
              key={service.index}
              type="button"
              onClick={() => onSelectService(service.title)}
              className="group text-left rounded-2xl border border-[#E5E2DC] bg-white p-6 flex flex-col justify-between hover:border-[#141413] transition-colors focus-visible:outline-2 focus-visible:outline-[#B83220]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono tabular-nums text-xs text-[#B83220]">
                    {service.index}.
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#575550] group-hover:text-[#B83220] transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#141413] tracking-tight group-hover:text-[#B83220] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#575550] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <span className="mt-6 text-xs font-medium text-[#141413] group-hover:underline underline-offset-4">
                Inquire about this service
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
