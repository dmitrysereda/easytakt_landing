import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/utils/mdx';
import ClientBlogPost from '@/components/blog/ClientBlogPost';
import { serialize } from 'next-mdx-remote/serialize';

// This page can be static since we're reading from the filesystem
export const revalidate = 3600; // Revalidate every hour

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const content = await serialize(post.content);

  return <ClientBlogPost post={post} content={content} />;
} 