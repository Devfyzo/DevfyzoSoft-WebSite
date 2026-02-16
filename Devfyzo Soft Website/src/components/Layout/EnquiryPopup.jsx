import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { services } from '../../data/servicesData';

const STORAGE_KEY = 'devfyzo_enquiry_seen';
const SHOW_DELAY_MS = 800;
const WHATSAPP_NUMBER = '918056248879';

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (_) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value?.trim() || '';
    const email = form.email?.value?.trim() || '';
    const serviceSlug = form.service?.value || '';
    const message = form.message?.value?.trim() || '';

    const serviceLabel = serviceSlug === 'general-enquiry' ? 'General enquiry' : (services.find((s) => s.slug === serviceSlug)?.title || serviceSlug || 'Not specified');
    const template = `*New Enquiry (Popup)*
Name: ${name}
Email: ${email}
Service: ${serviceLabel}
Message: ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (_) {}
    setTimeout(close, 1800);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="enquiry-popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-popup-title"
        >
          <motion.div
            className="enquiry-popup"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="enquiry-popup-close"
              onClick={close}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            {!submitted ? (
              <>
                <h2 id="enquiry-popup-title" className="enquiry-popup-title">
                  Get in <span className="accent">Touch</span>
                </h2>
                <p className="enquiry-popup-sub">
                  Share your details and we&apos;ll get back to you soon.
                </p>
                <form onSubmit={handleSubmit} className="enquiry-popup-form">
                  <div className="form-group">
                    <label htmlFor="enquiry-name">Your name</label>
                    <input
                      id="enquiry-name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-email">Email</label>
                    <input
                      id="enquiry-email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-service">Service interested in</label>
                    <select
                      id="enquiry-service"
                      name="service"
                      className="form-input"
                      defaultValue="general-enquiry"
                    >
                      <option value="general-enquiry">General enquiry</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-message">Your message</label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      placeholder="How can we help?"
                      rows={3}
                      required
                      className="form-textarea"
                    />
                  </div>
                  <div className="enquiry-popup-actions">
                    <button type="button" className="btn btn-outline" onClick={close}>
                      Maybe later
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                className="enquiry-popup-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="enquiry-popup-success-icon" aria-hidden>
                  <Check size={24} />
                </span>
                <p>Thanks! We&apos;ll get back to you soon.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
