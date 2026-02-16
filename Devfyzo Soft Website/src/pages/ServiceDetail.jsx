import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';

const easeApple = [0.25, 0.1, 0.25, 1];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="service-detail">
        <div className="service-detail-top">
          <motion.div
            className="service-detail-back"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/services" className="service-detail-back-link">
              ← All Services
            </Link>
          </motion.div>
          <motion.span
            className="service-detail-category"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeApple }}
          >
            {service.category}
          </motion.span>
        </div>
        <div className="service-detail-visual">
          <motion.div
            className="service-detail-visual-inner"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeApple }}
          >
            <img
              src={`/${service.image}`}
              alt={service.title}
              className="service-detail-image"
            />
          </motion.div>
        </div>
        <div className="service-detail-content">
          <motion.h1
            className="service-detail-title"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: easeApple }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="service-detail-intro"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeApple }}
          >
            {service.desc}
          </motion.p>
          <motion.p
            className="service-detail-long"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14, ease: easeApple }}
          >
            {service.longDesc}
          </motion.p>
          <motion.div
            className="service-detail-cta"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: easeApple }}
          >
            <h3 className="service-detail-cta-heading">Interested in this service?</h3>
            <p className="service-detail-cta-desc">
              Let&apos;s discuss how we can help bring your project to life with our expertise.
            </p>
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn btn-primary">
                Get Started
                <ArrowRight size={18} strokeWidth={2} />
              </Link>
            </motion.span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
