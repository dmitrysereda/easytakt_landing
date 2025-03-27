import { notFound } from 'next/navigation';
import { getBlogPost } from '@/utils/mdx';
import ClientBlogPost from '@/components/blog/ClientBlogPost';
import { serialize } from 'next-mdx-remote/serialize';

export const dynamic = 'force-dynamic';

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