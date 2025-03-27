import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts, getBlogCategories } from '@/utils/mdx';
import ClientBlogPage from '@/components/blog/ClientBlogPage';

export const dynamic = 'force-dynamic';

export default async function BlogHome() {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

  return <ClientBlogPage posts={posts} categories={categories} />;
} 