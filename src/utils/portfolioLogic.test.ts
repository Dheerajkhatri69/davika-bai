import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterPortfolioItems,
  validateContactForm,
  validateUploadWorkForm,
  mergeSavedItems,
  type PortfolioItem,
} from './portfolioLogic';
import { DEFAULT_PORTFOLIO_ITEMS } from '../data/portfolioData';

const SAMPLE_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Botanical Brand Identity',
    category: 'Brand Identity',
    year: '2025',
    clientOrIssuer: 'Arissa Studio',
    summary: 'Complete visual identity and stationery suite.',
    deliverables: 'Logo · Packaging · Guidelines',
    imageUrl: '/sample-1.jpg',
  },
  {
    id: '2',
    title: 'Social Media Campaign Grid',
    category: 'Social Media',
    year: '2025',
    clientOrIssuer: 'Marketing Agency Collaboration',
    summary: 'Carousel templates and editorial campaign posts.',
    deliverables: 'Instagram · LinkedIn · Stories',
    imageUrl: '/sample-2.jpg',
  },
  {
    id: '3',
    title: 'Agency Internship Certificate',
    category: 'Certificates',
    year: '2024',
    clientOrIssuer: 'Marketing Agency Internship',
    summary: 'Practical agency internship credential.',
    deliverables: 'Verified Credential',
    imageUrl: '/sample-3.jpg',
  },
];

test('filterPortfolioItems returns all items when category is All', () => {
  const result = filterPortfolioItems(SAMPLE_ITEMS, 'All');
  assert.equal(result.length, 3);
});

test('filterPortfolioItems filters accurately by specific category', () => {
  const brandOnly = filterPortfolioItems(SAMPLE_ITEMS, 'Brand Identity');
  assert.equal(brandOnly.length, 1);
  assert.equal(brandOnly[0].id, '1');

  const certificatesOnly = filterPortfolioItems(SAMPLE_ITEMS, 'Certificates');
  assert.equal(certificatesOnly.length, 1);
  assert.equal(certificatesOnly[0].id, '3');
});

test('default portfolio items use categories supported by the filter controls', () => {
  const marketingItems = filterPortfolioItems(DEFAULT_PORTFOLIO_ITEMS, 'Marketing & Video');
  const certificateItems = filterPortfolioItems(DEFAULT_PORTFOLIO_ITEMS, 'Certificates');

  assert.equal(marketingItems.length, 4);
  assert.equal(certificateItems.length, 3);
  assert.equal(
    filterPortfolioItems(DEFAULT_PORTFOLIO_ITEMS, 'All').length,
    marketingItems.length + certificateItems.length,
  );
});

test('validateContactForm rejects empty or invalid inputs and passes valid submission', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'invalid-email',
    service: 'Brand Identity Design',
    message: 'Short',
  });
  assert.ok(invalid.name);
  assert.ok(invalid.email);
  assert.ok(invalid.message);

  const valid = validateContactForm({
    name: 'Ayesha Khan',
    email: 'ayesha@studio.com',
    service: 'Social Media Post Design',
    message: 'Looking for a monthly social media design retainer for our skincare launch.',
  });
  assert.deepEqual(valid, {});
});

test('validateUploadWorkForm validates title, issuer, and image source', () => {
  const invalid = validateUploadWorkForm({
    title: '',
    category: 'Certificates',
    clientOrIssuer: '',
    year: '2026',
    summary: '',
    imageUrl: '',
  });
  assert.ok(invalid.title);
  assert.ok(invalid.clientOrIssuer);
  assert.ok(invalid.imageUrl);

  const valid = validateUploadWorkForm({
    title: 'Agency Internship Completion',
    category: 'Certificates',
    clientOrIssuer: 'Digital Spark Agency',
    year: '2025',
    summary: 'Completed 6-month graphic design internship.',
    imageUrl: 'data:image/png;base64,abc123',
  });
  assert.deepEqual(valid, {});
});

test('mergeSavedItems handles malformed JSON gracefully and prepends custom items', () => {
  const malformed = mergeSavedItems(SAMPLE_ITEMS, '{not-json');
  assert.equal(malformed.length, 3);

  const customItem: PortfolioItem = {
    id: 'custom-1',
    title: 'Uploaded Poster',
    category: 'Social Media',
    year: '2026',
    clientOrIssuer: 'Client X',
    summary: 'Custom uploaded design.',
    deliverables: 'Poster',
    imageUrl: 'data:image/png;base64,xyz',
    isCustom: true,
  };

  const merged = mergeSavedItems(SAMPLE_ITEMS, JSON.stringify([customItem]));
  assert.equal(merged.length, 4);
  assert.equal(merged[0].id, 'custom-1');
});
