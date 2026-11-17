import { useState } from 'react';
import { Plus, Trash2, ArrowUpRight } from 'lucide-react';
import {
  filterPortfolioItems,
  type FilterCategory,
  type PortfolioItem,
} from '../utils/portfolioLogic';

interface PortfolioSectionProps {
  items: PortfolioItem[];
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenUploadModal: (presetCategory?: PortfolioItem['category']) => void;
  onDeleteCustomItem: (id: string) => void;
}

const CATEGORIES: FilterCategory[] = [
  'All',
  'Brand Identity',
  'Social Media',
  'Marketing & Video',
  'Certificates',
];

export function PortfolioSection({
  items,
  selectedCategory,
  onSelectCategory,
  onOpenLightbox,
  onOpenUploadModal,
  onDeleteCustomItem,
}: PortfolioSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const filteredItems = filterPortfolioItems(items, selectedCategory);

  return (
    <section id="work" className="py-16 md:py-20 border-b border-[#E5E2DC]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header + Upload Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs text-[#B83220] mb-2">01. Selected Archive</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] text-balance">
              Portfolio &amp; Internship Certificates
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#575550] max-w-2xl">
              Curated graphic design, social media, and brand identity showcases—plus an archive
              where you can upload your own design files and internship certificates anytime.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onOpenUploadModal(
                selectedCategory === 'Certificates' ? 'Certificates' : 'Brand Identity',
              )
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#B83220] rounded-lg hover:bg-[#9B2819] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413]"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span>Upload Work / Certificate</span>
          </button>
        </div>

        {/* Interactive Category Filter Controls */}
        <div
          role="group"
          aria-label="Filter portfolio items by category"
          className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EFECE6] rounded-xl w-fit mb-10"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectCategory(category)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B83220] ${
                  isActive
                    ? 'bg-white text-[#141413] shadow-sm'
                    : 'text-[#575550] hover:text-[#141413]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial / Bento Project Grid */}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-[#E5E2DC] bg-white p-12 text-center">
            <p className="font-display text-xl font-medium text-[#141413]">
              No items in {selectedCategory} yet
            </p>
            <p className="mt-2 text-sm text-[#575550]">
              Upload a graphic design showcase or internship certificate image to populate this
              section.
            </p>
            <button
              type="button"
              onClick={() =>
                onOpenUploadModal(
                  selectedCategory === 'All' ? 'Brand Identity' : selectedCategory,
                )
              }
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span>Add First Item</span>
            </button>
          </div>
        ) : (
          <div
            data-testid="portfolio-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
          >
            {filteredItems.map((item, idx) => {
              const isHeroTile = idx === 0 && filteredItems.length >= 2;
              const colSpanClass = isHeroTile ? 'lg:col-span-7' : 'lg:col-span-5';
              const balancedSpanClass =
                idx >= 2
                  ? filteredItems.length % 2 === 1 && idx === filteredItems.length - 1
                    ? 'lg:col-span-12'
                    : 'lg:col-span-6'
                  : colSpanClass;

              const hasFailed = failedImages[item.id];

              return (
                <article
                  key={item.id}
                  data-testid="portfolio-card"
                  className={`${balancedSpanClass} group rounded-2xl border border-[#E5E2DC] bg-white overflow-hidden flex flex-col justify-between transition-colors hover:border-[#141413]/40`}
                >
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(item)}
                    aria-label={`Inspect ${item.title}`}
                    className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#B83220]"
                  >
                    <div className="relative h-64 sm:h-72 lg:h-[340px] w-full overflow-hidden bg-[#EFECE6]">
                      {!hasFailed ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                          }
                          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F2EFE9] to-[#E5E0D5]">
                          <span className="font-display text-lg font-medium text-[#141413]">
                            {item.title}
                          </span>
                          <span className="mt-1 text-xs text-[#575550]">{item.category}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      {/* Zero-pill unboxed metadata line */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#575550] mb-2">
                        <span className="font-medium text-[#B83220]">{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.clientOrIssuer}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{item.year}</span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold text-[#141413] tracking-tight group-hover:text-[#B83220] transition-colors">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          className="w-5 h-5 text-[#575550] shrink-0 mt-0.5 group-hover:text-[#B83220] transition-colors"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="mt-2 text-sm text-[#575550] leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </button>

                  {/* Footer line for deliverables + optional actions */}
                  <div className="px-6 pb-5 pt-3 border-t border-[#F0EDE6] flex items-center justify-between gap-4">
                    <span className="text-xs text-[#575550] truncate">{item.deliverables}</span>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.isPendingUpload && (
                        <button
                          type="button"
                          onClick={() => onOpenUploadModal('Certificates')}
                          className="text-xs font-medium text-[#B83220] hover:underline whitespace-nowrap"
                        >
                          Add Certificate Image
                        </button>
                      )}
                      {item.isCustom && (
                        <button
                          type="button"
                          onClick={() => onDeleteCustomItem(item.id)}
                          aria-label={`Remove ${item.title}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#575550] hover:text-[#B83220] transition-colors whitespace-nowrap"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Remove</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
