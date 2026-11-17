import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSkillsSection } from './components/AboutSkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ConnectSection } from './components/ConnectSection';
import { LightboxModal } from './components/LightboxModal';
import { UploadWorkModal } from './components/UploadWorkModal';
import { DEFAULT_PORTFOLIO_ITEMS } from './data/portfolioData';
import {
  mergeSavedItems,
  type FilterCategory,
  type PortfolioItem,
  type ProjectCategory,
} from './utils/portfolioLogic';

const STORAGE_KEY = 'davika_portfolio_custom_items_v1';

export default function App() {
  const [items, setItems] = useState<PortfolioItem[]>(() => {
    if (typeof window === 'undefined') return DEFAULT_PORTFOLIO_ITEMS;
    return mergeSavedItems(DEFAULT_PORTFOLIO_ITEMS, window.localStorage.getItem(STORAGE_KEY));
  });
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadPresetCategory, setUploadPresetCategory] =
    useState<ProjectCategory>('Brand Identity');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const customOnly = items.filter((item) => item.isCustom);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customOnly));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [items]);

  const handleOpenUploadModal = (presetCategory: ProjectCategory = 'Brand Identity') => {
    setUploadPresetCategory(presetCategory);
    setUploadModalOpen(true);
  };

  const handleAddWork = (newItem: PortfolioItem) => {
    setItems((prev) => [newItem, ...prev]);
    setSelectedCategory(newItem.category);
  };

  const handleDeleteCustomItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (lightboxItem?.id === id) {
      setLightboxItem(null);
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const connectEl = document.getElementById('connect');
    if (connectEl) {
      connectEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141413]">
      <Header />

      <main>
        <Hero />

        <PortfolioSection
          items={items}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenLightbox={setLightboxItem}
          onOpenUploadModal={handleOpenUploadModal}
          onDeleteCustomItem={handleDeleteCustomItem}
        />

        <AboutSkillsSection />

        <ServicesSection onSelectService={handleSelectService} />

        <ExperienceEducationSection />
      </main>

      <ConnectSection selectedService={selectedService} />

      <LightboxModal
        item={lightboxItem}
        items={items}
        onClose={() => setLightboxItem(null)}
        onSelectItem={setLightboxItem}
      />

      <UploadWorkModal
        isOpen={uploadModalOpen}
        initialCategory={uploadPresetCategory}
        onClose={() => setUploadModalOpen(false)}
        onAddWork={handleAddWork}
      />
    </div>
  );
}
