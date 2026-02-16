import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, Award, Users, Sparkles, Shield } from 'lucide-react';

const easeApple = [0.25, 0.1, 0.25, 1];

const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To empower businesses of all sizes with innovative, customized software solutions that drive growth, efficiency, and digital transformation. We believe in creating technology that not only meets current needs but anticipates future challenges.',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    text: 'To become a leading force in the software development industry, recognized for our commitment to excellence, innovation, and client success. We envision a future where technology seamlessly integrates with business goals to create meaningful impact.',
  },
];

const coreValues = [
  {
    icon: Award,
    title: 'Excellence',
    text: 'We strive for the highest quality in every project, never settling for mediocrity.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    text: 'We work closely with clients as partners, ensuring their vision becomes reality.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    text: 'We embrace new technologies and creative solutions to solve complex problems.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    text: 'We maintain transparency and honesty in all our business relationships.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeApple },
  }),
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
        >
          About <span className="accent">Devfyzo Soft</span>
        </motion.h1>
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: easeApple }}
        >
          A dynamic startup dedicated to transforming ideas into powerful digital solutions.
        </motion.p>
      </section>

      <section className="about-section">
        <div className="about-mission-vision">
          {missionVision.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="about-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="about-card-icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-desc">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="about-core-values">
          <motion.h2
            className="about-core-values-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeApple }}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className="about-core-values-sub"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: easeApple }}
          >
            The principles that guide everything we do
          </motion.p>
          <div className="about-core-values-grid">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="about-value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={i}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="about-value-card-icon">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="about-value-card-title">{item.title}</h4>
                  <p className="about-value-card-desc">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="about-opc-wrap">
          <section className="about-opc-section">
            <motion.h2
            className="about-opc-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeApple }}
          >
            Devfyzo Soft (OPC) Private Limited
          </motion.h2>
          <motion.p
            className="about-opc-desc"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: easeApple }}
          >
            As a One Person Company (OPC), we combine the agility and personalized attention of a startup with the professionalism and commitment of an established firm. Every project receives dedicated focus and expertise.
            </motion.p>
          </section>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeApple }}
        >
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </motion.span>
        </motion.div>
      </section>
    </>
  );
}
