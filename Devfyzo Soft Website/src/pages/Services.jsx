import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { categories, services } from '../data/servicesData';

const easeApple = [0.25, 0.1, 0.25, 1];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.03 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeApple },
  },
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
        >
          Our <span className="accent">Services</span>
        </motion.h1>
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easeApple }}
        >
          Comprehensive software and app development solutions tailored to your business needs.
        </motion.p>
      </section>

      <section className="services-section">
        <div className="services-filter-wrap">
          <div className="services-filter" role="tablist" aria-label="Service categories">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`services-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="services-grid"
          variants={container}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s) => (
              <motion.div
                key={s.title}
                className="services-card"
                variants={cardItem}
                layout
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="services-card-category">{s.category}</span>
                <h3 className="services-card-title">{s.title}</h3>
                <p className="services-card-desc">{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="services-card-link">
                  Learn More
                  <ArrowRight size={18} strokeWidth={2} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <section className="services-cta-section">
          <motion.h2
            className="services-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeApple }}
          >
            Don&apos;t See What You&apos;re Looking For?
          </motion.h2>
          <motion.p
            className="services-cta-desc"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeApple }}
          >
            We offer custom solutions tailored to your specific needs. Let&apos;s discuss your project.
          </motion.p>
          <motion.div
            className="services-cta-actions"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: easeApple }}
          >
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
                <ArrowRight size={18} strokeWidth={2} />
              </Link>
            </motion.span>
          </motion.div>
        </section>
      </section>
    </>
  );
}
