import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { X, Upload } from 'lucide-react';
import {
  validateUploadWorkForm,
  type PortfolioItem,
  type ProjectCategory,
  type UploadWorkErrors,
} from '../utils/portfolioLogic';

interface UploadWorkModalProps {
  isOpen: boolean;
  initialCategory: ProjectCategory;
  onClose: () => void;
  onAddWork: (item: PortfolioItem) => void;
}

const CATEGORY_OPTIONS: ProjectCategory[] = [
  'Brand Identity',
  'Social Media',
  'Marketing & Video',
  'Certificates',
];

export function UploadWorkModal({
  isOpen,
  initialCategory,
  onClose,
  onAddWork,
}: UploadWorkModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>(initialCategory);
  const [clientOrIssuer, setClientOrIssuer] = useState('');
  const [year, setYear] = useState('2026');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<UploadWorkErrors>({});

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageUrl(reader.result);
        setErrors((prev) => ({ ...prev, imageUrl: undefined }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validateUploadWorkForm({
      title,
      category,
      clientOrIssuer,
      year,
      summary,
      imageUrl,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newItem: PortfolioItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      clientOrIssuer: clientOrIssuer.trim(),
      year: year.trim() || '2026',
      summary:
        summary.trim() ||
        (category === 'Certificates'
          ? 'Verified internship completion certificate uploaded by Davika Bai.'
          : 'Original graphic design project uploaded to the portfolio archive.'),
      deliverables: category === 'Certificates' ? 'Internship Certificate' : category,
      imageUrl,
      isCustom: true,
    };

    onAddWork(newItem);
    setTitle('');
    setClientOrIssuer('');
    setYear('2026');
    setSummary('');
    setImageUrl('');
    setFileName('');
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-modal-title"
      className="fixed inset-0 z-50 bg-[#141413]/75 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="w-full max-w-lg bg-[#FAF9F6] rounded-2xl border border-[#E5E2DC] p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h3
              id="upload-modal-title"
              className="font-display text-2xl font-semibold tracking-tight text-[#141413]"
            >
              Upload Work or Certificate
            </h3>
            <p className="mt-1 text-sm text-[#575550]">
              Add your graphic design projects or internship certificate scans directly to this
              portfolio. Saved locally in your browser.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close upload modal"
            className="w-9 h-9 rounded-lg border border-[#E5E2DC] bg-white text-[#141413] flex items-center justify-center hover:border-[#141413] transition-colors shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="work-title" className="block text-xs font-medium text-[#141413] mb-1.5">
              Project or Certificate Title
            </label>
            <input
              id="work-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors((prev) => ({ ...prev, title: undefined }));
              }}
              placeholder="e.g., Digital Marketing Agency Internship Certificate"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
            />
            {errors.title && <p className="mt-1 text-xs text-[#B83220]">{errors.title}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="work-category"
                className="block text-xs font-medium text-[#141413] mb-1.5"
              >
                Category
              </label>
              <select
                id="work-category"
                value={category}
                onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="work-year" className="block text-xs font-medium text-[#141413] mb-1.5">
                Year
              </label>
              <input
                id="work-year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2026"
                className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="work-issuer"
              className="block text-xs font-medium text-[#141413] mb-1.5"
            >
              Client or Issuing Agency
            </label>
            <input
              id="work-issuer"
              type="text"
              value={clientOrIssuer}
              onChange={(e) => {
                setClientOrIssuer(e.target.value);
                setErrors((prev) => ({ ...prev, clientOrIssuer: undefined }));
              }}
              placeholder="e.g., Creative Pulse Marketing Agency"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
            />
            {errors.clientOrIssuer && (
              <p className="mt-1 text-xs text-[#B83220]">{errors.clientOrIssuer}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="work-summary"
              className="block text-xs font-medium text-[#141413] mb-1.5"
            >
              Brief Description (optional)
            </label>
            <textarea
              id="work-summary"
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Short context about the design brief or internship role..."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
            />
          </div>

          <div>
            <label htmlFor="work-file" className="block text-xs font-medium text-[#141413] mb-1.5">
              Design or Certificate Image
            </label>
            <label
              htmlFor="work-file"
              className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border border-dashed border-[#C7C2B8] bg-white cursor-pointer hover:border-[#141413] transition-colors text-center"
            >
              <Upload className="w-5 h-5 text-[#575550]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#141413]">
                {fileName ? fileName : 'Choose JPG, PNG, or WEBP image'}
              </span>
              <span className="text-xs text-[#575550]">
                Previewed immediately in your portfolio grid
              </span>
              <input
                id="work-file"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
            {errors.imageUrl && <p className="mt-1 text-xs text-[#B83220]">{errors.imageUrl}</p>}
          </div>

          {imageUrl && (
            <div className="rounded-xl overflow-hidden border border-[#E5E2DC] bg-[#EFECE6] aspect-[16/9]">
              <img src={imageUrl} alt="Upload preview" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-[#575550] hover:text-[#141413] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors"
            >
              Save to Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
