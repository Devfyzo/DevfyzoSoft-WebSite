import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';

function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function ParallaxText({ children, baseVelocity = 50, className, disabled }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 90,
    stiffness: 120,
  });
  const velocityFactor = useTransform(smoothVelocity, [-800, 0, 800], [-0.6, 0, 0.6], {
    clamp: true,
  });
  const [repetitions, setRepetitions] = useState(2);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        if (textWidth > 0) {
          const newRepetitions = Math.max(2, Math.ceil(containerWidth / textWidth) + 2);
          setRepetitions(newRepetitions);
        }
      }
    };
    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    if (disabled) return;
    const v = velocityFactor.get();
    const nudge = 1 + v;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * nudge;
    if (v < -0.1) directionFactor.current = -1;
    else if (v > 0.1) directionFactor.current = 1;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="velocity-scroll-row"
      ref={containerRef}
      style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      <motion.div className={className} style={{ x, display: 'inline-block' }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {children}
            {'\u00A0'}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function VelocityScrollText({ text = 'Innovation Strategy', defaultVelocity = 12, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="hero-after-watermark hero-after-watermark-velocity" aria-hidden>
      <div className="hero-after-watermark-velocity-inner">
        <ParallaxText
          baseVelocity={defaultVelocity}
          className={`hero-after-watermark-text ${className}`.trim()}
          disabled={!!prefersReducedMotion}
        >
          {text}
        </ParallaxText>
        <ParallaxText
          baseVelocity={-defaultVelocity}
          className={`hero-after-watermark-text ${className}`.trim()}
          disabled={!!prefersReducedMotion}
        >
          {text}
        </ParallaxText>
      </div>
    </section>
  );
}
