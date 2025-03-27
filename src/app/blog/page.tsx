import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts, getBlogCategories } from '@/utils/mdx';
import ClientBlogPage from '@/components/blog/ClientBlogPage';
import { Suspense } from 'react';

// This page can be static since we're reading from the filesystem
export const revalidate = 3600; // Revalidate every hour

function LoadingBlog() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading blog posts...</p>
      </div>
    </div>
  );
}

export default async function BlogHome() {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

  return (
    <Suspense fallback={<LoadingBlog />}>
      <ClientBlogPage posts={posts} categories={categories} />
    </Suspense>
  );
} 