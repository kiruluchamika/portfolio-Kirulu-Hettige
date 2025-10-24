import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import GlassCard from '../components/GlassCard';
import { Progress } from '../components/ui/progress';

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: string;
};

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: '📘' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '🎨' },
  { name: 'Node.js', level: 88, category: 'Backend', icon: '🟢' },
  { name: 'Express', level: 87, category: 'Backend', icon: '🚂' },
  { name: 'MongoDB', level: 85, category: 'Database', icon: '🍃' },
  { name: 'Java', level: 90, category: 'Backend', icon: '☕' },
  { name: 'Spring Boot', level: 88, category: 'Backend', icon: '🍀' },
  { name: 'PostgreSQL', level: 82, category: 'Database', icon: '🐘' },
  { name: 'Git', level: 93, category: 'Tools', icon: '📦' },
  { name: 'Docker', level: 80, category: 'Tools', icon: '🐳' },
  { name: 'Figma', level: 85, category: 'Design', icon: '🎭' },
];

const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Design'];

export default function Skills() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across various technologies and tools.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(skill => skill.category === category);

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 mr-4 rounded-full" />
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <GlassCard className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.span
                              className="text-3xl"
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="text-lg">{skill.name}</span>
                          </div>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress
                          value={skill.level}
                          className="h-3"
                        />
                      </CardContent>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 border-none text-white">
            <CardContent className="p-8 text-center">
              <motion.h3
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: 'spring' }}
                className="text-2xl font-bold mb-4"
              >
                Always Learning, Always Growing
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-blue-50 max-w-2xl mx-auto"
              >
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks,
                tools, and best practices to stay at the forefront of software development.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
