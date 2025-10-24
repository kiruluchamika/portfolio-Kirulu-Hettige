import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import GlassCard from '../components/GlassCard';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import imgCarepro from '../assets/carepro.jpeg';
import imgGgm from '../assets/ggm.png';
import imgRideease from '../assets/rideease.png';
import imgPay from '../assets/pay.png';
import imgDigicare from '../assets/digicare.png';
import imgFav from '../assets/fav1.png';

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'Web' | 'Mobile';
  tags: string[];
  progress: number;
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  // Web projects
  {
    id: 1,
    title: 'Golden Grain Mill',
    description:
      'Full‑stack system for paddy supply and rice sales with role‑based dashboards, notifications, analytics, and Stripe test payments.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'Spring Boot', 'MySQL', 'Stripe'],
    progress: 100,
    image: imgGgm,
    github: 'https://github.com/kiruluchamika/Golden-Grain-Mill-ITP-Project',
  },
  {
    id: 2,
    title: 'RideEase – Transport System',
    description:
      'Ride‑hailing web app using Java Servlets/JSP and MySQL with Passenger, Driver, and Admin portals.',
    category: 'Web',
    tags: ['Java', 'JSP/Servlets', 'MySQL', 'Tailwind'],
    progress: 95,
    image: imgRideease,
    github: 'https://github.com/kiruluchamika/RideEase-Transport-System-OOP-Project',
  },
  {
    id: 3,
    title: 'CarePro – Health Insurance',
    description:
      'Dynamic PHP app for health insurance plans, claims, and admin dashboards — built for SLIIT IWT module.',
    category: 'Web',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    progress: 100,
    image: imgCarepro,
    github: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
  },
  {
    id: 4,
    title: 'Sandbox Payment Gateway',
    description:
      'Simple PayHere sandbox payment flow with card testing, secure front-end and PHP processing.',
    category: 'Web',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    progress: 90,
    image: imgPay,
    github: 'https://github.com/kiruluchamika/Simple-Sandbox-Payment-Gateway-Integration',
  },
  {
    id: 5,
    title: 'Simple MERN Inventory System',
    description:
      'Inventory dashboard with items, suppliers, alerts, and PDF reports using React + TypeScript and a REST API backend.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'Node.js', 'SQL'],
    progress: 85,
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/kiruluchamika/Simple_MERN_Inventory_System',
  },
  {
    id: 6,
    title: 'Online Shopping Store (Servlets)',
    description:
      'Simple Java Servlets-based CRUD store with admin and client sides.',
    category: 'Web',
    tags: ['Java', 'Servlets', 'JSP', 'MySQL'],
    progress: 70,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/kiruluchamika/OnlineShoppingStore-simple-java-servlet-project',
  },
  {
    id: 7,
    title: 'This Portfolio',
    description:
      'React + TypeScript + Vite portfolio with dark mode, glassmorphism, and GitHub insights.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'],
    progress: 100,
    image: imgFav,
    github: 'https://github.com/kiruluchamika/portfolio-Kirulu-Hettige',
  },
  // Mobile apps
  {
    id: 8,
    title: 'Golden Grain Go (Mobile)',
    description:
      'Prototype Android app for rice & mill shopping flow — UI and navigation only (no backend).',
    category: 'Mobile',
    tags: ['Kotlin', 'Android', 'Material 3'],
    progress: 60,
    image: imgGgm,
    github: 'https://github.com/kiruluchamika/Golden_Grain_Go_MobileApp',
  },
  {
    id: 9,
    title: 'Digi‑Care Habit Tracker',
    description:
      'Android wellness app with habit tracking, mood journal, hydration reminders, and smart notifications.',
    category: 'Mobile',
    tags: ['Kotlin', 'Android', 'Jetpack', 'WorkManager'],
    progress: 75,
    image: imgDigicare,
    github: 'https://github.com/kiruluchamika/Habbit_Tracker_MobileApp_Kotlin',
  },
];

const categories: Array<'All' | 'Web' | 'Mobile'> = ['All', 'Web', 'Mobile'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web' | 'Mobile'>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing expertise in full-stack development, modern frameworks, and UI/UX design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 self-center mr-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Completion
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
