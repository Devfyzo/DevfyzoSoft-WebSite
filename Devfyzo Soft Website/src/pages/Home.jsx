import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Code2, Smartphone, Globe, Palette, Zap, Check, Layers, Sparkles, ChevronDown } from 'lucide-react';
import { services } from '../data/servicesData';

const easeApple = [0.25, 0.1, 0.25, 1];

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: easeApple },
  }),
};

const heroWordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      type: 'spring',
      stiffness: 180,
      damping: 18,
    },
  }),
};

const serviceIcons = { Code2, Smartphone, Globe, Palette, Zap };

const benefits = [
  'Agile development methodology for faster delivery',
  'Cutting-edge technology stack and best practices',
  'Transparent communication throughout the project',
  'Post-launch support and maintenance',
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const expertiseRef = useRef(null);

  useEffect(() => {
    const section = expertiseRef.current;
    if (!section) return;

    const updateActiveFromScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;

      const progress =
        (viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
      const clamped = Math.max(0, Math.min(1, progress));
      const index = Math.min(
        services.length - 1,
        Math.floor(clamped * services.length)
      );
      setActiveService(index);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      {/* Hero - Building Digital Reality (grid full width, content centered) */}
      <section className="hero-light-wrap">
        <div className="hero-light">
        <div>
          <motion.div
            className="hero-light-badge"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <Sparkles className="hero-light-badge-icon" size={18} strokeWidth={1.8} />
            <span className="hero-light-badge-text">Fusion of your zero to one</span>
          </motion.div>
          <h1 className="hero-headline">
            <motion.span className="hero-headline-word" custom={0} initial="hidden" animate="visible" variants={heroWordVariants}>
              Building
            </motion.span>{' '}
            <motion.span className="hero-headline-word" custom={1} initial="hidden" animate="visible" variants={heroWordVariants}>
              Digital
            </motion.span>{' '}
            <motion.span className="hero-headline-word hero-headline-accent" custom={2} initial="hidden" animate="visible" variants={heroWordVariants}>
              Reality
            </motion.span>
          </h1>
          <motion.p
            className="hero-light-desc"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            We specialize in crafting innovative, reliable, and user-friendly digital solutions. Our services include custom software development, mobile and web application development, UI/UX design. We combine creativity with cutting-edge technology to deliver products that solve real-world problems and enhance user experience. With a strong focus on quality, scalability, and client satisfaction, we strive to turn ideas into impactful digital solutions.
          </motion.p>
          <motion.div
            className="hero-light-actions"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Link to="/services" className="btn btn-primary">
                Explore Services →
              </Link>
            </motion.span>
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </motion.span>
          </motion.div>
          <motion.a
            href="#expertise"
            className="hero-scroll-hint"
            aria-label="Scroll to expertise"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={28} strokeWidth={2} />
            </motion.span>
          </motion.a>
        </div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 60, scale: 0.88, rotate: -5 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.4,
            type: 'spring',
            stiffness: 120,
            damping: 18,
          }}
          whileHover={{
            y: -8,
            rotate: 1,
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
        >
          <span className="hero-card-icon" aria-hidden><Code2 className="w-5 h-5" strokeWidth={1.5} /></span>
          <div className="hero-card-logo">
            <img src="/devfyzo_light.png" alt="Devfyzo Soft" className="hero-card-logo-img" />
          </div>
          <div className="hero-card-code" aria-hidden>
            <motion.span
              className="hero-card-code-line"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <span className="code-keyword">const</span> build = <span className="code-string">'digital'</span>;
            </motion.span>
            <motion.span
              className="hero-card-code-line"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
            >
              <span className="code-keyword">return</span> <span className="code-accent">&lt;Reality /&gt;</span>;
              <span className="hero-card-cursor" aria-hidden />
            </motion.span>
          </div>
          <div className="hero-card-badges">
            {['React', 'Node', 'Cloud'].map((label, i) => (
              <motion.span
                key={label}
                className="hero-card-badge"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9 + i * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 22,
                }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
        </div>
      </section>

      {/* Large faded text after hero - enter from right, exit left, loop */}
      <section className="hero-after-watermark" aria-hidden>
        <div className="hero-after-watermark-marquee">
          <span className="hero-after-watermark-gap" aria-hidden />
          <span className="hero-after-watermark-text">Innovation Strategy</span>
          <span className="hero-after-watermark-gap" aria-hidden />
          <span className="hero-after-watermark-text" aria-hidden>Innovation Strategy</span>
        </div>
      </section>

      {/* Expertise - Left stays fixed, right scrolls: Custom Software → Mobile Apps → Web Development */}
      <section id="expertise" ref={expertiseRef} className="expertise-section">
        <div className="expertise-inner">
          <motion.div
            className="expertise-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="expertise-label">OUR EXPERTISE</span>
            <h2>
              Engineering <span className="accent">Digital Excellence</span>
            </h2>
            <p className="tagline">We don&apos;t just write code; we architect solutions.</p>
            <p className="desc">
              Our comprehensive suite of services is designed to propel your business into the future.
            </p>
          </motion.div>
          <div className="expertise-right">
            {services.map((card, i) => (
              <motion.div
                key={card.slug}
                className="expertise-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px', amount: 0.25 }}
                transition={{ duration: 0.55, ease: easeApple }}
                whileHover={{ y: -2 }}
              >
                <motion.div
                  className="service-card"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="service-card-icon">
                    {(() => {
                      const Icon = serviceIcons[card.icon];
                      return Icon ? <Icon className="w-[2.5rem] h-[2.5rem]" strokeWidth={1.5} /> : null;
                    })()}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="service-card-tags">
                    {(card.tags || []).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
            <div className="expertise-dots-wrap">
              <div className="service-dots">
                {services.map((_, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    aria-label={`View service ${i + 1}`}
                    onClick={() => {
                      const step = document.querySelectorAll('.expertise-step')[i];
                      step?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`service-dot ${activeService === i ? 'is-active' : ''}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Devfyzo */}
      <section className="why-partner">
        <span className="section-watermark" aria-hidden>Innovation</span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: easeApple }}
        >
          Why Partner With <span className="accent">Devfyzo?</span>
        </motion.h2>
        <motion.p
          className="why-partner-sub"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.06, ease: easeApple }}
        >
          We combine technical expertise with creative problem-solving to deliver solutions that exceed expectations.
        </motion.p>
        <motion.div
          className="why-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            className="why-card why-card-primary"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: easeApple }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="why-card-icon">◇</div>
            <h3>Technical Excellence</h3>
            <p>
              We leverage the latest technologies and architectural patterns to ensure your software is scalable, secure, and future-proof.
            </p>
          </motion.div>
          <motion.div
            className="why-card why-card-default"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: easeApple }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="why-card-icon">
              <Check className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3>Client-Focused Approach</h3>
            <p>Client-focused approach with personalized attention</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="benefit-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {benefits.map((text) => (
            <motion.div
              key={text}
              className="benefit-item"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: easeApple }}
            >
              <span className="benefit-item-icon">
                <Check className="w-5 h-5" strokeWidth={2} />
              </span>
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA - Ready to Transform */}
      <section className="cta-section">
        <span className="section-watermark" aria-hidden>Transform</span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: easeApple }}
        >
          Ready to <span className="accent">Transform</span> Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: easeApple }}
        >
          Let&apos;s discuss how we can help transform your ideas into powerful digital solutions.
        </motion.p>
        <motion.div
          className="cta-actions"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4, ease: easeApple }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4, ease: easeApple }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </motion.span>
        </motion.div>
      </section>
    </>
  );
}
