// This file is server-side only
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import yaml from 'js-yaml';

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

// Normalize category names to ensure consistency
const normalizeCategory = (category: string | undefined): string => {
  if (!category) return 'Uncategorized';
  return category
    .trim()
    .replace(/[&+]/g, 'and')
    .replace(/\s+/g, ' ');
};

interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: string;
  readTime: string;
  image: string;
}

export type BlogPost = BlogPostFrontmatter & {
  slug: string;
  content: string;
};

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const files = await readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = await readFile(filePath, 'utf8');
        
        // Use js-yaml for more robust YAML parsing
        const { data, content } = matter(fileContent, {
          engines: {
            yaml: {
              parse: (str: string) => yaml.load(str) as BlogPostFrontmatter,
              stringify: (obj: any) => yaml.dump(obj)
            }
          }
        });

        const frontmatter = data as BlogPostFrontmatter;
        
        // Ensure all required fields exist
        if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
          console.error(`Missing required frontmatter fields in ${file}`);
          return null;
        }

        return {
          slug: file.replace('.mdx', ''),
          ...frontmatter,
          category: normalizeCategory(frontmatter.category),
          content
        };
      })
  );

  // Filter out any null posts and sort by date
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const fileContent = await readFile(filePath, 'utf8');
    
    // Use js-yaml for more robust YAML parsing
    const { data, content } = matter(fileContent, {
      engines: {
        yaml: {
          parse: (str: string) => yaml.load(str) as BlogPostFrontmatter,
          stringify: (obj: any) => yaml.dump(obj)
        }
      }
    });

    const frontmatter = data as BlogPostFrontmatter;

    // Ensure all required fields exist
    if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
      console.error(`Missing required frontmatter fields in ${slug}.mdx`);
      return null;
    }

    return {
      slug,
      ...frontmatter,
      category: normalizeCategory(frontmatter.category),
      content
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
});

export const getBlogCategories = cache(async (): Promise<{ name: string; count: number }[]> => {
  const posts = await getBlogPosts();
  const categories = posts.reduce((acc, post) => {
    const category = post.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category]++;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categories)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}); 