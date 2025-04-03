'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { BlogPost } from '@/utils/mdx';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXComponents from '@/components/mdx/MDXComponents';
import { format } from 'date-fns';

// Helper function for image paths
const getImagePath = (imagePath: string | undefined): string => {
  if (!imagePath) return '/images/blog/default-post.jpg';
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};

interface ClientBlogPostProps {
  post: BlogPost;
  content: MDXRemoteSerializeResult;
}

export default function ClientBlogPost({ post, content }: ClientBlogPostProps) {
  const router = useRouter();

  useEffect(() => {
    document.title = `${post.title} | EasyTakt`;
  }, [post.title]);

  const handleCategoryClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    router.push(`/blog?category=${encodeURIComponent(post.category)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section with Navigation */}
        <div className="bg-gradient-to-b from-white to-gray-50 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="py-4">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-gray-700">
                    Blog
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
                <li>
                  <button
                    onClick={handleCategoryClick}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    {post.category}
                  </button>
                </li>
              </ol>
            </nav>

            <div className="mt-8">
              <button
                onClick={handleCategoryClick}
                className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {post.category}
              </button>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-8">
                {post.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={getImagePath(post.author.image)}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-600">{post.author.role}</p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>•</span>
                  <time dateTime={post.date}>
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.image && (
            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] -mt-8 mb-16">
              <Image
                src={getImagePath(post.image)}
                alt={post.title}
                fill
                className="object-cover shadow-xl rounded-xl"
                priority
              />
            </div>
          )}

          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-blue mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                {post.description}
              </p>
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>

            {/* Share and Category */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleCategoryClick}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {post.category}
                  </span>
                </button>
              </div>
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-24 mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Streamline Your Scheduling?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust EasyTakt to manage their appointments and grow their business.
              </p>
              <Link
                href="https://app.easytakt.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Try Free Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 