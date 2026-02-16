import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Check } from 'lucide-react';
import { services } from '../data/servicesData';

const WHATSAPP_NUMBER = '918056248879';

const easeApple = [0.25, 0.1, 0.25, 1];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value?.trim() || '';
    const email = form.email?.value?.trim() || '';
    const service = form.service?.value || '';
    const message = form.message?.value?.trim() || '';

    const serviceLabel = service === 'general-enquiry' ? 'General enquiry' : (services.find((s) => s.slug === service)?.title || service || 'Not specified');
    const template = `*New Contact Enquiry*
Name: ${name}
Email: ${email}
Service: ${serviceLabel}
Message: ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
        >
          Get In <span className="accent">Touch</span>
        </motion.h1>
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easeApple }}
        >
          Ready to start your project? We&apos;d love to hear from you.
        </motion.p>
      </section>
      <section className="contact-section">
        <motion.div
          className="contact-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.h3 className="contact-block-title" variants={item} transition={{ duration: 0.45, ease: easeApple }}>
            Contact information
          </motion.h3>
          <motion.div className="contact-info-cards" variants={stagger}>
            <motion.div
              className="contact-info-card"
              variants={item}
              transition={{ duration: 0.45, ease: easeApple }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <Mail className="contact-info-icon" size={20} />
              <motion.a
                href="mailto:devfyzo@gmail.com"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                devfyzo@gmail.com
              </motion.a>
            </motion.div>
            <motion.div
              className="contact-info-card"
              variants={item}
              transition={{ duration: 0.45, ease: easeApple }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <Phone className="contact-info-icon" size={20} />
              <motion.a
                href="tel:+918056248879"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                +91 80562 48879
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.h3 className="contact-block-title" variants={item} transition={{ duration: 0.45, ease: easeApple }}>
            Send a message
          </motion.h3>
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="contact-form"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="form-group" variants={item} transition={{ duration: 0.4, ease: easeApple }}>
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </motion.div>
              <motion.div className="form-group" variants={item} transition={{ duration: 0.4, ease: easeApple }}>
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="form-input"
                />
              </motion.div>
              <motion.div className="form-group" variants={item} transition={{ duration: 0.4, ease: easeApple }}>
                <label htmlFor="contact-service">Service interested in</label>
                <select
                  id="contact-service"
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
              </motion.div>
              <motion.div className="form-group" variants={item} transition={{ duration: 0.4, ease: easeApple }}>
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="form-textarea"
                />
              </motion.div>
              <motion.div variants={item} transition={{ duration: 0.4, ease: easeApple }}>
                <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Send via WhatsApp
                </motion.button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              className="contact-success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: easeApple }}
            >
              <span className="contact-success-icon" aria-hidden>
                <Check size={20} />
              </span>
              <span>Thanks! We&apos;ll get back to you soon.</span>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
}
