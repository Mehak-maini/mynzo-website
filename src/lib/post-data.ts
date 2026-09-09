export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  publishedAt?: string;
  updatedAt?: string;
  readTime: string;
  img: string | null;
  tag: string;
  tagBg: string;
  tagColor: string;
}

export type PostCard = Omit<Post, 'content'>;

// Normalize legacy English dates without interpreting ambiguous numeric dates.
// Preserve the original display value when an unrecognized date needs editorial review.
export function normalizeDate(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const input = value.trim();
  const iso = /^(\d{4})-(\d{2})-(\d{2})(?:T.*)?$/.exec(input);
  const english = /^([a-z]+)\s+(\d{1,2}),?\s*(\d{4})$/i.exec(input);
  let year: number, month: number, day: number;
  if (iso) {
    [, year, month, day] = iso.map(Number);
  } else if (english) {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const name = english[1].toLowerCase();
    year = Number(english[3]); month = months.findIndex(m => m === name || m.slice(0, 3) === name) + 1; day = Number(english[2]);
  } else return undefined;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (!month || date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return undefined;
  return date.toISOString().slice(0, 10);
}

function displayDate(iso: string | undefined, original: string): string {
  return iso ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`)) : original;
}

export function normalizePost(raw: Record<string, any>, source: 'cms' | 'static'): Post {
  const originalDate = (source === 'cms' ? raw.publishedAt : raw.date) || '';
  const publishedAt = normalizeDate(originalDate);
  return {
    slug: raw.slug, title: raw.title, excerpt: raw.excerpt || '', content: typeof raw.content === 'string' ? raw.content : '',
    author: raw.author || 'Mynzo Team', date: displayDate(publishedAt, originalDate), publishedAt,
    updatedAt: normalizeDate(raw.updatedAt), readTime: raw.readTime || '',
    img: source === 'static' ? raw.img : raw.coverImage?.url || raw.coverImageUrl || null,
    tag: source === 'static' ? raw.tag : raw.category || 'Research',
    tagBg: raw.tagBg || '#EBF7F0', tagColor: raw.tagColor || '#1A7A4A',
  };
}

export function mergePosts(cms: Record<string, any>[], fallback: Record<string, any>[]): Post[] {
  const posts = new Map(fallback.map(p => [p.slug, normalizePost(p, 'static')]));
  for (const raw of cms) {
    if (raw.status === 'published' && typeof raw.slug === 'string' && raw.slug && typeof raw.title === 'string') {
      posts.set(raw.slug, normalizePost(raw, 'cms'));
    }
  }
  return [...posts.values()].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || '') || a.slug.localeCompare(b.slug));
}
