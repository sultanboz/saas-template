import type { MetadataRoute } from 'next'

// Keep this list in sync when you add new pages
const staticRoutes = [
  { path: '/',            priority: 1.0,  changeFrequency: 'monthly'  },
  { path: '/v2',          priority: 0.9,  changeFrequency: 'monthly'  },
  { path: '/v3',          priority: 0.9,  changeFrequency: 'monthly'  },
  { path: '/blog',        priority: 0.8,  changeFrequency: 'weekly'   },
  { path: '/about',       priority: 0.7,  changeFrequency: 'monthly'  },
  { path: '/contact',     priority: 0.6,  changeFrequency: 'yearly'   },
  { path: '/coming-soon', priority: 0.5,  changeFrequency: 'monthly'  },
  { path: '/login',       priority: 0.4,  changeFrequency: 'yearly'   },
] as const

// Blog slugs — must match lib/blog.ts generateStaticParams
const blogSlugs = [
  'why-nextjs-15-is-perfect-for-saas',
  'dark-mode-design-system',
  'framer-motion-scroll-animations',
  'saas-landing-page-conversion-anatomy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://nexlayer.io'
  const now     = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(r => ({
    url:              `${baseUrl}${r.path}`,
    lastModified:     now,
    changeFrequency:  r.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority:         r.priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url:             `${baseUrl}/blog/${slug}`,
    lastModified:    now,
    changeFrequency: 'monthly',
    priority:        0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
