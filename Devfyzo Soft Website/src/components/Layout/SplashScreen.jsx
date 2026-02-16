import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const STORAGE_KEY = 'devfyzo_splash_seen';
const SHOW_MS = 1500;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch (_) {}
    }, SHOW_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="splash-screen-logo"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img src="/devfyzo_light.png" alt="Devfyzo Soft" className="splash-screen-logo-img" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
