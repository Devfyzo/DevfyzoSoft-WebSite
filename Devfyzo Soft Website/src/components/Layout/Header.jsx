import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 24));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="site-header-inner">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link to="/" className="site-logo" aria-label="Devfyzo Soft - Home">
            <img src="/devfyzo_light.png" alt="Devfyzo Soft" className="site-logo-img" />
          </Link>
        </motion.div>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <motion.span
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.path}
                className={`site-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </motion.span>
          ))}
          <motion.span
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link to="/contact" className="site-nav-cta site-nav-cta-animated">
              Get Started
            </Link>
          </motion.span>
        </nav>
        <button
          type="button"
          className="site-header-menu-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="site-nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="site-nav-mobile-inner">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`site-nav-mobile-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="site-nav-cta site-nav-mobile-cta site-nav-cta-animated"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
