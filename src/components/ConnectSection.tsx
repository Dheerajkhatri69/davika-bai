import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { PROFILE_INFO, SERVICES_LIST } from '../data/portfolioData';
import { validateContactForm, type ContactFormErrors } from '../utils/portfolioLogic';

interface ConnectSectionProps {
  selectedService: string;
}

export function ConnectSection({ selectedService }: ConnectSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(selectedService || SERVICES_LIST[0].title);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedDetails, setSubmittedDetails] = useState<{
    name: string;
    service: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setSubmittedDetails(null);
    }
  }, [selectedService]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validateContactForm({ name, email, service, message });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmittedDetails({ name: name.trim(), service });
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <footer id="connect" className="pt-16 pb-12 md:pt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E5E2DC]">
          {/* Left: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <p className="font-mono text-xs text-[#B83220] mb-2">06. Collaborations</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] text-balance">
                Let&apos;s Connect
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#575550] leading-relaxed">
                {PROFILE_INFO.connectMessage}
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#E5E2DC] bg-white p-5">
                <p className="text-xs text-[#575550] mb-1">Direct Email</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${PROFILE_INFO.email}`}
                    className="text-sm sm:text-base font-medium text-[#141413] hover:text-[#B83220] transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#B83220]" aria-hidden="true" />
                    <span>{PROFILE_INFO.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#E5E2DC] rounded-lg text-[#141413] hover:border-[#141413] transition-colors whitespace-nowrap"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#B83220]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#E5E2DC] bg-white p-5 hover:border-[#141413] transition-colors group"
              >
                <div>
                  <p className="text-xs text-[#575550] mb-0.5">Professional Network</p>
                  <p className="text-sm sm:text-base font-medium text-[#141413] group-hover:text-[#B83220] transition-colors">
                    LinkedIn — Davika Bai
                  </p>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-[#575550] group-hover:text-[#B83220] transition-colors"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right: Validated Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E5E2DC] bg-white p-6 sm:p-8">
              {submittedDetails ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-11 h-11 rounded-full bg-[#FAF9F6] border border-[#E5E2DC] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5 text-[#B83220]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#141413]">
                    Inquiry Ready, {submittedDetails.name}
                  </h3>
                  <p className="text-sm text-[#575550] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out regarding{' '}
                    <strong className="text-[#141413] font-medium">
                      {submittedDetails.service}
                    </strong>
                    . You can also send this brief directly to{' '}
                    <a
                      href={`mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(`Design Inquiry: ${submittedDetails.service}`)}`}
                      className="text-[#B83220] underline underline-offset-4"
                    >
                      {PROFILE_INFO.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedDetails(null)}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#141413] border border-[#E5E2DC] rounded-lg hover:border-[#141413] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#141413] mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Ayesha Khan"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-[#B83220]">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#141413] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#B83220]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.index} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Tell me about your brand, deliverables, or timeline..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E2DC] rounded-lg text-[#141413] focus:outline-none focus:border-[#141413]"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-[#B83220]">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#575550]">
                      Open for agency collaborations &amp; paid design projects
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-sm font-medium text-white bg-[#141413] rounded-lg hover:bg-[#B83220] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B83220]"
                    >
                      Send Project Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Copyright Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#575550]">
          <p>© 2026 {PROFILE_INFO.name}. Graphic Designer · Brand Identity Designer.</p>
          <a
            href="#top"
            className="hover:text-[#141413] transition-colors whitespace-nowrap"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
