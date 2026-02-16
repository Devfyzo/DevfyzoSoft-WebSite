import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const services = [
  'Custom Software Development',
  'Mobile App Development',
  'Web Development',
  'UI/UX Design',
  'API Development & Integration',
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Footer() {
  return (
    <motion.footer
      className="site-footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
    >
      <div className="site-footer-inner">
        <motion.div className="site-footer-brand" variants={item}>
          <motion.span
            className="site-footer-logo-wrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="site-footer-logo" aria-label="Devfyzo Soft - Home">
              <img src="/Devfy_dark.png" alt="Devfyzo Soft" className="site-footer-logo-img" />
            </Link>
          </motion.span>
          <p className="site-footer-desc">
            Building digital solutions that transform ideas into reality. Your trusted partner in software and app development.
          </p>
        </motion.div>
        <motion.div className="site-footer-col" variants={item}>
          <h4 className="site-footer-heading">Quick Links</h4>
          <ul className="site-footer-links">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <motion.span whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link to={link.to}>{link.label}</Link>
                </motion.span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="site-footer-col" variants={item}>
          <h4 className="site-footer-heading">Our Services</h4>
          <ul className="site-footer-links">
            {services.map((s) => (
              <li key={s}>
                <motion.span whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link to="/services">{s}</Link>
                </motion.span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="site-footer-col" variants={item}>
          <h4 className="site-footer-heading">Get In Touch</h4>
          <div className="site-footer-contact-item">
            <Mail className="site-footer-icon" size={18} />
            <motion.a href="mailto:devfyzo@gmail.com" whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              devfyzo@gmail.com
            </motion.a>
          </div>
          <div className="site-footer-contact-item">
            <Phone className="site-footer-icon" size={18} />
            <motion.a href="tel:+918056248879" whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              +91 80562 48879
            </motion.a>
          </div>
          <div className="site-footer-socials">
            <motion.a href="https://www.linkedin.com/company/devfyzo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
              <Linkedin size={18} />
            </motion.a>
            <motion.a href="mailto:devfyzo@gmail.com" aria-label="Email" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
              <Mail size={18} />
            </motion.a>
            <motion.a href="https://wa.me/918056248879" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="site-footer-bottom">
        <span className="site-footer-copyright">© 2026 Devfyzo Soft (OPC) Private Limited. All rights reserved.</span>
        <div className="site-footer-legal">
          <motion.a href="/privacy" whileHover={{ x: 2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            Privacy Policy
          </motion.a>
          <motion.a href="/terms" whileHover={{ x: 2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            Terms of Service
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
