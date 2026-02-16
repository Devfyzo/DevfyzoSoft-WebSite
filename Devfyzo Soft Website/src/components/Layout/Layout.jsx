import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import EnquiryPopup from './EnquiryPopup';
import SplashScreen from './SplashScreen';

const pageVariants = {
  initial: { opacity: 1, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: -8 },
};

const pageTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

const pageTransitionReduced = {
  duration: 0.15,
  ease: [0.25, 0.1, 0.25, 1],
};

export default function Layout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? pageTransitionReduced : pageTransition;
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <SplashScreen />
      <Header onOpenContact={() => setContactModalOpen(true)} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
      <EnquiryPopup />
    </div>
  );
}
