import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Linkedin, ChevronDown, Code2, Database, Layout, Server, Terminal, Github, ExternalLink, GraduationCap, Briefcase, GitBranch } from 'lucide-react';
import imgCarepro from '../assets/carepro.jpeg';
import imgRideease from '../assets/rideease.png';
import imgGgm from '../assets/ggm.png';
import myImg from '../assets/myimg.png';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import GlassStatCard from '../components/GlassStatCard';
import GlassCard from '../components/GlassCard';
import GitHubReadmeStats from '../components/GitHubReadmeStats';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  const techStack = {
    frontend: [
      { name: 'React.js', icon: Code2, level: 90 },
      { name: 'TypeScript', icon: Terminal, level: 85 },
      { name: 'Tailwind CSS', icon: Layout, level: 90 },
      { name: 'Next.js', icon: Code2, level: 80 },
    ],
    backend: [
      { name: 'Node.js', icon: Server, level: 85 },
      { name: 'Spring Boot', icon: Server, level: 80 },
      { name: 'Express.js', icon: Server, level: 85 },
      { name: 'REST APIs', icon: Database, level: 90 },
    ],
    database: [
      { name: 'MongoDB', icon: Database, level: 85 },
      { name: 'PostgreSQL', icon: Database, level: 80 },
      { name: 'MySQL', icon: Database, level: 75 },
      { name: 'Redis', icon: Database, level: 70 },
    ],
    tools: [
      { name: 'Git & GitHub', icon: Github, level: 90 },
      { name: 'Docker', icon: Server, level: 75 },
      { name: 'VS Code', icon: Code2, level: 95 },
      { name: 'Postman', icon: Terminal, level: 85 },
    ],
  };

  const projects = [
    {
      title: 'Golden Grain Mill',
      description:
        'Full‑stack platform for paddy supply and rice sales with role‑based dashboards, Stripe test payments, notifications, and analytics.',
      tech: ['React', 'TypeScript', 'Spring Boot', 'MySQL'],
      image: imgGgm,
      github: 'https://github.com/kiruluchamika/Golden-Grain-Mill-ITP-Project',
      demo: 'https://github.com/kiruluchamika/Golden-Grain-Mill-ITP-Project',
    },
    {
      title: 'RideEase — Transport System',
      description:
        'Ride‑hailing web app built with Java Servlets/JSP and MySQL; supports Passenger, Driver, and Admin portals with role‑based features.',
      tech: ['Java', 'JSP/Servlets', 'MySQL', 'Tailwind'],
      image: imgRideease,
      github: 'https://github.com/kiruluchamika/RideEase-Transport-System-OOP-Project',
      demo: 'https://github.com/kiruluchamika/RideEase-Transport-System-OOP-Project',
    },
    {
      title: 'CarePro — Health Insurance',
      description:
        'Dynamic health insurance management system with auth, plans, claims, and admin dashboards built for SLIIT IWT module.',
      tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      image: imgCarepro,
      github: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
      demo: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '2+', icon: Code2 },
    { label: 'Projects Completed', value: '15+', icon: GitBranch },
    { label: 'Technologies Mastered', value: '20+', icon: Server },
    { label: 'GitHub Contributions', value: '500+', icon: Github },
  ];

  const experience = [
    {
      type: 'education',
      title: 'B.Sc. in Software Engineering',
      organization: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2022 - Present',
      description: 'GPA: 3.7/4.0 - Focused on software architecture, algorithms, and full-stack development.',
    },
    {
      type: 'education',
      title: 'Secondary Education',
      organization: 'St. Servatius College',
      period: 'Pre‑University',
      description: 'Completed secondary education with strong focus on mathematics and computing fundamentals.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center z-10" data-speed="0.9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left space-y-8 z-10"
            >
              <motion.div
                variants={itemVariants}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <motion.p
                  className="text-blue-500 dark:text-blue-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Software Engineering Undergraduate @ SLIIT
                </motion.p>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-tight"
              >
                {["Kirulu", "Chamika"].map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: wordIndex * 0.2,
                      ease: [0.6, 0.05, 0.01, 0.9],
                    }}
                  >
                    {word}
                    {wordIndex === 0 && <br />}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Availability badge */}
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30 w-fit"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Work
              </motion.div>

              <motion.p
                variants={itemVariants}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.4 }}
                className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
              >
                I'm a full‑stack developer comfortable across frontend and backend, with a focus on
                building clear, maintainable code and thoughtful user experiences. I enjoy learning new
                tools, shipping polished features, and solving real problems with simple, scalable solutions.
              </motion.p>

              {/* Typing Effect */}
              <motion.div
                variants={itemVariants}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.5 }}
                className="text-xl md:text-2xl font-light text-gray-800 dark:text-gray-200"
              >
                <span className="mr-2">I love</span>
                <Typewriter
                  words={[
                    'React & TypeScript',
                    'Building Full-Stack Apps',
                    'Clean Architecture',
                    'Problem Solving',
                    'Spring Boot & Node.js',
                    'Creating User Experiences',
                    'MongoDB & PostgreSQL',
                    'Learning New Technologies',
                    'Cloud Solutions',
                    'Open Source',
                  ]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a href="/resume.pdf" download>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-blue-600/50 transition-all"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </Button>
                  </motion.div>
                </a>

                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-400 dark:border-gray-600 hover:border-gray-600 dark:hover:border-gray-400 bg-white/80 dark:bg-transparent text-gray-900 dark:text-white px-8 py-6 text-base font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Me
                    </Button>
                  </motion.div>
                </Link>

              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Your profile image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={myImg}
                    alt="Kirulu Chamika"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  {/* Smooth fade effect at bottom - blends with background */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-50 via-blue-50/60 to-transparent dark:from-blue-950 dark:via-blue-950/60" />
                </div>

                {/* Floating Social Icons */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4"
                >
                  {[
                    { 
                      Icon: Github, 
                      href: 'https://github.com/kiruluchamika', 
                      brandColor: 'rgb(31 41 55)',
                    },
                    { 
                      Icon: Linkedin, 
                      href: 'https://www.linkedin.com/in/kirulu-hettige-b9337b33b/', 
                      brandColor: 'rgb(37 99 235)',
                    },
                    { 
                      Icon: Instagram, 
                      href: 'https://www.instagram.com/chami_x_mmii/', 
                      brandColor: 'linear-gradient(135deg, rgb(147 51 234) 0%, rgb(236 72 153) 100%)',
                    },
                    { 
                      Icon: Facebook, 
                      href: 'https://web.facebook.com/kirulu.chamika', 
                      brandColor: 'rgb(37 99 235)',
                    },
                  ].map(({ Icon, href, brandColor }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 1.4 + index * 0.1,
                        duration: 0.5,
                        ease: [0.6, 0.05, 0.01, 0.9],
                      }}
                      whileHover={{
                        scale: 1.15,
                        x: -8,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400, damping: 17 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="relative p-3 rounded-full backdrop-blur-sm shadow-lg animate-breathe overflow-hidden"
                      aria-label={`Social ${index}`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {/* Animated background layer */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          background: [
                            'rgba(255, 255, 255, 0.1)',
                            brandColor.startsWith('linear') ? brandColor : `${brandColor}`,
                            'rgba(255, 255, 255, 0.1)',
                          ],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          delay: index * 0.8,
                          ease: "easeInOut",
                        }}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                        }}
                      />
                      
                      {/* Glass overlay with ring */}
                      <div className="absolute inset-0 rounded-full ring-1 ring-white/20 dark:ring-white/10" />

                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut",
                        }}
                        className="relative z-10"
                      >
                        <Icon className="w-5 h-5 text-white dark:text-white" />
                      </motion.div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronDown className="w-8 h-8 text-gray-500 dark:text-white/60" />
          </div>
        </motion.div>
      </section>

      {/* Section 2: Statistics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassStatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About Me */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate software engineer with expertise in modern web technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GlassCard className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Technical Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    Currently pursuing a Bachelor's degree in Software Engineering with a strong focus on 
                    full-stack development, system design, and software architecture principles.
                  </p>
                  <p>
                    Experienced in building scalable web applications using the MERN stack (MongoDB, Express.js, 
                    React, Node.js) and Spring Boot framework. Strong understanding of RESTful API design, 
                    database optimization, and modern DevOps practices.
                  </p>
                  <p>
                    Passionate about clean code, design patterns, and staying updated with the latest 
                    technologies in the software development ecosystem.
                  </p>
                </CardContent>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GlassCard className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    What I Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <Code2 className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Frontend Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Building responsive, interactive UIs with React, TypeScript, and modern CSS frameworks
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                      }}
                    >
                      <Server className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Backend Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Creating robust APIs and server-side logic using Node.js, Express, and Spring Boot
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <Database className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Database Design</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Designing efficient database schemas for both SQL and NoSQL databases
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Tech Stack */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white capitalize">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {techs.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                              }}
                            >
                              <tech.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                            </motion.div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {tech.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* GitHub Readme-style stats */}
          <div className="mt-12">
            <GitHubReadmeStats username="kiruluchamika" />
          </div>
        </div>
      </section>

  {/* Section 5: Featured Projects (no parallax to avoid overlap) */}
  <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Some of my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <GlassCard className="overflow-hidden h-full hover:shadow-2xl transition-all group">
                  {/* Project Image */}
                  <motion.div
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/projects">
              <Button
                variant="ghost"
                size="lg"
                className="liquid-glass liquid-glass-hover rounded-xl px-8 py-6 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400/50 hover:ring-blue-300/70 hover:text-blue-400 shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:shadow-[0_18px_50px_rgba(59,130,246,0.25)] transition-all"
              >
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

  {/* Section 6: Experience & Education (no parallax to avoid overlap) */}
  <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My journey in software engineering
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-900" />
                  <GlassCard>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </CardTitle>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {item.organization}
                          </p>
                        </div>
                        {item.type === 'education' ? (
                          <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.period}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* soft glow ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-indigo-400/30 blur-2xl" aria-hidden />
              <Card className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 dark:ring-white/10 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white shadow-2xl">
                <CardContent className="pt-12 pb-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                    Let's Build Something Amazing
                  </h2>
                  <p className="text-base md:text-lg text-white/90 mb-9 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    {/* Get In Touch - light pill */}
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="group relative rounded-full bg-white/95 text-blue-700 hover:bg-white px-7 sm:px-8 py-6 text-base font-semibold shadow-lg ring-1 ring-blue-300 hover:shadow-blue-500/20 transition-all"
                      >
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
                          <Mail className="w-3.5 h-3.5" />
                        </span>
                        Get In Touch
                      </Button>
                    </Link>

                    {/* Download resume - dark pill with blue outline */}
                    <Button
                      size="lg"
                      variant="ghost"
                      className="rounded-full bg-black/80 text-white hover:bg-black/85 px-7 sm:px-8 py-6 text-base font-semibold shadow-xl ring-1 ring-blue-300/70 hover:ring-blue-200 transition-all"
                      asChild
                    >
                      <a href="/resume.pdf" download>
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30">
                          <Download className="w-3.5 h-3.5" />
                        </span>
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Download({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
