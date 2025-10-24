import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Briefcase, CheckCircle2 } from 'lucide-react';
import { CardContent } from '../components/ui/card';
import GlassCard from '../components/GlassCard';

type TimelineItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: typeof GraduationCap;
};

const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Backend Development Internship',
    organization: 'Tech Solutions Inc.',
    description: 'Developed RESTful APIs using Spring Boot and implemented microservices architecture for enterprise applications.',
    icon: Briefcase,
  },
  {
    year: '2023',
    title: 'Full Stack Development Course',
    organization: 'Online Learning Platform',
    description: 'Completed comprehensive MERN stack course with hands-on projects and industry-standard best practices.',
    icon: Award,
  },
  {
    year: '2022',
    title: 'Web Development Bootcamp',
    organization: 'Code Academy',
    description: 'Intensive 12-week program covering modern web technologies, responsive design, and agile methodologies.',
    icon: Code,
  },
  {
    year: '2021',
    title: 'Bachelor of Software Engineering',
    organization: 'University Name',
    description: 'Started undergraduate studies in Software Engineering with focus on data structures, algorithms, and software design patterns.',
    icon: GraduationCap,
  },
];

const metrics = [
  { label: 'Projects Completed', value: '25+', color: 'from-blue-600 to-cyan-600' },
  { label: 'Technologies Mastered', value: '15+', color: 'from-cyan-600 to-teal-600' },
  { label: 'GitHub Contributions', value: '500+', color: 'from-teal-600 to-green-600' },
  { label: 'Happy Clients', value: '10+', color: 'from-green-600 to-emerald-600' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer dedicated to building elegant solutions that make a difference.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <GlassCard>
            <CardContent className="p-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm <strong>Kirulu Chamika</strong>, an undergraduate <strong>Software Engineering student @ SLIIT</strong> with a passion for
                  full‑stack development, UI design, and problem solving. I love crafting clean, scalable apps and delightful user experiences.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mt-6 list-none p-0">
                  {[ 
                    'Exploring full‑stack development using modern tools & frameworks',
                    'Currently working with React, Node.js, Spring Boot, and Next.js',
                    'Skilled in Web + Mobile UI/UX Design',
                    'Learning & building with Java Servlets, MySQL Workbench, and MongoDB',
                    'Languages: PHP, HTML, CSS, JavaScript, C, C++, Java',
                    'Practicing problem solving, DSA, and contributing to Open Source'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Achievement Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <GlassCard className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </div>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education & Experience
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400" />

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative pl-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="absolute left-5 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>

                    <GlassCard className="hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                          {item.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </CardContent>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
