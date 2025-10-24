import GlassCard from './GlassCard';

export default function GitHubReadmeStats({ username = 'kiruluchamika' }: { username?: string }) {
  const theme = 'tokyonight';
  const border = 'hide_border=true';

  const stats = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&theme=${theme}&${border}`;
  const streak = `https://streak-stats.demolab.com?user=${username}&theme=${theme}&${border}`;
  const langs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=${theme}&${border}`;
  const graph = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&${border}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GlassCard className="p-4 flex items-center justify-center bg-black/10">
        <img src={stats} alt="GitHub Stats" className="max-w-full h-auto" loading="lazy" />
      </GlassCard>
      <GlassCard className="p-4 flex items-center justify-center bg-black/10">
        <img src={streak} alt="GitHub Streak" className="max-w-full h-auto" loading="lazy" />
      </GlassCard>
      <GlassCard className="p-4 flex items-center justify-center bg-black/10">
        <img src={langs} alt="Top Languages" className="max-w-full h-auto" loading="lazy" />
      </GlassCard>
      <GlassCard className="p-4 flex items-center justify-center bg-black/10 md:col-span-1">
        <img src={graph} alt="Activity Graph" className="max-w-full h-auto" loading="lazy" />
      </GlassCard>
    </div>
  );
}
