import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import GlassCard from '../components/GlassCard';

type Repo = {
  name: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

type User = {
  public_repos: number;
  followers: number;
  following: number;
};

export default function Skills() {
  const username = 'kiruluchamika';
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        if (!uRes.ok || !rRes.ok) throw new Error('GitHub API rate limited or unavailable');
        const u: User = await uRes.json();
        const r: Repo[] = await rRes.json();
        if (!cancelled) {
          setUser(u);
          setRepos(r);
        }
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to fetch GitHub data');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totals = useMemo(() => {
    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    const langCounts = new Map<string, number>();
    repos.forEach((r) => {
      const lang = r.language ?? 'Other';
      langCounts.set(lang, (langCounts.get(lang) || 0) + 1);
    });
    const topLanguages = Array.from(langCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
    const nonForkRepos = repos.filter((r) => !r.fork).length;
    return { totalStars, topLanguages, nonForkRepos };
  }, [repos]);

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

        {/* Skills from skillicons.dev (real stack) */}
        <div className="space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 mr-4 rounded-full" />
              Languages
            </h2>
            <GlassCard>
              <CardContent className="p-6 flex justify-center">
                <img
                  src="https://skillicons.dev/icons?i=c,cpp,java,php,js,ts,html,css&perline=16"
                  alt="Languages"
                  className="max-w-full h-auto"
                />
              </CardContent>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 mr-4 rounded-full" />
              Frontend / UI
            </h2>
            <GlassCard>
              <CardContent className="p-6 flex justify-center">
                <img
                  src="https://skillicons.dev/icons?i=react,nextjs,tailwind,figma,vite&perline=16"
                  alt="Frontend"
                  className="max-w-full h-auto"
                />
              </CardContent>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 mr-4 rounded-full" />
              Backend / DevOps
            </h2>
            <GlassCard>
              <CardContent className="p-6 flex justify-center">
                <img
                  src="https://skillicons.dev/icons?i=nodejs,express,spring,mysql,mongodb,postman,git,github,androidstudio&perline=16"
                  alt="Backend"
                  className="max-w-full h-auto"
                />
              </CardContent>
            </GlassCard>
          </motion.div>
        </div>

        {/* GitHub-derived quick insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlassCard>
            <CardHeader>
              <CardTitle className="text-xl">GitHub Overview</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-gray-600 dark:text-gray-400">Loading GitHub data…</p>
              ) : error ? (
                <p className="text-red-600 dark:text-red-400">{error}</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      {user?.public_repos ?? 0}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Public repos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      {totals.totalStars}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total stars</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      {user?.followers ?? 0}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                  </div>

                  <div className="sm:col-span-3">
                    <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Top languages (by repo count)</h4>
                    <div className="flex flex-wrap gap-2">
                      {totals.topLanguages.map(([lang, count]) => (
                        <span key={lang} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">
                          {lang}: {count}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </GlassCard>
        </motion.div>

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
