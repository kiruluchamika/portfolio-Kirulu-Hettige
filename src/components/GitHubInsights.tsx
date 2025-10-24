import { useEffect, useMemo, useState } from 'react';
import GlassCard from './GlassCard';

type Repo = {
  stargazers_count: number;
  language: string | null;
};

type User = {
  followers: number;
  login: string;
};

type LangSlice = { name: string; percent: number };

type Insights = {
  login: string;
  followers: number;
  stars: number;
  lastYearContributions: number;
  languages: LangSlice[];
};

async function fetchUser(username: string, token?: string): Promise<User> {
  const r = await fetch(`https://api.github.com/users/${username}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!r.ok) throw new Error('Failed to fetch user');
  const j = await r.json();
  return { followers: j.followers ?? 0, login: j.login ?? username } as User;
}

async function fetchRepos(username: string, token?: string): Promise<Repo[]> {
  const all: Repo[] = [];
  for (let page = 1; page <= 2; page++) {
    const r = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated&page=${page}`,
      { headers: token ? { Authorization: `Bearer ${token}` } : {} }
    );
    if (!r.ok) break;
    const j = (await r.json()) as any[];
    if (!j.length) break;
    for (const repo of j) {
      all.push({
        stargazers_count: repo.stargazers_count ?? 0,
        language: repo.language ?? null,
      });
    }
    if (j.length < 100) break;
  }
  return all;
}

async function fetchContributions(username: string): Promise<number> {
  try {
    // Public API that scrapes GitHub contribution calendar (no token needed)
    const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      headers: { 'cache-control': 'max-age=3600' },
    });
    if (!r.ok) return 0;
    const j = await r.json();
    // The API returns object with years: [{ total, ... }]
    const years = j.years as Array<{ total?: number }> | undefined;
    if (Array.isArray(years) && years.length) return years[0]?.total ?? 0;
    // Some versions return { contributions: { total } }
    if (j?.contributions?.total) return j.contributions.total as number;
    return 0;
  } catch {
    return 0;
  }
}

function computeInsights(user: User, repos: Repo[], contribs: number): Insights {
  const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  const langCounts = new Map<string, number>();
  for (const r of repos) {
    if (!r.language) continue;
    langCounts.set(r.language, (langCounts.get(r.language) || 0) + 1);
  }
  const total = Array.from(langCounts.values()).reduce((s, v) => s + v, 0) || 1;
  const languages = Array.from(langCounts.entries())
    .map(([name, count]) => ({ name, percent: Math.round((count / total) * 100) }))
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 6);

  return {
    login: user.login,
    followers: user.followers,
    stars,
    lastYearContributions: contribs,
    languages,
  };
}

export default function GitHubInsights({ username = 'kiruluchamika' }: { username?: string }) {
  const token = (import.meta as any).env?.VITE_GITHUB_TOKEN as string | undefined;
  const [data, setData] = useState<Insights | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const [user, repos, contributions] = await Promise.all([
          fetchUser(username, token),
          fetchRepos(username, token),
          fetchContributions(username),
        ]);
        if (!alive) return;
        setData(computeInsights(user, repos, contributions));
      } catch (e: any) {
        if (!alive) return;
        setError(e?.message || 'Failed to load GitHub data');
      } finally {
        if (alive) setLoading(false);
      }
    }
    run();
    return () => {
      alive = false;
    };
  }, [username, token]);

  const topLangs = useMemo(() => data?.languages ?? [], [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold mb-4">GitHub Stats (last 12 months)</h3>
        {loading ? (
          <p className="text-sm opacity-80">Loading…</p>
        ) : error ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : data ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <Stat label="Contributions" value={data.lastYearContributions} />
            <Stat label="Stars" value={data.stars} />
            <Stat label="Followers" value={data.followers} />
          </div>
        ) : null}
        {!loading && data && (
          <p className="mt-3 text-xs opacity-70">@{data.login}</p>
        )}
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold mb-4">Most Used Languages</h3>
        {loading ? (
          <p className="text-sm opacity-80">Loading…</p>
        ) : error ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : (
          <ul className="space-y-3">
            {topLangs.map((l) => (
              <li key={l.name}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>{l.name}</span>
                  <span className="opacity-80">{l.percent}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    style={{ width: `${l.percent}%` }}
                  />
                </div>
              </li>
            ))}
            {topLangs.length === 0 && <li className="text-sm opacity-80">No data</li>}
          </ul>
        )}
      </GlassCard>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs opacity-75">{label}</div>
    </div>
  );
}
