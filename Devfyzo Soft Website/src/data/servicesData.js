export const categories = [
  'All',
  'Mobile App',
  'Web Development',
  'Custom Software',
  'Design Services',
  'Integration Services',
];

export const services = [
  {
    slug: 'mobile-app-development',
    category: 'Mobile App',
    image: 'app-development.png',
    title: 'Mobile App Development',
    desc: 'Crafting intuitive and high-performance mobile applications for iOS and Android platforms.',
    longDesc: 'We build native and cross-platform mobile applications that deliver exceptional user experiences. From concept to launch and beyond, we leverage technologies like React Native, Flutter, and Swift to create apps that are fast, secure, and scalable. Whether you need a consumer app, B2B solution, or enterprise tool, we bring your vision to life with clean architecture and best practices.',
    icon: 'Smartphone',
    tags: ['IOS & ANDROID', 'REACT NATIVE', 'FLUTTER', 'UI/UX DESIGN'],
  },
  {
    slug: 'web-application-development',
    category: 'Web Development',
    image: 'website.png',
    title: 'Web Development',
    desc: 'Building scalable and secure web applications tailored to your business needs.',
    longDesc: 'We design and develop dynamic web applications, from complex enterprise solutions to interactive customer portals. Utilizing modern technologies like React, Angular, Node.js, and Python, we create responsive, high-performing, and secure web platforms that drive engagement and streamline operations.',
    icon: 'Globe',
    tags: ['REACT & NEXT.JS', 'PROGRESSIVE WEB APPS', 'E-COMMERCE'],
  },
  {
    slug: 'custom-software-solutions',
    category: 'Custom Software',
    image: 'software-devlopment.png',
    title: 'Custom Software Solutions',
    desc: 'Developing bespoke software to automate processes and solve unique business challenges.',
    longDesc: 'Our custom software development approach focuses on understanding your workflows and building solutions that fit seamlessly into your operations. We deliver scalable, maintainable systems—from internal tools and dashboards to full-scale enterprise applications—using proven architectures and agile methodologies.',
    icon: 'Code2',
    tags: ['ENTERPRISE ARCHITECTURE', 'SAAS DEVELOPMENT', 'API INTEGRATION'],
  },
  {
    slug: 'ui-ux-design-prototyping',
    category: 'Design Services',
    image: 'uxui.png',
    title: 'UI/UX Design & Prototyping',
    desc: 'Creating engaging and user-friendly interfaces for exceptional digital experiences.',
    longDesc: 'We combine user research, wireframing, and high-fidelity design to create interfaces that users love. Our process includes prototyping and usability testing so we validate ideas early and deliver designs that are both beautiful and effective for your business goals.',
    icon: 'Palette',
    tags: ['USER RESEARCH', 'PROTOTYPING', 'DESIGN SYSTEMS'],
  },
  {
    slug: 'api-development-integration',
    category: 'Integration Services',
    image: 'API.png',
    title: 'API Development & Integration',
    desc: 'Building robust APIs and integrating third-party services for seamless data exchange.',
    longDesc: 'We design and build RESTful and GraphQL APIs that become the backbone of your digital ecosystem. Our integration work connects your systems with third-party services, payment gateways, and internal tools so data flows reliably and securely across your organization.',
    icon: 'Zap',
    tags: ['REST & GRAPHQL', 'THIRD-PARTY INTEGRATION', 'PAYMENT GATEWAYS'],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
