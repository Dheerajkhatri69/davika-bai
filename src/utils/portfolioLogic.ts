export type ProjectCategory =
  | 'Brand Identity'
  | 'Social Media'
  | 'Marketing & Video'
  | 'Certificates';

export type FilterCategory = 'All' | ProjectCategory;

export interface PortfolioItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  clientOrIssuer: string;
  summary: string;
  deliverables: string;
  imageUrl: string;
  isCustom?: boolean;
  isPendingUpload?: boolean;
}

export interface ContactFormValues {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface UploadWorkValues {
  title: string;
  category: ProjectCategory;
  clientOrIssuer: string;
  year: string;
  summary: string;
  imageUrl: string;
}

export interface UploadWorkErrors {
  title?: string;
  clientOrIssuer?: string;
  imageUrl?: string;
}

export function filterPortfolioItems(
  items: PortfolioItem[],
  category: FilterCategory,
): PortfolioItem[] {
  if (category === 'All') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email.trim() || !emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please share a brief project note (at least 10 characters).';
  }

  return errors;
}

export function validateUploadWorkForm(values: UploadWorkValues): UploadWorkErrors {
  const errors: UploadWorkErrors = {};

  if (!values.title.trim() || values.title.trim().length < 2) {
    errors.title = 'Please provide a title for this work or certificate.';
  }

  if (!values.clientOrIssuer.trim()) {
    errors.clientOrIssuer = 'Please enter the client, agency, or issuing organization.';
  }

  if (!values.imageUrl.trim()) {
    errors.imageUrl = 'Please upload an image file to preview in the portfolio.';
  }

  return errors;
}

export function mergeSavedItems(
  defaults: PortfolioItem[],
  rawStoredJson: string | null,
): PortfolioItem[] {
  if (!rawStoredJson) {
    return defaults;
  }

  try {
    const parsed: unknown = JSON.parse(rawStoredJson);
    if (!Array.isArray(parsed)) {
      return defaults;
    }

    const validCustomItems = parsed.filter((entry): entry is PortfolioItem => {
      if (typeof entry !== 'object' || entry === null) {
        return false;
      }
      const candidate = entry as Record<string, unknown>;
      return (
        typeof candidate.id === 'string' &&
        typeof candidate.title === 'string' &&
        typeof candidate.category === 'string' &&
        typeof candidate.imageUrl === 'string'
      );
    });

    if (validCustomItems.length === 0) {
      return defaults;
    }

    const customIds = new Set(validCustomItems.map((item) => item.id));
    const remainingDefaults = defaults.filter((item) => !customIds.has(item.id));
    return [...validCustomItems, ...remainingDefaults];
  } catch {
    return defaults;
  }
}
