// Pulls public repo info from GitHub at build time (and in `npm run dev`).
// If GitHub can't be reached, the site still builds; the live details are just left out.
import { SITE } from '../config';

export interface Repo {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushed: Date;
  fork: boolean;
  archived: boolean;
}

const user = SITE.github.replace(/\/+$/, '').split('/').pop()!;
let cache: Promise<Repo[]> | undefined;

export function getRepos(): Promise<Repo[]> {
  cache ??= load();
  return cache;
}

async function load(): Promise<Repo[]> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'curfewshino-site' };
  const token = process.env.GITHUB_TOKEN; // set automatically in the deploy workflow
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&type=owner&sort=pushed`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data: any[] = await res.json();
    return data.map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      pushed: new Date(r.pushed_at),
      fork: r.fork,
      archived: r.archived,
    }));
  } catch (e) {
    console.warn(`[github] Couldn't load repos, building without live GitHub details: ${e}`);
    return [];
  }
}

/** "https://github.com/Curfewshino/PicoPS2PopN" -> "picops2popn" */
export const repoKey = (url: string) => url.replace(/\/+$/, '').split('/').pop()!.toLowerCase();

export async function repoFor(url?: string): Promise<Repo | undefined> {
  if (!url) return undefined;
  return (await getRepos()).find((r) => r.name.toLowerCase() === repoKey(url));
}

export const formatUpdated = (d: Date) =>
  `Updated ${d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}`;
