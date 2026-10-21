import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const getPublicAsset = (fileName) => `/assets/img/${encodeURIComponent(fileName)}`;

const formalPicture = getPublicAsset('formal picture.jpg');
const kaffeineWebsite = getPublicAsset('Kaffeine-Website.png');
const globalVisaWebsite = getPublicAsset('GlobalVisa-Website.png');
const valorantWebsite = getPublicAsset('Valorant-Website.png');
const introCybersecurityCert = getPublicAsset('Introduction to Cybersecurity.png');
const gitGitHubSeminarCert = getPublicAsset('Git and GitHub Seminar.jpg');
const cloudAwsCert = getPublicAsset('Basics of Cloud Computing with AWS.jpg');
const azureAiCert = getPublicAsset('Azure AI Fundamentals.jpg');
const securityIdentityCert = getPublicAsset('Security, Compliance, and Identity Fundamentals.jpg');

const Motion = motion;

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/30 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/30 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 60, -30, 0],
          y: [0, 40, -40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-purple-600/20 blur-[100px]"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)] mix-blend-overlay"></div>
    </div>
  );
};

const Section = ({ children, id, className, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      className={`relative z-10 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-['Inter'] selection:bg-cyan-500/30 overflow-x-hidden">
      <Background />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-['Outfit'] font-bold tracking-tight text-white z-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            KG<span className="text-cyan-400">.</span>
          </motion.a>

          <div className={`fixed inset-0 bg-slate-950/95 flex flex-col items-center justify-center transition-transform duration-300 md:static md:bg-transparent md:flex-row md:transform-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
            <ul className="flex flex-col md:flex-row gap-8 md:gap-8 items-center">
              {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg md:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:scale-110 inline-block transition-all uppercase tracking-wider relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <button className="md:hidden text-2xl text-slate-200 z-50" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-large-line" : "ri-menu-3-line"}></i>
          </button>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative z-10">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex flex-col items-start gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Open to entry-level roles
              </motion.div>

              <div className="min-h-[140px] md:min-h-[180px]">
                <h1 className="text-5xl md:text-7xl font-['Outfit'] font-extrabold leading-tight text-white mb-2">
                  <span className="block mb-2">Hi, I'm</span>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 inline-block">
                    <TypeAnimation
                      sequence={[
                        'Keithlene',
                        2000,
                        'a Web Developer',
                        2000,
                        'Computer Science Graduate',
                        2000,
                        'UI/UX Enthusiast',
                        2000,
                        'Frontend Developer',
                        2000,
                        'Laravel Artisan',
                      ]}
                      wrapper="span"
                      speed={50}
                      className="inline-block"
                      repeat={Infinity}
                    />
                  </div>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl md:text-2xl font-light text-slate-300 min-h-[60px]"
              >
                <span className="font-semibold text-white">Computer Science</span> graduate & Frontend Developer.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-slate-400 max-w-lg leading-relaxed"
              >
                Building thoughtful, responsive interfaces with React.js while growing across the modern web stack.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/assets/pdf/Galingana_Keithlene_CV%20I.pdf" download="Galingana_Keithlene_CV I.pdf"
                  className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center gap-2"
                >
                  <i className="ri-download-2-line text-lg group-hover:-translate-y-1 transition-transform"></i> Download CV
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="group px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm border border-slate-700 text-white font-medium transition-all duration-300 flex items-center gap-2"
                >
                  View Projects <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex gap-4 mt-6"
              >
                <a href="https://www.linkedin.com/in/keithlene-galingana-958639397/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 text-xl border border-slate-700 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="https://github.com/Rarehyacint" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 text-xl border border-slate-700 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  <i className="ri-github-fill"></i>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="order-1 md:order-2 flex justify-center relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute inset-2 bg-slate-900 rounded-3xl overflow-hidden border border-slate-700/50 z-10 shadow-2xl flex items-end justify-center"
                >
                  <img src={formalPicture} alt="Keithlene Galingana" className="w-full h-full zoom-out object-cover object-top-10 opacity-90 hover:opacity-100 transition-opacity" />
                </motion.div>
                {/* Decorative elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 text-5xl text-cyan-500/40 z-20 rotate-12 backdrop-blur-sm bg-slate-900/40 rounded-xl p-2 border border-slate-700"
                >
                  <i className="ri-code-s-slash-fill"></i>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 text-6xl text-indigo-500/40 z-20 -rotate-12 backdrop-blur-sm bg-slate-900/40 rounded-xl p-2 border border-slate-700"
                >
                  <i className="ri-database-2-fill"></i>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <Section id="about" className="py-24 px-6 bg-slate-900/30 backdrop-blur-sm relative border-y border-slate-800/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-slate-800/40 p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-md shadow-2xl hover:border-cyan-500/30 transition-colors">
              <div className="mb-10 text-slate-300 leading-relaxed space-y-4 text-lg">
                <p>
                  I am a <strong className="text-white">Computer Science graduate</strong> with hands-on experience in <strong className="text-cyan-400">web development</strong>, including building user interfaces with <strong className="text-white">React.js</strong> during my frontend internship.
                </p>
                <p>
                  My experience includes <strong className="text-white">MVC architecture</strong>, <strong className="text-white">CRUD operations</strong>, responsive design, debugging, and collaborating on practical web projects.
                </p>
                <p className="text-cyan-200">
                  I am open to <strong className="text-white">entry-level web development roles</strong> where I can contribute, learn new technologies, and grow with a collaborative team.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <motion.i
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="ri-tools-fill text-cyan-400"
                  /> Tech Stack & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Laravel', 'MySQL', 'PostgreSQL', 'Git/GitHub', 'Docker', 'Figma'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-lg bg-slate-900/80 backdrop-blur border border-slate-700 text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS SECTION */}
        <Section id="projects" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-white mb-4">Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Kaffeine Website', label: 'UI/UX Design / Web', desc: 'A warm, modern coffee shop website focused on clear navigation, expressive visual design, and a smooth browsing experience.', img: kaffeineWebsite, link: 'https://kaffeinewebsite-git-main-rarehyacints-projects.vercel.app/' },
                { title: 'Global Visa Website', label: 'UI/UX Design / Web', desc: 'A polished visa assistance website designed to make travel information, services, and next steps easy to discover.', img: globalVisaWebsite, link: 'https://visa-assistance-website-z4gs.vercel.app/' },
                { title: 'Valorant Theme Website', label: 'HTML / CSS / JS', desc: 'A visually striking static website inspired by Valorant, showcasing complex UI styling, responsive layouts, and animations.', img: valorantWebsite, link: 'https://valorant-theme-website.vercel.app/' },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/50 transition-all duration-300"
                >
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="relative block h-56 overflow-hidden">
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                      <span className="absolute bottom-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur border border-slate-700 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2"><i className="ri-external-link-line"></i> Visit website</span>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur border border-slate-700 text-cyan-400 text-xs font-bold rounded-full shadow-lg">{project.label}</span>
                    </a>
                  ) : (
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur border border-slate-700 text-cyan-400 text-xs font-bold rounded-full shadow-lg">{project.label}</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* RESUME SECTION */}
        <Section id="resume" className="py-24 px-6 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-white mb-4">Experience & Credentials</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center"><i className="ri-briefcase-4-fill"></i></span> Experience
                </h3>
                <div className="relative pl-8 border-l-2 border-slate-800 space-y-10">
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-cyan-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    <div className="text-sm font-semibold text-cyan-400 mb-1">Feb 2026 – Mar 2026</div>
                    <h4 className="text-xl font-bold text-white mb-1">Web Developer Intern (Frontend)</h4>
                    <div className="text-slate-400 text-sm mb-3">Bye Bye Pinas Inc. – BGC</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Developed and improved React.js user interface components, helped debug frontend issues, collaborated with the team, and applied responsive design principles.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-cyan-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    <div className="text-sm font-semibold text-cyan-400 mb-1">Aug 2024 – May 2025</div>
                    <h4 className="text-xl font-bold text-white mb-1">Capstone Project – Web-Based Proficiency Exam System</h4>
                    <div className="text-slate-400 text-sm mb-3">Philippine Christian University – Dasmariñas</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Contributed to system documentation, module structure, exam management, analytics, security features, Figma prototypes, and a consistent Docker development environment.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-cyan-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    <div className="text-sm font-semibold text-cyan-400 mb-1">2022 – 2026</div>
                    <h4 className="text-xl font-bold text-white mb-1">Bachelor of Science in Computer Science</h4>
                    <div className="text-slate-400 text-sm mb-3">Philippine Christian University – Dasmariñas</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Built a foundation in software development, web technologies, databases, and problem-solving through academic projects and practical experience.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center"><i className="ri-medal-2-fill"></i></span> Certifications
                </h3>
                <div className="relative pl-8 border-l-2 border-slate-800 space-y-10">
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-indigo-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <div className="text-sm font-semibold text-indigo-400 mb-1">March 2025</div>
                    <h4 className="text-xl font-bold text-white mb-1">Introduction to Cybersecurity, CISCO Networking Academy</h4>
                    <div className="text-slate-400 text-sm mb-3">Philippine Christian University – Dasmariñas</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Successfully completed Cisco Networking Academy’s Introduction to Cybersecurity program.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-slate-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(148,163,184,0.5)]"></div>
                    <div className="text-sm font-semibold text-slate-400 mb-1">February 2024</div>
                    <h4 className="text-xl font-bold text-white mb-1">GIT and GitHub Seminar, AWS Cloud Club Launch</h4>
                    <div className="text-slate-400 text-sm mb-3">Philippine Christian University – Dasmariñas</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Participated in the seminar during the AWSome Cloud Club Launch at PCU Cavite.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-indigo-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <div className="text-sm font-semibold text-indigo-400 mb-1">February 2024</div>
                    <h4 className="text-xl font-bold text-white mb-1">Basics of Cloud Computing with AWS</h4>
                    <div className="text-slate-400 text-sm mb-3">AWS Cloud Club</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Completed an AWS Cloud Club seminar covering the foundations of cloud computing.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-indigo-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <div className="text-sm font-semibold text-indigo-400 mb-1">July 2026</div>
                    <h4 className="text-xl font-bold text-white mb-1">Microsoft Artificial Intelligence Course: Azure AI Fundamentals</h4>
                    <div className="text-slate-400 text-sm mb-3">TESDA Online Program</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Completed foundational coursework in artificial intelligence and Azure AI concepts.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-indigo-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <div className="text-sm font-semibold text-indigo-400 mb-1">July 2026</div>
                    <h4 className="text-xl font-bold text-white mb-1">Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals</h4>
                    <div className="text-slate-400 text-sm mb-3">TESDA Online Program</div>
                    <p className="text-slate-300 text-sm leading-relaxed">Completed foundational coursework in security, compliance, and identity.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-20">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center"><i className="ri-image-2-fill"></i></span> Certificate Gallery
                  </h3>
                  <p className="text-slate-400 mt-2">Select a certificate to view it larger.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Introduction to Cybersecurity', date: 'March 2025', image: introCybersecurityCert },
                  { title: 'Git and GitHub Seminar', date: 'February 2024', image: gitGitHubSeminarCert },
                  { title: 'Basics of Cloud Computing with AWS', date: 'February 2024', image: cloudAwsCert },
                  { title: 'Azure AI Fundamentals', date: 'July 2026', image: azureAiCert },
                  { title: 'Security, Compliance, and Identity Fundamentals', date: 'July 2026', image: securityIdentityCert }
                ].map((certificate) => (
                  <motion.button
                    type="button"
                    key={certificate.title}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedCertificate(certificate)}
                    className="group text-left rounded-2xl bg-slate-800/40 border border-slate-700/50 overflow-hidden hover:border-cyan-500/60 transition-all shadow-lg"
                  >
                    <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                      <img src={certificate.image} alt={`${certificate.title} certificate`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-semibold text-cyan-400 mb-2">{certificate.date}</div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{certificate.title}</h4>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT SECTION */}
        <Section id="contact" className="py-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-white mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-12"></div>

            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              I'm open to entry-level web development opportunities and conversations about technology, product interfaces, and creative projects.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.a
                whileHover={{ y: -5, scale: 1.02 }}
                href="mailto:keithlenegalingana2003@gmail.com"
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-cyan-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-400 text-2xl flex items-center justify-center"><i className="ri-mail-send-line"></i></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <span className="text-slate-400 text-sm">keithlenegalingana2003@gmail.com</span>
                </div>
              </motion.a>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-indigo-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-500/10 text-indigo-400 text-2xl flex items-center justify-center"><i className="ri-phone-line"></i></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <span className="text-slate-400 text-sm">09925690392</span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-cyan-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 text-cyan-400 text-2xl flex items-center justify-center"><i className="ri-map-pin-line"></i></div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <span className="text-slate-400 text-sm">GMA, Cavite, PH</span>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: 'ri-telegram-fill', link: 'https://t.me/rarehyacint' },
                { icon: 'ri-linkedin-fill', link: 'https://www.linkedin.com/in/keithlene-galingana-958639397/' },
                { icon: 'ri-github-fill', link: 'https://github.com/Rarehyacint' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 text-2xl flex items-center justify-center hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:border-cyan-500"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-sm p-6 flex items-center justify-center"
            onClick={() => setSelectedCertificate(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate preview`}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-white text-xl border border-slate-700 hover:bg-cyan-500 transition-colors"
              >
                <i className="ri-close-line"></i>
              </button>
              <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} className="w-full max-h-[78vh] object-contain bg-slate-950" />
              <div className="p-5">
                <div className="text-sm font-semibold text-cyan-400">{selectedCertificate.date}</div>
                <h3 className="text-xl font-bold text-white mt-1">{selectedCertificate.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-8 border-t border-slate-800/50 text-center relative z-10 bg-slate-950/80 backdrop-blur-md">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          © 2026 <span className="font-semibold text-white">Keithlene Galingana</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
