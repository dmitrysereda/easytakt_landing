export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: string;
  image: string;
}

export interface BlogCategory {
  name: string;
  count: number;
} 