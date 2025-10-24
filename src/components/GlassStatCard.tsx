import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export type GlassStatCardProps = {
  icon: LucideIcon;
  value: string | number;
  label: string;
};

export default function GlassStatCard({ icon: Icon, value, label }: GlassStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden"
    >
      <div className="liquid-glass liquid-glass-hover rounded-2xl border py-8 px-6 text-center">
        {/* subtle inner glow blob */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-400/10 to-indigo-400/10 blur-3xl" />

        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2 }}
        >
          <Icon className="w-8 h-8 mx-auto mb-3 text-blue-500 dark:text-blue-400" />
        </motion.div>
        <motion.p
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1 tracking-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.45, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.p>
        <p className="text-sm text-gray-700/80 dark:text-gray-300/80">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
