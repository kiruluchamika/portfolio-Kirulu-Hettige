import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Linkedin, ChevronDown, Code2, Database, Layout, Server, Terminal, Github, ExternalLink, GraduationCap, Briefcase, GitBranch } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import GlassStatCard from '../components/GlassStatCard';
import GlassCard from '../components/GlassCard';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

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
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration, real-time inventory, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'Spring Boot REST API with JWT authentication, role-based access control, and microservices architecture.',
      tech: ['Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based messaging app with typing indicators, read receipts, and file sharing capabilities.',
      tech: ['Socket.io', 'React', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop',
      github: '#',
      demo: '#',
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
      description: 'GPA: 3.8/4.0 - Focused on software architecture, algorithms, and full-stack development.',
    },
    {
      type: 'work',
      title: 'Software Engineering Intern',
      organization: 'Tech Company',
      period: 'Summer 2024',
      description: 'Developed RESTful APIs and improved application performance by 40% using caching strategies.',
    },
    {
      type: 'work',
      title: 'Freelance Full-Stack Developer',
      organization: 'Self-Employed',
      period: '2023 - Present',
      description: 'Built custom web applications for clients using MERN stack and Spring Boot.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center">
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

              <motion.p
                variants={itemVariants}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.4 }}
                className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
              >
                Full-Stack Developer specializing in <motion.span
                  className="text-blue-500 dark:text-blue-400 font-semibold"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >MERN Stack</motion.span> and <motion.span
                  className="text-blue-500 dark:text-blue-400 font-semibold"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 1,
                  }}
                >Spring Boot</motion.span>. 
                Passionate about building scalable applications, clean code, and innovative solutions.
              </motion.p>

              <motion.div
                variants={itemVariants}
                transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/projects">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-blue-600/50 transition-all"
                    >
                      <Code2 className="w-5 h-5 mr-2" />
                      View Projects
                    </Button>
                  </motion.div>
                </Link>

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
                    src="/src/assets/myimg.png"
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
                    { Icon: Github, href: 'https://github.com/kiruluchamika', color: 'hover:bg-gray-800' },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/kirulu-chamika-b9337b33b/', color: 'hover:bg-blue-700' },
                    { Icon: Instagram, href: 'https://www.instagram.com/chami_x_mmii/', color: 'hover:bg-pink-600' },
                    { Icon: Facebook, href: 'https://web.facebook.com/kirulu.chamika', color: 'hover:bg-blue-600' },
                  ].map(({ Icon, href, color }, index) => (
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
                      className={`p-3 rounded-full bg-gray-200/80 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 ${color} transition-all shadow-lg`}
                      aria-label={`Social ${index}`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: 5,
                          delay: index * 0.5,
                        }}
                      >
                        <Icon className="w-5 h-5 text-gray-700 dark:text-white" />
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
        </div>
      </section>

      {/* Section 5: Featured Projects */}
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
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Experience & Education */}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 border-0 text-white">
              <CardContent className="pt-12 pb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Build Something Amazing
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-base font-semibold rounded-full"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get In Touch
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-full"
                    asChild
                  >
                    <a href="#" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
