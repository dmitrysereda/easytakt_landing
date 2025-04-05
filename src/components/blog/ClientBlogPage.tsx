'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Clock, ArrowRight, X, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { BlogPost, BlogCategory } from '@/types/blog';
import { useLanguage } from '@/contexts/LanguageContext';

interface ClientBlogPageProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

const getImagePath = (imagePath: string | undefined): string => {
  if (!imagePath) return '/images/blog/default-post.jpg';
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};

export default function ClientBlogPage({ posts, categories }: ClientBlogPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const { t } = useLanguage();

  useEffect(() => {
    const filtered = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || 
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory?.toLowerCase() === categoryName.toLowerCase()) {
      setSelectedCategory('');
      router.push('/blog');
    } else {
      setSelectedCategory(categoryName);
      router.push(`/blog?category=${encodeURIComponent(categoryName)}`);
    }
  };

  const handleCategoryDeselect = () => {
    setSelectedCategory('');
    router.push('/blog');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('blog.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('blog.hero.description')}
              </p>
              {selectedCategory && (
                <div className="flex items-center justify-center">
                  <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span>{t('blog.categories.showing_articles_in', { category: selectedCategory })}</span>
                    <button
                      onClick={handleCategoryDeselect}
                      className="hover:bg-blue-100 p-1 rounded-full transition-colors"
                      aria-label={t('blog.categories.clear_filter')}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Featured Posts */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {selectedCategory 
                    ? t('blog.posts.articles_in_category', { category: selectedCategory })
                    : t('blog.posts.latest_articles')}
                </h2>
                <div className="space-y-12">
                  {filteredPosts.map((post, index) => (
                    <div
                      key={post.slug}
                      className="group"
                    >
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="grid md:grid-cols-12 gap-8">
                          <div className="md:col-span-5">
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                              <Image
                                src={getImagePath(post.image)}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-7">
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleCategoryClick(post.category);
                                }}
                                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                              >
                                {post.category}
                              </button>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {post.description}
                            </p>
                            <div className="flex items-center text-blue-600 font-medium">
                              {t('blog.posts.read_more')}
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">{t('blog.categories.no_articles.message')}</p>
                    <button
                      onClick={handleCategoryDeselect}
                      className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {t('blog.categories.no_articles.view_all')}
                    </button>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              {/* Categories */}
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {t('blog.categories.title')}
                </h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => handleCategoryClick(category.name)}
                        className={`w-full flex items-center justify-between group px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory?.toLowerCase() === category.name.toLowerCase()
                            ? 'bg-blue-50 text-blue-600'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span className={`${
                          selectedCategory?.toLowerCase() === category.name.toLowerCase()
                            ? 'text-blue-600'
                            : 'text-gray-600 group-hover:text-gray-900'
                        } transition-colors`}>
                          {category.name}
                        </span>
                        <span className={`text-sm ${
                          selectedCategory?.toLowerCase() === category.name.toLowerCase()
                            ? 'text-blue-500'
                            : 'text-gray-400'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 