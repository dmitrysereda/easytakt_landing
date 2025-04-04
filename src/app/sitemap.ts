import { MetadataRoute } from 'next';

// Define all static routes
const staticRoutes = [
  '',
  '/solutions',
  '/features',
  '/pricing',
  '/contact',
  '/blog',
  '/terms',
  '/privacy',
];

// Define all solution routes
const solutionRoutes = [
  '/solutions/medical-and-health',
  '/solutions/driving-schools',
  '/solutions/automotive-services',
  '/solutions/fitness-and-wellness',
  '/solutions/music-and-dance',
  '/solutions/pet-services',
  '/solutions/tutors-and-coaches',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://easytakt.com';
  
  // Generate sitemap entries for static routes
  const staticUrls = staticRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Generate sitemap entries for solution routes
  const solutionUrls = solutionRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Combine all URLs
  return [...staticUrls, ...solutionUrls];
} 