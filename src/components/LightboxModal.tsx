import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '../utils/portfolioLogic';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelectItem: (item: PortfolioItem) => void;
}

export function LightboxModal({ item, items, onClose, onSelectItem }: LightboxModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && items.length > 1) {
        const currentIndex = items.findIndex((entry) => entry.id === item.id);
        const nextItem = items[(currentIndex + 1) % items.length];
        if (nextItem) onSelectItem(nextItem);
      } else if (event.key === 'ArrowLeft' && items.length > 1) {
        const currentIndex = items.findIndex((entry) => entry.id === item.id);
        const prevItem = items[(currentIndex - 1 + items.length) % items.length];
        if (prevItem) onSelectItem(prevItem);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onSelectItem]);

  if (!item) return null;

  const currentIndex = items.findIndex((entry) => entry.id === item.id);
  const handlePrev = () => {
    if (items.length <= 1) return;
    onSelectItem(items[(currentIndex - 1 + items.length) % items.length]);
  };
  const handleNext = () => {
    if (items.length <= 1) return;
    onSelectItem(items[(currentIndex + 1) % items.length]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 bg-[#141413]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
    >
      <div className="relative w-full max-w-5xl bg-[#FAF9F6] rounded-2xl border border-[#E5E2DC] overflow-hidden shadow-2xl max-h-[92vh] flex flex-col lg:flex-row">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg bg-[#141413] text-white flex items-center justify-center hover:bg-[#B83220] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Image Pane */}
        <div className="lg:w-7/12 bg-[#EFECE6] relative flex items-center justify-center p-4 sm:p-6 min-h-[260px] sm:min-h-[380px]">
          {!imgError ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full max-h-[58vh] lg:max-h-[78vh] object-contain rounded-lg"
            />
          ) : (
            <div className="p-10 text-center">
              <p className="font-display text-xl font-medium text-[#141413]">{item.title}</p>
              <p className="mt-1 text-sm text-[#575550]">{item.category}</p>
            </div>
          )}

          {items.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous portfolio item"
                className="pointer-events-auto w-10 h-10 rounded-lg bg-white/95 text-[#141413] border border-[#E5E2DC] flex items-center justify-center hover:bg-[#141413] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next portfolio item"
                className="pointer-events-auto w-10 h-10 rounded-lg bg-white/95 text-[#141413] border border-[#E5E2DC] flex items-center justify-center hover:bg-[#141413] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {/* Metadata Pane */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#575550] mb-3 pr-10">
              <span className="font-medium text-[#B83220]">{item.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{item.year}</span>
            </div>

            <h3
              id="lightbox-title"
              className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#141413] text-balance"
            >
              {item.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-[#575550] leading-relaxed">
              {item.summary}
            </p>

            <dl className="mt-8 pt-6 border-t border-[#E5E2DC] space-y-4 text-sm">
              <div>
                <dt className="text-xs text-[#575550]">Client / Issuer</dt>
                <dd className="mt-0.5 font-medium text-[#141413]">{item.clientOrIssuer}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#575550]">Deliverables</dt>
                <dd className="mt-0.5 font-medium text-[#141413]">{item.deliverables}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E2DC] flex items-center justify-between gap-4">
            <span className="font-mono tabular-nums text-xs text-[#575550]">
              {currentIndex + 1} / {items.length}
            </span>
            <a
              href="#connect"
              onClick={onClose}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors whitespace-nowrap"
            >
              Request Similar Design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
